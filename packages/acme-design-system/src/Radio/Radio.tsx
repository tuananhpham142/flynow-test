'use client';
import React, { ChangeEvent, useId } from 'react';

import { RadioProps } from './Radio.types';
import clsx from 'clsx';
import { MainColor } from '../theme/theme.types';
import { RadioContext } from '../RadioGroup/RadioGroup';

const CheckedIcon = ({
    className,
    disabled = false,
    color,
}: {
    className?: string;
    disabled?: boolean;
    color: MainColor;
}) => {
    const iconFillColors: Record<MainColor, string> = {
        primary: disabled ? 'fill-primary-lighter' : 'fill-primary',
        secondary: disabled ? 'fill-secondary-lighter' : 'fill-secondary',
        success: disabled ? 'fill-success-lighter' : 'fill-success',
        danger: disabled ? 'fill-danger-lighter' : 'fill-danger',
        warning: disabled ? 'fill-warning-lighter' : 'fill-warning',
    };

    const iconStrokeColor: Record<MainColor, string> = {
        primary: disabled ? 'stroke-primary-lighter' : 'stroke-primary',
        secondary: disabled ? 'stroke-secondary-lighter' : 'stroke-secondary',
        success: disabled ? 'stroke-success-lighter' : 'stroke-success',
        danger: disabled ? 'stroke-danger-lighter' : 'stroke-danger',
        warning: disabled ? 'stroke-warning-lighter' : 'stroke-warning',
    };

    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                className={clsx('', iconStrokeColor[color])}
                d='M3 12C3 7.03228 7.03228 3 12 3C16.9677 3 21 7.03228 21 12C21 16.9677 16.9677 21 12 21C7.03228 21 3 16.9677 3 12Z'
                strokeWidth='2'
            />
            <path
                className={clsx('', iconFillColors[color])}
                d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
            />
        </svg>
    );
};

const UncheckIcon = ({
    className,
    disabled = false,
    error = false,
}: {
    className?: string;
    disabled?: boolean;
    error?: boolean;
}) => {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                className={error ? 'stroke-danger' : disabled ? `stroke-grey-300 fill-grey-200` : 'stroke-grey-800'}
                d='M3 12C3 7.03228 7.03228 3 12 3C16.9677 3 21 7.03228 21 12C21 16.9677 16.9677 21 12 21C7.03228 21 3 16.9677 3 12Z'
                strokeWidth='2'
            />
        </svg>
    );
};

const Radio: React.FC<RadioProps> = (props) => {
    const { name: nameContext, onChange: onChangeContext, value: valueContext } = React.useContext(RadioContext);

    const {
        name = nameContext,
        checked: checkedProp,
        defaultChecked,
        onChange,
        size = 'md',
        error,
        color = 'warning',
        variant,
        disabled,
        label,
        labelPlacement = 'right',
        value,
        otherProps,
    } = props;

    // label placement class name
    const radioLabelPlacementClasses: Record<string, string> = {
        left: 'flex-row-reverse justify-end items-center',
        right: 'items-center justify-start',
        top: 'flex-col-reverse justify-left',
        bottom: 'flex-col justify-left',
    };

    // wrapper class name
    const wrapperClasses = clsx(
        'flex gap-1',
        radioLabelPlacementClasses[labelPlacement],
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    );

    // label class name
    const radioLabelClassName = clsx(
        'select-none font-normal text-sm leading-[20px] text-grey-900',
        disabled && '!text-grey-500',
    );

    // render radio icon
    const renderRadioIcon = () => {
        const iconSizeClass = {
            sm: 'w-[20px] h-[20px]',
            md: 'w-[24px] h-[24px]',
            lg: 'w-[28px] h-[28px]',
        };

        const iconClasses = clsx('', 'flex-grow-0 flex-shrink-0', iconSizeClass[size]);

        return (
            <>
                <UncheckIcon
                    className={`${iconClasses} block peer-checked/radio:!hidden`}
                    disabled={disabled}
                    error={error}
                />
                <CheckedIcon
                    color={color}
                    className={`${iconClasses} hidden peer-checked/radio:!block`}
                    disabled={disabled}
                />
            </>
        );
    };

    const isChecked = valueContext ? valueContext === value : checkedProp;

    return (
        <div className='w-auto'>
            <label className={wrapperClasses}>
                <input
                    onChange={onChangeContext ? onChangeContext : onChange}
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    className='peer/radio hidden'
                    type='radio'
                    role='radio'
                    disabled={disabled}
                    checked={isChecked}
                    {...otherProps}
                />
                {renderRadioIcon()}
                {label && <span className={radioLabelClassName}>{label}</span>}
            </label>
        </div>
    );
};

Radio.displayName = 'SCRadio';

export default Radio;
