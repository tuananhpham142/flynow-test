import clsx from 'clsx';
import type { FC } from 'react';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        variant,
        size,
        onClick,
        customClasses,
        disabled,
        startIcon,
        endIcon,
        fullWidth,
        isLoading,
        className,
        color,
        rounded,
    } = props;

    const rootStyles = `inline-flex items-center justify-center duration-150 cursor-pointer`;

    const mainColor: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'muted' = color || 'primary';

    const variants: Record<
        'contained' | 'outline' | 'text',
        Record<'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'muted', string>
    > = {
        contained: {
            primary: `bg-primary text-grey-100 fill-grey-100 hover:bg-primary-dark focus:bg-primary-darker`,
            secondary: `bg-secondary text-grey-100 fill-grey-100 hover:bg-secondary-dark focus:bg-secondary-darker`,
            danger: `bg-danger text-grey-100 fill-grey-100 hover:bg-danger-dark focus:bg-danger-darker`,
            success: `bg-success text-grey-100 fill-grey-100 hover:bg-success-dark focus:bg-success-darker`,
            warning: `bg-warning text-grey-100 fill-grey-100 hover:bg-warning-dark focus:bg-warning-darker`,
            muted: '',
        },
        outline: {
            primary: `bg-grey-100 text-primary fill-primary border border-primary border-solid hover:bg-primary-lighter focus:bg-primary-lighter focus:text-primary-darker focus:border-primary-darker`,
            secondary: `bg-grey-100 text-secondary fill-secondary border border-secondary border-solid hover:bg-secondary-lighter focus:bg-secondary-lighter focus:text-secondary-darker focus:border-secondary-darker`,
            danger: `bg-grey-100 text-danger fill-danger border border-danger border-solid hover:bg-danger-lighter focus:bg-danger-lighter focus:text-danger-darker focus:border-danger-darker`,
            success: `bg-grey-100 text-success fill-success border border-success border-solid hover:bg-success-lighter focus:bg-success-lighter focus:text-success-darker focus:border-success-darker`,
            warning: `bg-grey-100 text-warning fill-warning border border-warning border-solid hover:bg-warning-lighter focus:bg-warning-lighter focus:text-warning-darker focus:border-warning-darker`,
            muted: '',
        },
        text: {
            primary: `text-primary fill-primary hover:bg-primary-lighter focus:text-primary-darker focus:bg-primary-lighter`,
            secondary: `text-secondary fill-secondary hover:bg-secondary-lighter focus:text-secondary-darker focus:bg-secondary-lighter`,
            danger: `text-danger fill-danger hover:bg-danger-lighter focus:text-danger-darker focus:bg-danger-lighter`,
            success: `text-success fill-success hover:bg-success-lighter focus:text-success-darker focus:bg-success-lighter`,
            warning: `text-warning fill-warning hover:bg-warning-lighter focus:text-warning-darker focus:bg-warning-lighter`,
            muted: `text-grey-500 fill-grey-500 hover:bg-grey-300 focus:text-grey-700 focus:bg-grey-300`,
        },
    };

    const sizes = {
        sm: 'text-sm font-normal py-0.5 px-2',
        md: 'text-sm font-bold py-1.5 px-3',
        lg: 'text-base font-bold py-2 px-4',
        xl: 'text-base font-bold py-3 px-6',
    };

    const iconSizes = {
        sm: 'text-[16px]',
        md: 'text-[20px]',
        lg: 'text-[24px]',
        xl: 'text-[24px]',
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

    const rootClasses = clsx(
        rootStyles,
        variant && variants[variant][mainColor],
        size && sizes[size],
        rounded && roundedVariants[rounded],
        fullWidth && 'w-full',
        disabled && '!bg-grey-200 !text-grey-400 !cursor-not-allowed !hover:bg-grey-200',
        isLoading && 'cursor-progress',
        className,
        customClasses?.root,
    );

    const iconClasses = clsx(
        startIcon && 'mr-1',
        endIcon && 'ml-1',
        size && iconSizes[size],
        disabled && 'text-grey-300',
    );

    return (
        <button className={rootClasses} disabled={disabled || isLoading} onClick={onClick}>
            {startIcon && !isLoading && <span className={iconClasses}>{startIcon}</span>}

            {isLoading && (
                <svg
                    className='animate-spin -ml-1 mr-1 h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                >
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                </svg>
            )}

            <span className={customClasses?.label}>{children}</span>

            {endIcon && !isLoading && <span className={iconClasses}>{endIcon}</span>}
        </button>
    );
};

Button.defaultProps = {
    variant: 'contained',
    size: 'md',
    color: 'primary',
    rounded: 'rounded',
};

export default Button;
