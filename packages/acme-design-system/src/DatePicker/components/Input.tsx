'use client';

import dayjs from 'dayjs';
import React, { useCallback, useContext, useEffect, useRef } from 'react';

import { DATE_FORMAT } from '../constants';
import DatepickerContext from '../contexts/DatepickerContext';
import { dateIsValid, parseFormattedDate } from '../helpers';

import clsx from 'clsx';
import { CloseIcon } from './utils';

type Props = {
    setContextRef?: (ref: React.RefObject<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (e: Props) => {
    // Context
    const {
        startAdornment,
        endAdornment,
        hasToggle,
        clearable,
        primaryColor,
        inputSize = 'md',
        period,
        dayHover,
        changeDayHover,
        calendarContainer,
        arrowContainer,
        inputText,
        changeInputText,
        hideDatepicker,
        changeDatepickerValue,
        asSingle,
        placeholder,
        separator,
        disabled,
        inputClassName,
        toggleClassName,
        toggleIcon,
        readOnly,
        displayFormat,
        inputId,
        inputName,
        classNames,
        popoverDirection,
    } = useContext(DatepickerContext);

    // UseRefs
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputInnerSize: Record<any, string> = {
        lg: ' text-base',
        md: ' text-[14px]',
    };
    // Functions
    const getClassName = useCallback(() => {
        const input = inputRef.current;

        if (input && typeof classNames !== 'undefined' && typeof classNames?.input === 'function') {
            return classNames.input(input);
        }

        const defaultInputClassName = clsx(
            'block w-full h-full resize-none overflow-hidden text-grey-800 focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none',
            inputInnerSize[inputSize],
            disabled && 'bg-grey-100 cursor-not-allowed',
            inputClassName,
        );

        return typeof inputClassName === 'function'
            ? inputClassName(defaultInputClassName)
            : typeof inputClassName === 'string' && inputClassName !== ''
            ? inputClassName
            : defaultInputClassName;
    }, [inputRef, classNames, primaryColor, inputClassName]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            const dates = [];

            if (asSingle) {
                const date = parseFormattedDate(inputValue, displayFormat);
                if (dateIsValid(date.toDate())) {
                    dates.push(date.format(DATE_FORMAT));
                }
            } else {
                const parsed = inputValue.split(separator);

                let startDate = null;
                let endDate = null;

                if (parsed.length === 2) {
                    startDate = parseFormattedDate(parsed[0], displayFormat);
                    endDate = parseFormattedDate(parsed[1], displayFormat);
                } else {
                    const middle = Math.floor(inputValue.length / 2);
                    startDate = parseFormattedDate(inputValue.slice(0, middle), displayFormat);
                    endDate = parseFormattedDate(inputValue.slice(middle), displayFormat);
                }

                if (dateIsValid(startDate.toDate()) && dateIsValid(endDate.toDate()) && startDate.isBefore(endDate)) {
                    dates.push(startDate.format(DATE_FORMAT));
                    dates.push(endDate.format(DATE_FORMAT));
                }
            }

            if (dates[0]) {
                changeDatepickerValue(
                    {
                        startDate: dates[0],
                        endDate: dates[1] || dates[0],
                    },
                    e.target,
                );
                if (dates[1]) changeDayHover(dayjs(dates[1]).add(-1, 'day').format(DATE_FORMAT));
                else changeDayHover(dates[0]);
            }

            changeInputText(e.target.value);
        },
        [asSingle, displayFormat, separator, changeDatepickerValue, changeDayHover, changeInputText],
    );

    const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                const input = inputRef.current;
                if (input) {
                    input.blur();
                }
                hideDatepicker();
            }
        },
        [hideDatepicker],
    );

    const getToggleClassName = useCallback(
        (placement: 'left' | 'right') => {
            const button = buttonRef.current;
            const placementClass = placement === 'left' ? 'relative' : 'absolute right-0';

            if (button && typeof classNames !== 'undefined' && typeof classNames?.toggleButton === 'function') {
                return classNames.toggleButton(button);
            }

            const defaultToggleClassName = `${placementClass} h-full px-3 text-grey-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed`;

            return typeof toggleClassName === 'function'
                ? toggleClassName(defaultToggleClassName)
                : typeof toggleClassName === 'string' && toggleClassName !== ''
                ? toggleClassName
                : defaultToggleClassName;
        },
        [toggleClassName, buttonRef, classNames],
    );

    // UseEffects && UseLayoutEffect
    useEffect(() => {
        if (inputRef && e.setContextRef && typeof e.setContextRef === 'function') {
            e.setContextRef(inputRef);
        }
    }, [e, inputRef]);

    useEffect(() => {
        const button = buttonRef?.current;

        function focusInput(e: Event) {
            e.stopPropagation();
            const input = inputRef.current;

            if (input) {
                input.focus();
                if (inputText) {
                    changeInputText('');
                    if (dayHover) {
                        changeDayHover(null);
                    }
                    if (period.start && period.end) {
                        changeDatepickerValue(
                            {
                                startDate: null,
                                endDate: null,
                            },
                            input,
                        );
                    }
                }
            }
        }

        if (button) {
            button.addEventListener('click', focusInput);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', focusInput);
            }
        };
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        dayHover,
        inputText,
        period.end,
        period.start,
        inputRef,
    ]);

    useEffect(() => {
        const div = calendarContainer?.current;
        const input = inputRef.current;
        const arrow = arrowContainer?.current;

        function showCalendarContainer() {
            if (arrow && div && div.classList.contains('hidden')) {
                div.classList.remove('hidden');
                div.classList.add('block');

                // window.innerWidth === 767
                const popoverOnUp = popoverDirection == 'up';
                const popoverOnDown = popoverDirection === 'down';
                if (
                    popoverOnUp ||
                    (window.innerWidth > 767 &&
                        window.screen.height - 100 < div.getBoundingClientRect().bottom &&
                        !popoverOnDown)
                ) {
                    div.classList.add('bottom-full');
                    div.classList.add('mb-2.5');
                    div.classList.remove('mt-2.5');
                    arrow.classList.add('-bottom-2');
                    arrow.classList.add('border-r');
                    arrow.classList.add('border-b');
                    arrow.classList.remove('border-l');
                    arrow.classList.remove('border-t');
                }

                setTimeout(() => {
                    div.classList.remove('translate-y-4');
                    div.classList.remove('opacity-0');
                    div.classList.add('translate-y-0');
                    div.classList.add('opacity-1');
                }, 1);
            }
        }

        if (div && input) {
            input.addEventListener('focus', showCalendarContainer);
        }

        return () => {
            if (input) {
                input.removeEventListener('focus', showCalendarContainer);
            }
        };
    }, [calendarContainer, arrowContainer, popoverDirection]);

    return (
        <div className='flex items-center h-full'>
            {startAdornment && startAdornment}

            <input
                ref={inputRef}
                type='text'
                className={getClassName()}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={
                    placeholder ? placeholder : `${displayFormat}${asSingle ? '' : ` ${separator} ${displayFormat}`}`
                }
                value={inputText}
                id={inputId}
                name={inputName}
                autoComplete='off'
                role='presentation'
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />

            {clearable && (
                <button ref={buttonRef} disabled={disabled} className={getToggleClassName('right')}>
                    <CloseIcon className='h-5 w-5' />
                </button>
            )}

            {endAdornment && endAdornment}
        </div>
    );
};

export default Input;
