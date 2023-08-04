import React from 'react';
import { RHFRadioGroupProps } from './RHFRadioGroup.type';
import { Controller, useFormContext } from 'react-hook-form';
import RadioGroup from '../RadioGroup/RadioGroup';

const RHFRadioGroup: React.FC<RHFRadioGroupProps> = (props) => {
    const { rules, name, radioGroupProps, children } = props;

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
                <RadioGroup
                    {...field}
                    {...radioGroupProps}
                    name={name}
                    error={Boolean(error)}
                    helperText={error?.message || radioGroupProps?.helperText}
                >
                    {children}
                </RadioGroup>
            )}
        />
    );
};

export default RHFRadioGroup;
