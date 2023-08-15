import React from 'react';
import { TagProps } from './Tag.types';
import clsx from 'clsx';
import IconButton from '../IconButton';

const Tag: React.FC<TagProps> = (props) => {
    const { children, customClasses, size, variant, onClick, closable, prefix, checked, onClose, color } = props;

    const mainColor = color || 'primary';
    const rootStyles = 'rounded inline-flex justify-between items-center';

    const variants = {
        solid: {
            muted: checked ? 'bg-grey-400 text-white' : 'bg-grey-200 text-grey-800',
            primary: checked ? 'bg-primary text-white' : 'bg-primary border border-primary text-white',
            secondary: checked ? 'bg-secondary text-white' : 'bg-secondary border border-secondary text-white',
            danger: checked ? 'bg-danger text-white' : 'bg-danger border border-danger text-white',
            success: checked ? 'bg-success text-white' : 'bg-success border border-success text-white',
            warning: checked ? 'bg-warning text-white' : 'bg-warning border border-warning text-white',
        },
        outline: {
            muted: checked
                ? 'bg-grey-400 text-white border border-grey-400'
                : 'bg-grey-200 text-grey-800 border border-grey-500',
            primary: checked
                ? 'bg-primary text-white border border-primary'
                : 'bg-primary-lighter text-primary border border-primary',
            secondary: checked
                ? 'bg-secondary text-white border border-secondary'
                : 'bg-secondary-light text-secondary border-secondary',
            danger: checked
                ? 'bg-danger text-white border border-danger'
                : 'bg-danger-light text-danger border border-danger',
            success: checked
                ? 'bg-success text-white border border-success'
                : 'bg-success-lighter text-success border border-success',
            warning: checked
                ? 'bg-warning text-white border border-warning'
                : 'bg-warning-lighter text-warning border border-warning',
        },
    };

    const sizes = {
        lg: 'py-1.5 px-2 text-base font-normal',
        md: 'py-px px-2 text-sm font-normal',
    };

    const rootClasses = clsx(
        rootStyles,
        variant && variants[variant][mainColor],
        size && sizes[size],
        onClick && 'cursor-pointer',
        customClasses?.root,
    );

    return (
        <div className={rootClasses} onClick={onClick}>
            {prefix}
            {children}
            {closable && (
                <IconButton
                    variant='text'
                    size={'sm'}
                    color={mainColor}
                    customClasses={{ root: 'ml-1' }}
                    onClick={onClose}
                >
                    <svg className='w-4 h-4' viewBox='0 0 20 20'>
                        <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z' />
                    </svg>
                </IconButton>
            )}
        </div>
    );
};

Tag.defaultProps = {
    variant: 'outline',
    size: 'md',
    color: 'muted',
};

export default Tag;
