import React from 'react';
import { RHFSelectProps } from './RHFSelect.type';

import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from '../Select';

const RHFSelect: FC<RHFSelectProps> = (props) => {
    const { rules, name, selectProps } = props;

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
                <Select
                    error={Boolean(error)}
                    helperText={error?.message || selectProps.helperText}
                    isDisabled={isLoading || isSubmitting}
                    {...selectProps}
                    {...field}
                />
            )}
        />
    );
};

RHFSelect.defaultProps = {};

export default RHFSelect;
