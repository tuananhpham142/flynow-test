import { InputHTMLAttributes } from 'react';
import { CustomClasses, MainColor } from './../theme/theme.types';
import { FormControlBaseProps, StandardProps } from './../theme/types.types';
import {
    InputAttributes,
    NumberFormatBase,
    NumberFormatValues,
    NumericFormatProps,
    OnValueChange,
} from './NumericInput.type';

// INPUT BASE COMPONENT PROPS //
export interface InputBaseComponentProps extends React.HTMLAttributes<HTMLInputElement> {
    // Accommodate arbitrary additional props coming from the `inputProps` prop
    [arbitrary: string]: any;
}

// INPUT BASE PROPS //
export interface InputBaseProps
    extends StandardProps<
        React.HTMLAttributes<HTMLDivElement>,
        'children' | 'onChange' | 'onKeyUp' | 'onKeyDown' | 'onBlur' | 'onFocus' | 'defaultValue'
    > {
    id?: string;
    name?: string;
    ref?: React.Ref<any>;
    disabled?: boolean;
    color?: MainColor;
    defaultValue?: InputHTMLAttributes<HTMLInputElement>['value'];
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    error?: boolean;
    fullWidth?: boolean;
    inputProps?: InputBaseComponentProps;
    multiline?: boolean;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    value?: InputHTMLAttributes<HTMLInputElement>['value'];
}

// INPUT PROPS //
export interface InputProps
    extends InputBaseProps,
        FormControlBaseProps<HTMLInputElement>,
        CustomClasses<'inputContainer' | 'input' | 'label' | 'helperText' | 'clearIcon'> {
    variant?: string;
    label?: string;
    helperText?: string;
    onClear?: () => void;
}

// INPUT NUMERIC PROPS //

export interface NumericInputProps
    extends NumericFormatProps<InputAttributes>,
        Pick<
            InputProps,
            | 'label'
            | 'helperText'
            | 'required'
            | 'fullWidth'
            | 'startAdornment'
            | 'endAdornment'
            | 'error'
            | 'size'
            | 'color'
            | 'onClear'
        > {
    thousandSeparator?: boolean | string;
    decimalSeparator?: string;
    allowedDecimalSeparators?: Array<string>;
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
    decimalScale?: number;
    fixedDecimalScale?: boolean;
    allowNegative?: boolean;
    allowLeadingZeros?: boolean;
    suffix?: string;
    prefix?: string;
    type?: 'text' | 'tel' | 'password';
    displayType?: 'input' | 'text';
    inputMode?: InputAttributes['inputMode'];
    renderText?: (formattedValue: string, otherProps: Partial<NumberFormatBase>) => React.ReactNode;
    getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
    valueIsNumericString?: boolean;
    onValueChange?: OnValueChange;
    isAllowed?: (values: NumberFormatValues) => boolean;
    onKeyDown?: InputAttributes['onKeyDown'];
    onMouseUp?: InputAttributes['onMouseUp'];
    onChange?: InputAttributes['onChange'];
    onFocus?: InputAttributes['onFocus'];
    onBlur?: InputAttributes['onBlur'];
}

// STEPPER PROPS
export interface StepperInputProps extends Omit<FormControlBaseProps, 'onChange'> {
    step?: number;
    max?: number;
    min?: number;
    // base props
    value?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
}

// INPUT MASK PROPS
// export type MaskInputProps = {
//     mask: Array<string | RegExp> | false | ((value: string) => Array<string | RegExp> | false);
//     // inputProps: Omit<InputProps, 'type'>;
// } & Omit<InputProps, 'type'>;
