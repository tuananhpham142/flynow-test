'use client';
import React, { forwardRef, Ref } from 'react';
import SelectBase, { GroupBase, Options } from 'react-select';
import SelectType from 'react-select/dist/declarations/src/Select';
import {
    classGenerator,
    ClearIndicator,
    Control,
    DropdownIndicator,
    IndicatorSeparator,
    inputContainerClasses,
    labelClasses,
    Option,
} from '../common/selectCommonStyle';
import { SelectProps, OptionItem } from './Select.types';
import clsx from 'clsx';
import FormLabel from '../FormLabel/FormLabel';
import HelperText from '../HelperText/HelperText';

const Select: React.FC<SelectProps> = forwardRef(
    (props: SelectProps, ref: Ref<SelectType<any, boolean, GroupBase<any>>> | undefined) => {
        const {
            noSeparator,
            label,
            color,
            size = 'md',
            fullWidth,
            variant,
            isDisabled,
            required,
            customClasses,
            placeholder,
            helperText,
            isMulti,
            error,
            onChange,
        } = props;

        return (
            <div className={`flex flex-col ${fullWidth ? 'w-full' : ''}`}>
                {label && <FormLabel label={label} disabled={isDisabled} required={required} size={size} />}
                <div className={inputContainerClasses(props)}>
                    <SelectBase
                        {...props}
                        required={false}
                        ref={ref}
                        styles={{
                            container: (base, state) => ({
                                ...base,
                                height: '100%',
                                minHeight: props.size === 'lg' && state.hasValue ? 'auto' : 'undefined',
                            }),
                            multiValueLabel: (base, state) => ({
                                ...base,
                                padding: 0,
                                marginRight: 4,
                            }),
                            menu: (base, state) => {
                                return {
                                    ...base,
                                    fontSize: '14px',
                                    zIndex: 2,
                                };
                            },
                            control: (base, state) => ({
                                ...base,
                                background: 'transparent',
                                minHeight: 'auto !important',
                                boxShadow: state.isFocused ? 'none' : 'none',
                            }),
                            indicatorSeparator: (base, state) => {
                                return noSeparator ? {} : { ...base };
                            },
                            valueContainer: (base, state) => {
                                return {
                                    ...base,
                                    padding: '0px 8px',
                                    fontSize: props.size === 'md' ? '14px' : '16px',
                                    height: '100%',
                                };
                            },

                            indicatorsContainer: (base) => {
                                return {
                                    ...base,
                                    height: '100%',
                                    padding: 0,
                                    // paddingRight: 4,
                                    alignSelf: 'center',
                                };
                            },
                            input: (base) => {
                                return {
                                    ...base,
                                    height: '100%',
                                    margin: 0,
                                    padding: 0,
                                };
                            },
                        }}
                        isOptionDisabled={(option: OptionItem, selectValue: Options<OptionItem>) =>
                            props.isOptionDisabled
                                ? props.isOptionDisabled(option, selectValue)
                                : Boolean(option?.disabled)
                        }
                        className={classGenerator(props)}
                        classNamePrefix={''}
                        components={{
                            Control,
                            DropdownIndicator,
                            IndicatorSeparator,
                            ClearIndicator,
                            Option: Option,
                            ...props.components,
                        }}
                        closeMenuOnSelect={!isMulti}
                        placeholder={placeholder}
                    />
                    {helperText && <HelperText message={helperText} error={error} size={size} />}
                </div>
            </div>
        );
    },
);

Select.displayName = 'SCSelect';

export default Select;
