import { FC, Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import NumberInput from '../Input/NumberInput';
import { RHFInputNumberInterface } from './RHFInput.types';

const RHFNumberInput: FC<RHFInputNumberInterface> = (props) => {
    const { rules, name, numberInputProps } = props;
    const { control, resetField } = useFormContext();

    const handleClearInput = () => {
        resetField(name, { defaultValue: false });
    };

    return (
        <Fragment>
            <Controller
                control={control}
                rules={rules}
                name={name}
                render={({
                    field: { onChange, onBlur, ref, value },
                    fieldState: { error, invalid, isTouched, isDirty },
                    formState: { isSubmitting, isLoading },
                }) => {
                    return (
                        <NumberInput
                            name={name}
                            onValueChange={(value) => {
                                onChange(value.floatValue ? value.floatValue : '');
                            }}
                            disabled={isLoading || isSubmitting}
                            onClear={handleClearInput}
                            {...numberInputProps}
                            value={value ? value : ''}
                            error={Boolean(error)}
                            getInputRef={ref}
                            helperText={error?.message || numberInputProps.helperText}
                        />
                    );
                }}
            />
        </Fragment>
    );
};

RHFNumberInput.defaultProps = {};

export default RHFNumberInput;
