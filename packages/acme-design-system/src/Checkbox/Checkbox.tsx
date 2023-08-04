'use client';
import React from 'react';
import { CheckboxProps } from './Checkbox.types';
import clsx from 'clsx';
import { MainColor } from '../theme/theme.types';

const CheckedIcon = ({
    className,
    disabled = false,
    color,
    circle,
    indeterminate,
}: {
    className?: string;
    disabled?: boolean;
    circle?: boolean;
    color: MainColor;
    indeterminate?: boolean;
}) => {
    const iconFillColors: Record<MainColor, string> = {
        primary: disabled ? 'fill-primary-lighter' : 'fill-primary',
        secondary: disabled ? 'fill-secondary-lighter' : 'fill-secondary',
        success: disabled ? 'fill-success-lighter' : 'fill-success',
        danger: disabled ? 'fill-danger-lighter' : 'fill-danger',
        warning: disabled ? 'fill-warning-lighter' : 'fill-warning',
    };

    const iconStrokeColor: Record<MainColor, string> = {
        primary: disabled ? 'stroke-primary-light' : '',
        secondary: disabled ? 'stroke-white' : '',
        success: disabled ? 'stroke-success-light' : '',
        danger: disabled ? 'stroke-danger-light' : '',
        warning: disabled ? 'stroke-warning-light' : '',
    };

    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {circle ? (
                <circle className={clsx('', iconFillColors[color])} cx='12' cy='12' r='10' />
            ) : (
                <path
                    className={clsx('', iconFillColors[color])}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2 12C2 4.50054 4.50054 2 12 2C19.4995 2 22 4.50054 22 12C22 19.4995 19.4995 22 12 22C4.50054 22 2 19.4995 2 12Z'
                />
            )}
            <path
                className={clsx('', iconStrokeColor[color])}
                d={indeterminate ? 'M8 12H16' : 'M7 11L11 16L17 8'}
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

const UncheckIcon = ({
    className,
    disabled = false,
    error = false,
    circle,
}: {
    className?: string;
    disabled?: boolean;
    error?: boolean;
    circle?: boolean;
}) => {
    return (
        <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {circle ? (
                <circle
                    className={error ? 'stroke-danger' : disabled ? `stroke-grey-300 fill-grey-200` : 'stroke-grey-800'}
                    cx='12'
                    cy='12'
                    r='9'
                    strokeWidth='2'
                />
            ) : (
                <path
                    className={error ? 'stroke-danger' : disabled ? `stroke-grey-300 fill-grey-200` : 'stroke-grey-800'}
                    d='M2.75 12C2.75 8.29187 3.37787 6.0582 4.71803 4.71803C6.0582 3.37787 8.29187 2.75 12 2.75C15.7081 2.75 17.9418 3.37787 19.282 4.71803C20.6221 6.0582 21.25 8.29187 21.25 12C21.25 15.7081 20.6221 17.9418 19.282 19.282C17.9418 20.6221 15.7081 21.25 12 21.25C8.29187 21.25 6.0582 20.6221 4.71803 19.282C3.37787 17.9418 2.75 15.7081 2.75 12Z'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            )}
        </svg>
    );
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {
        id,
        name,
        error,
        label,
        value,
        circle,
        checked,
        disabled,
        helperText,
        size = 'md',
        color = 'warning',
        labelPlacement = 'right',
        defaultChecked,
        indeterminate,
        onChange,
        customClasses,
        variant,
        otherProps,
    } = props;

    const checkBoxPlacementClasses: Record<string, string> = {
        left: 'flex-row-reverse justify-end items-center',
        right: 'items-center justify-start',
        top: 'flex-col-reverse justify-left',
        bottom: 'flex-col justify-left',
    };
    const wrapperClasses = clsx(
        'flex gap-1',
        checkBoxPlacementClasses[labelPlacement],
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
    );

    const labelClasses = () => {
        const sizes: Record<string, string> = {
            sm: 'text-xs',
            md: 'text-sm ',
            lg: 'text-base',
        };
        return clsx(
            'select-none font-normal leading-[20px] text-grey-900',
            // indeterminate && !disabled && 'text-grey-900',
            disabled && 'text-grey-500',
            sizes[size],
            customClasses?.label,
        );
    };

    const helperTextClasses = clsx(
        'text-[13px] leading-[20px] pl-[8px] h-[20px]',
        {
            'text-danger': error,
        },
        {
            'text-grey-500': !error,
        },
    );

    const renderCheckboxIcon = () => {
        const iconSizeClass = {
            sm: 'w-[20px] h-[20px]',
            md: 'w-[24px] h-[24px]',
            lg: 'w-[28px] h-[28px]',
        };

        const iconClasses = clsx('', 'flex-grow-0 flex-shrink-0', iconSizeClass[size]);

        if (indeterminate) {
            return (
                <CheckedIcon
                    circle={circle}
                    indeterminate
                    color={color}
                    className={`${iconClasses}`}
                    disabled={disabled}
                />
            );
        }

        return (
            <>
                <UncheckIcon
                    circle={circle}
                    className={`${iconClasses} block peer-checked/checkbox:hidden`}
                    disabled={disabled}
                    error={error}
                />
                <CheckedIcon
                    circle={circle}
                    color={color}
                    className={`${iconClasses} hidden peer-checked/checkbox:block`}
                    disabled={disabled}
                />
            </>
        );
    };

    return (
        <div className='w-auto'>
            <label className={wrapperClasses}>
                <input
                    onChange={onChange}
                    id={id}
                    value={value}
                    name={name}
                    defaultChecked={defaultChecked}
                    className='peer/checkbox hidden'
                    type='checkbox'
                    disabled={disabled}
                    checked={checked}
                    {...otherProps}
                />
                {renderCheckboxIcon()}
                {label && <span className={labelClasses()}>{label}</span>}
            </label>
            {helperText && <div className={helperTextClasses}>{helperText}</div>}
        </div>
    );
};

Checkbox.displayName = 'SCCheckbox';

export default Checkbox;
