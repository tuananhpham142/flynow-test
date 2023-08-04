import clsx from 'clsx';
import type { FC } from 'react';
import { IconButtonProps } from './IconButton.types';

const IconButton: FC<IconButtonProps> = (props) => {
    const { variant, size, onClick, customClasses, disabled, isLoading, children, color } = props;

    const rootStyles = `inline-flex items-center justify-center duration-150 rounded-full text-base font-normal`;

    const variants = {
        contained: {
            primary: `bg-primary text-grey-100 fill-grey-100 hover:bg-primary-dark focus:bg-primary-darker`,
            secondary: `bg-secondary text-grey-100 fill-grey-100 hover:bg-secondary-dark focus:bg-secondary-darker`,
            danger: `bg-danger text-grey-100 fill-grey-100 hover:bg-danger-dark focus:bg-danger-darker`,
            success: `bg-success text-grey-100 fill-grey-100 hover:bg-success-dark focus:bg-success-darker`,
            warning: `bg-warning text-grey-100 fill-grey-100 hover:bg-warning-dark focus:bg-warning-darker`,
            muted: `bg-grey-300 text-grey-800 fill-grey-800 hover:bg-grey-400 focus:bg-grey-400`,
        },
        outline: {
            primary: `bg-grey-100 text-primary fill-primary border border-primary border-solid hover:bg-primary-lighter focus:bg-primary-lighter focus:text-primary-darker focus:border-primary-darker`,
            secondary: `bg-grey-100 text-secondary fill-secondary border border-secondary border-solid hover:bg-secondary-lighter focus:bg-secondary-lighter focus:text-secondary-darker focus:border-secondary-darker`,
            danger: `bg-grey-100 text-danger fill-danger border border-danger border-solid hover:bg-danger-lighter focus:bg-danger-lighter focus:text-danger-darker focus:border-danger-darker`,
            success: `bg-grey-100 text-success fill-success border border-success border-solid hover:bg-success-lighter focus:bg-success-lighter focus:text-success-darker focus:border-success-darker`,
            warning: `bg-grey-100 text-warning fill-warning border border-warning border-solid hover:bg-warning-lighter focus:bg-warning-lighter focus:text-warning-darker focus:border-warning-darker`,
            muted: `bg-grey-100 text-grey-500 fill-grey-500 border border-grey-400 border-solid hover:bg-grey-200 focus:bg-grey-200 focus:text-grey-400 focus:border-grey-500`,
        },
        text: {
            primary: `text-primary fill-primary hover:bg-grey-300 focus:text-grey-800 focus:bg-primary-lighter`,
            secondary: `text-secondary fill-secondary hover:bg-grey-300 focus:text-grey-800 focus:bg-secondary-lighter`,
            danger: `text-danger fill-danger hover:bg-danger-lighter focus:text-danger-darker focus:bg-danger-lighter`,
            success: `text-success fill-success hover:bg-success-lighter focus:text-success-darker focus:bg-success-lighter`,
            warning: `text-warning fill-warning hover:bg-warning-lighter focus:text-warning-darker focus:bg-warning-lighter`,
            muted: `text-grey-500 fill-grey-500 hover:bg-grey-200 focus:text-grey-600 focus:bg-grey-200`,
        },
    };
    const mainColor = color || 'primary';

    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12',
    };

    const rootClasses = clsx(
        rootStyles,
        variant && variants[variant][mainColor],
        size && sizes[size],
        disabled && 'bg-grey-200 text-grey-400 cursor-not-allowed hover:bg-grey-200',
        customClasses?.root,
    );

    return (
        <button className={rootClasses} disabled={disabled || isLoading} onClick={onClick}>
            {isLoading ? (
                <svg className='animate-spin h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                </svg>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};

IconButton.defaultProps = {
    variant: 'contained',
    size: 'md',
    color: 'muted',
};

export default IconButton;
