import { ComponentType } from 'react';
import {
    ClearIndicatorProps,
    components,
    ControlProps,
    DropdownIndicatorProps,
    GroupBase,
    IndicatorSeparatorProps,
    OptionProps,
} from 'react-select';
import { OptionItem, SelectProps } from '../Select/Select.types';
import clsx from 'clsx';

export const Control: ComponentType<ControlProps<OptionItem, boolean, GroupBase<OptionItem>>> = (
    props: ControlProps<OptionItem, boolean, GroupBase<OptionItem>>,
) => {
    const Control = components.Control;
    // console.log(props);

    return (
        <Control
            {...props}
            className={classControlGenerator(props.selectProps as unknown as SelectProps, props.isFocused)}
        />
    );
};
export const DropdownIndicator: ComponentType<DropdownIndicatorProps<OptionItem, boolean, GroupBase<OptionItem>>> = (
    props: any,
) => {
    const DropdownIndicator = components.DropdownIndicator;
    return (
        <DropdownIndicator
            {...props}
            className={`!py-[6px] !pr-[6px] !pl-[4px] h-full ${
                props?.isDisabled ? 'text-grey-500' : `text-${props.selectProps?.color}`
            }`}
        >
            <span className='flex items-center'>
                <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9'
                        stroke='#181C32'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </span>
        </DropdownIndicator>
    );
};
export const IndicatorSeparator: ComponentType<IndicatorSeparatorProps<OptionItem, boolean, GroupBase<OptionItem>>> = (
    props: any,
) => {
    const IndicatorSeparator = components.IndicatorSeparator;
    return <IndicatorSeparator {...props} className={`m-0 hidden`}></IndicatorSeparator>;
};
export const ClearIndicator: ComponentType<ClearIndicatorProps<OptionItem, boolean, GroupBase<OptionItem>>> = (
    props: any,
) => {
    const ClearIndicator = components.ClearIndicator;
    return (
        <ClearIndicator {...props} className={`!p-0`}>
            <span className='cursor-pointer'>
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
            </span>
        </ClearIndicator>
    );
};
export const Option: ComponentType<OptionProps<OptionItem, boolean, GroupBase<OptionItem>>> = (props: any) => {
    const Option = components.Option;
    const className = clsx(
        'bg-white !text-[14px] !p-[5px]',
        props.isSelected && '!bg-primary-light',
        props.isDisabled && '!text-grey-500',
        'hover:bg-primary-lighter',
    );
    return <Option {...props} className={className}></Option>;
};

export const classGenerator = (props: SelectProps, isFocused?: boolean): string => {
    const { size = 'md' } = props;
    const wrapSize = {
        sm: '!h-[28px]',
        md: '!h-[32px]',
        lg: '!h-[40px]',
    };
    let classes = clsx('p-0 min-w-[200px] bg-white', wrapSize[size]);
    return classes;
};
export const classControlGenerator = (props: SelectProps, isFocused: boolean): string => {
    const { size = 'md' } = props;
    const wrapSize = {
        sm: '!h-[28px]',
        md: '!h-[32px]',
        lg: '!h-[40px]',
    };
    const classes = clsx(
        'flex items-center w-full border border-1 !rounded-[2px]',
        props.error ? '!border-danger' : isFocused ? '!border-primary' : '!border-grey-400',
        props.isDisabled && 'cursor-not-allowed',
        wrapSize[size],
        // props.error && '!border-danger',
    );
    return classes;
};
export const inputContainerClasses = (props: SelectProps): string => {
    let classes = [props.fullWidth ? 'w-100' : '', props.customClasses?.root || ''];
    return classes.join(' ');
};
export const labelClasses = (props: SelectProps): string => {
    const { size = 'md', isDisabled, required } = props;

    const labelSizes: Record<string, string> = {
        md: 'text-sm leading-[20px]',
        lg: 'text-base leading-[24px]',
    };
    const labelClasses = clsx('font-normal', labelSizes[size], {
        'text-grey-500': isDisabled,
        'after:content-["_*"] after:text-danger': required,
    });

    return labelClasses;
};
