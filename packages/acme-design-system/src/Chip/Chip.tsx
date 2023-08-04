import clsx from 'clsx';
import React from 'react';
import { ChipProps } from './Chip.types';

const Chip: React.FC<ChipProps> = (props) => {
    const { children, customClasses, size, variant, onClick, suffix, prefix, checked, color, rounded } = props;

    const rootStyles = 'inline-flex items-center';

    const mainColor = color || 'primary';

    const variants = {
        contained: {
            primary: checked
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-grey-200 text-primary hover:bg-primary-lighter',
            secondary: checked
                ? 'bg-secondary text-white hover:bg-secondary-dark'
                : 'bg-secondary-lighter text-secondary hover:bg-secondary-light hover:text-white',
            warning: checked
                ? 'bg-warning text-white hover:bg-warning-dark'
                : 'bg-warning-lighter text-warning hover:bg-warning-light hover:text-white',
            danger: checked
                ? 'bg-danger text-white hover:bg-danger-dark'
                : 'bg-danger-lighter text-danger hover:bg-danger-light hover:text-white',
            success: checked
                ? 'bg-success text-white hover:bg-success-dark'
                : 'bg-success-lighter text-success hover:bg-success-light hover:text-white',
        },
        outline: {
            primary: checked
                ? 'bg-primary text-white hover:bg-primary-dark border border-primary'
                : 'bg-white text-primary border border-primary hover:bg-primary-lighter',
            secondary: checked
                ? 'bg-secondary text-white hover:bg-secondary-dark border border-secondary'
                : 'bg-white text-secondary border border-secondary hover:bg-secondary-lighter',
            warning: checked
                ? 'bg-warning text-white hover:bg-warning-dark border border-warning'
                : 'bg-white text-warning border border-warning hover:bg-warning-lighter',
            danger: checked
                ? 'bg-danger text-white hover:bg-danger-dark border border-danger'
                : 'bg-white text-danger border border-danger hover:bg-danger-lighter',
            success: checked
                ? 'bg-success text-white hover:bg-success-dark border border-success'
                : 'bg-white text-success border border-success hover:bg-success-lighter',
        },
    };

    const roundedVariants = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
    };

    const sizes = {
        lg: 'h-10 py-2 px-4 text-base font-normal',
        md: 'h-8 py-1.5 px-4 text-sm font-normal',
        sm: 'py-0.5 px-2 text-sm font-normal',
    };

    const rootClasses = clsx(
        rootStyles,
        variant && variants[variant][mainColor],
        size && sizes[size],
        rounded && roundedVariants[rounded],
        onClick && 'cursor-pointer',
        customClasses?.root,
    );

    return (
        <div className={rootClasses} onClick={onClick}>
            {prefix && <span className='mr-1'>{prefix}</span>}

            {children}

            {suffix && <span className='ml-1'>{suffix}</span>}
        </div>
    );
};

Chip.defaultProps = {
    variant: 'contained',
    size: 'md',
    rounded: 'full',
};

export default Chip;
