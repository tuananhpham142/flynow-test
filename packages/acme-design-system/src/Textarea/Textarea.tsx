'use client';
import clsx from 'clsx';
import React from 'react';
import FormLabel from '../FormLabel';
import HelperText from '../HelperText/HelperText';
import { TextareaProps } from './Textarea.types';

const TextArea: React.FC<TextareaProps> = (props) => {
    const {
        textAreaRef,
        size = 'md',
        color,
        variant,
        multiline = false,
        fullWidth,
        label,
        error,
        helperText,
        customClasses,
        textAreaProps,
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
    } = props;

    const { current: isControlledTextArea } = React.useRef(value != null);

    const [textAreaValue, setTextAreaValue] = React.useState<any>(value);

    // textArea container classes
    const textAreaContainerClassName = clsx(
        'flex items-center gap-1 p-[8px] rounded-sm bg-white border border-grey-400 overflow-hidden',
        'focus-within:border-primary',
        fullWidth ? 'w-full' : 'w-[200px]',
        error && 'focus-within:border-danger border-danger',
        disabled && 'bg-grey-100 cursor-not-allowed',
    );

    // textArea classes
    const textAreaSizes: Record<any, string> = {
        lg: ' text-base',
        md: ' text-[14px]',
    };
    const textAreaClassName = clsx(
        'block w-full h-full overflow-hidden text-grey-800',
        'focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none',
        textAreaSizes[size],
        disabled && 'bg-grey-100 cursor-not-allowed',
    );

    // handler
    const handleOnChange = (e: any) => {
        if (isControlledTextArea) {
            onChange && onChange(e);
        } else {
            setTextAreaValue(e.target.value);
        }
    };

    return (
        <div className='w-auto'>
            {label && <FormLabel label={label} disabled={disabled} required={required} size={size} />}

            <div className={textAreaContainerClassName}>
                <textarea
                    ref={textAreaRef}
                    className={textAreaClassName}
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={handleOnChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    autoFocus={autoFocus}
                    name={name}
                    id={id}
                    value={textAreaValue}
                    defaultValue={defaultValue}
                    {...textAreaProps}
                />
            </div>
            {helperText && <HelperText message={helperText} error={error} color={color} size={size} />}
        </div>
    );
};

export default TextArea;
