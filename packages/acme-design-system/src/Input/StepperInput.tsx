'use client';
import React, { useCallback } from 'react';
import { isNil } from 'lodash';
import { StepperInputProps } from './Input.types';

function getDecimalLength(value: number): number {
    const isNumber = (value: string | number) => /(^-?|^\+?|^\d?)\d*\.\d+$/.test(value + '');
    if (isNumber(value)) {
        return value.toString().split('.')[1].length;
    }
    return 0;
}
function decimals(...values: number[]) {
    const lengths: number[] = values.map(getDecimalLength);
    return Math.max(...lengths);
}
function valueReachesMax(value: number | string | undefined, max: number) {
    if (!isNil(value)) {
        return +value >= max;
    }
    return false;
}
function valueReachesMin(value: number | string | undefined, min: number) {
    if (!isNil(value)) {
        return +value <= min;
    }
    return false;
}

const StepperInput: React.FC<StepperInputProps> = (props) => {
    const {
        disabled,
        onChange,
        size = 'md',
        step = 1,
        readOnly,
        max: maxProp,
        min: minProp,
        name,
        value: valueProp,
    } = props;
    const min = minProp ?? -Infinity;
    const max = maxProp ?? Infinity;
    const [uncontrolledValue, setUncontrolledValue] = React.useState(valueProp);

    const value = valueProp ?? uncontrolledValue;
    const setValue = onChange ?? setUncontrolledValue;

    // handler
    const getSafeValue = useCallback(
        (value: any) => {
            if (!Number.isNaN(value)) {
                if (+value > max) {
                    value = max;
                }
                if (+value < min) {
                    value = min;
                }
            } else {
                value = '';
            }
            return value.toString();
        },
        [max, min],
    );
    const handleStepUp = useCallback(
        (event: React.SyntheticEvent) => {
            event?.preventDefault();
            const val = +(value || 0);
            const bit = decimals(val, step);
            // setUncontrolledValue(getSafeValue((val + step).toFixed(bit)));
            const safeValue = getSafeValue((val + step).toFixed(bit));
            setValue(safeValue);
            onChange?.(safeValue);
        },
        [getSafeValue, step, value],
    );
    const handleStepDown = useCallback(
        (event: React.SyntheticEvent) => {
            event?.preventDefault();
            const val = +(value || 0);
            const bit = decimals(val, step);

            const safeValue = getSafeValue((val - step).toFixed(bit));
            setValue(safeValue);
            onChange?.(safeValue);
        },
        [getSafeValue, step, value],
    );
    const handleChangeValue = useCallback(
        (newValue: number) => {
            if (newValue !== value) {
                const safeValue = getSafeValue(newValue);
                setValue(safeValue);
                onChange?.(safeValue);
            }
        },
        [onChange, setValue, value],
    );
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value as any;
            if (!/^-?(?:\d+)?(\.)?\d*$/.test(value) && value !== '') {
                return;
            }
            handleChangeValue(value);
        },
        [handleChangeValue],
    );

    // condition states
    const stepUpDisabled = disabled || readOnly || valueReachesMax(value, max);
    const stepDownDisabled = disabled || readOnly || valueReachesMin(value, min);

    return (
        <div className={'flex items-center justify-between h-[32px] w-[112px]'}>
            <button disabled={stepDownDisabled} onClick={handleStepDown} className='cursor-pointer h-full'>
                <svg
                    width='32'
                    height='32'
                    className={`${stepDownDisabled ? 'fill-grey-300' : 'fill-primary'}`}
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M16.0001 29.3334C23.3639 29.3334 29.3334 23.3638 29.3334 16C29.3334 8.63622 23.3639 2.66669 16.0001 2.66669C8.63628 2.66669 2.66675 8.63622 2.66675 16C2.66675 23.3638 8.63628 29.3334 16.0001 29.3334ZM10.6667 14.6667C9.93029 14.6667 9.33333 15.2636 9.33333 16C9.33333 16.7364 9.93029 17.3334 10.6667 17.3334H21.3333C22.0697 17.3334 22.6667 16.7364 22.6667 16C22.6667 15.2636 22.0697 14.6667 21.3333 14.6667H10.6667Z'
                    />
                </svg>
            </button>
            <input
                name={name}
                className='w-[40px] h-[24px] text-[16px] text-center leading-[20px] focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                type='number'
                autoComplete='off'
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                step={step}
                max={max}
                min={min}
                onChange={handleChange}
            />
            <button disabled={stepUpDisabled} onClick={handleStepUp} className='cursor-pointer h-full'>
                <svg
                    width='32'
                    height='32'
                    className={`${stepUpDisabled ? 'fill-grey-300' : 'fill-primary'}`}
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M16.0001 29.3334C23.3639 29.3334 29.3334 23.3638 29.3334 16C29.3334 8.63622 23.3639 2.66669 16.0001 2.66669C8.63628 2.66669 2.66675 8.63622 2.66675 16C2.66675 23.3638 8.63628 29.3334 16.0001 29.3334ZM17.3333 10.6667C17.3333 9.93031 16.7364 9.33336 16 9.33336C15.2636 9.33336 14.6667 9.93031 14.6667 10.6667V14.6667H10.6667C9.93029 14.6667 9.33333 15.2636 9.33333 16C9.33333 16.7364 9.93029 17.3334 10.6667 17.3334H14.6667V21.3334C14.6667 22.0697 15.2636 22.6667 16 22.6667C16.7364 22.6667 17.3333 22.0697 17.3333 21.3334V17.3334H21.3333C22.0697 17.3334 22.6667 16.7364 22.6667 16C22.6667 15.2636 22.0697 14.6667 21.3333 14.6667H17.3333V10.6667Z'
                    />
                </svg>
            </button>
        </div>
    );
};

export default StepperInput;
