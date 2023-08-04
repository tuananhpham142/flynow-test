import React from 'react';
import { RHFCheckboxProps } from './RHFCheckbox.type';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '../Checkbox/Checkbox';

const RHFCheckbox: React.FC<RHFCheckboxProps> = (props) => {
    const { rules, name, checkboxProps } = props;

    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({
                field,
                fieldState: { error, invalid, isTouched, isDirty },
                formState: { isSubmitting, isLoading },
            }) => (
                <Checkbox
                    {...field}
                    checked={field.value}
                    {...checkboxProps}
                    disabled={isLoading || isSubmitting}
                    name={name}
                    error={Boolean(error)}
                    helperText={error?.message || checkboxProps?.helperText}
                />
            )}
        />
    );
};

export default RHFCheckbox;
