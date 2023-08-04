'use client';
import { FC, Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input';
import { RHFInputProps } from './RHFInput.types';

const RHFInput: FC<RHFInputProps> = (props) => {
    const { rules, name, inputProps } = props;
    const { control, resetField } = useFormContext();

    const handleClearInput = () => {
        resetField(name, { defaultValue: null });
    };

    return (
        <Fragment>
            <Controller
                control={control}
                rules={rules}
                name={name}
                shouldUnregister={false}
                render={({
                    field: { onChange, onBlur, ref, value },
                    fieldState: { error, invalid, isTouched, isDirty },
                    formState: { isSubmitting, isLoading },
                }) => {
                    return (
                        <Input
                            {...inputProps}
                            onClear={handleClearInput}
                            disabled={isSubmitting || isLoading}
                            onChange={onChange}
                            onBlur={onBlur}
                            ref={ref}
                            name={name}
                            value={value}
                            // error handle
                            error={Boolean(error)}
                            helperText={error?.message || inputProps.helperText}
                        />
                    );
                }}
            />
        </Fragment>
    );
};

export default RHFInput;
