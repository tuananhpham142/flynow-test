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
    const [value, setValue] = React.useState(valueProp);

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
            // setValue(getSafeValue((val + step).toFixed(bit)));
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
                <i
                    className={`icon icon-minus-circle-fill text-[32px] ${
                        stepDownDisabled ? 'text-grey-300' : 'text-primary'
                    }`}
                />
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
                <i
                    className={`icon icon-plus-circle-fill text-[32px] ${
                        stepUpDisabled ? 'text-grey-300' : 'text-primary'
                    }`}
                />
            </button>
        </div>
    );
};

export default StepperInput;
