'use client';
import clsx from 'clsx';
import React from 'react';
import FormLabel from '../FormLabel';
import HelperText from '../HelperText/HelperText';
import { InputProps } from './Input.types';

const ClearIcon = () => {
    return (
        <svg
            className='fill-grey-400 cursor-pointer'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.20711 7.79289C8.81658 7.40237 8.18342 7.40237 7.79289 7.79289C7.40237 8.18342 7.40237 8.81658 7.79289 9.20711L10.5858 12L7.79289 14.7929C7.40237 15.1834 7.40237 15.8166 7.79289 16.2071C8.18342 16.5976 8.81658 16.5976 9.20711 16.2071L12 13.4142L14.7929 16.2071C15.1834 16.5976 15.8166 16.5976 16.2071 16.2071C16.5976 15.8166 16.5976 15.1834 16.2071 14.7929L13.4142 12L16.2071 9.20711C16.5976 8.81658 16.5976 8.18342 16.2071 7.79289C15.8166 7.40237 15.1834 7.40237 14.7929 7.79289L12 10.5858L9.20711 7.79289Z'
            />
        </svg>
    );
};

const Input: React.FC<InputProps> = (props: InputProps) => {
    const {
        type: typeProp,
        size = 'md',
        color,
        variant,
        fullWidth,
        label,
        error,
        helperText,
        customClasses,
        inputProps,
        value,
        onBlur,
        onChange,
        onFocus,
        onKeyDown,
        onKeyUp,
        onClear,
        placeholder,
        readOnly,
        disabled,
        required,
        autoFocus,
        name,
        id,
        defaultValue,
        endAdornment,
        startAdornment,
        ref,
    } = props;

    const [inputValue, setInputValue] = React.useState<any>(value || '');

    // input container classes
    const inputContainerSize: Record<string, string> = {
        lg: 'p-[8px] leading-[24px] h-[40px]',
        md: 'px-[8px] py-[6px] leading-[20px] h-[32px]',
    };
    const inputContainerClasses = clsx(
        'flex items-center gap-1 rounded-[2px] border border-1 border-grey-400 bg-white focus-within:border-primary overflow-hidden',
        fullWidth ? 'w-full' : 'w-[200px]',
        { 'focus-within:!border-danger !border-danger': error },
        disabled && 'bg-grey-100 cursor-not-allowed',
        inputContainerSize[size],
        customClasses?.inputContainer,
    );

    // input classes
    const inputSize: Record<any, string> = {
        lg: ' text-base',
        md: ' text-[14px]',
    };
    const inputClasses = clsx(
        'block w-full h-full resize-none overflow-hidden text-grey-800 focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none',
        '[&:-webkit-autofill]:[-webkit-box-shadow:_0_0_0_30px_white_inset_!important]',
        inputSize[size],
        disabled && 'bg-grey-100 cursor-not-allowed',
        customClasses?.input,
    );

    const iconClasses = clsx('end-2', inputValue ? 'visible' : 'invisible');

    // handler
    const handleClearInput = () => {
        onClear && onClear();
        setInputValue('');
    };

    const handleChangeInput: InputProps['onChange'] = (e) => {
        onChange && onChange(e);
        setInputValue(e.target.value);
    };

    React.useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <div className='w-auto'>
            {label && <FormLabel label={label} disabled={disabled} required={required} size={size} />}

            <div className={inputContainerClasses}>
                {startAdornment && startAdornment}
                <input
                    // {...inputProps}
                    type={typeProp}
                    className={inputClasses}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={handleChangeInput}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    autoFocus={autoFocus}
                    name={name}
                    id={id}
                    value={inputValue}
                    ref={ref}
                />

                <div
                    onClick={() => {
                        handleClearInput();
                    }}
                    className={iconClasses}
                >
                    <ClearIcon />
                </div>
                {endAdornment && endAdornment}
            </div>

            {helperText && <HelperText message={helperText} error={error} size={size} />}
        </div>
    );
};

export default Input;
