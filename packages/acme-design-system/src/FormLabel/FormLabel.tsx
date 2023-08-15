import clsx from 'clsx';
import React from 'react';
import { FormLabelProps } from './FormLabel.types';

const FormLabel: React.FC<FormLabelProps> = (props) => {
    const { label, size = 'md', disabled, required, color } = props;

    const labelSizes: Record<string, string> = {
        sm: 'text-sm leading-[20px]',
        md: 'text-sm leading-[20px]',
        lg: 'text-base leading-[24px]',
    };

    const labelClassName = clsx('font-normal', labelSizes[size], {
        'text-grey-500': disabled,
        'after:content-["_*"] after:text-danger': required,
    });
    return (
        <div className='flex items-center gap-1 mb-1'>
            <label className={labelClassName}>{label}</label>
            {/* <InfoIcon /> */}
        </div>
    );
};

export default FormLabel;

const InfoIcon = () => {
    return (
        <svg
            className='w-[16px] height-[16px]'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z'
                fill='#212B36'
            />
            <path
                d='M12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z'
                fill='#212B36'
            />
            <path
                d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z'
                fill='#212B36'
            />
        </svg>
    );
};
