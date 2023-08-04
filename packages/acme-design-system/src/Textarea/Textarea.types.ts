import { InputHTMLAttributes } from 'react';
import { CustomClasses, MainColor } from '../theme/theme.types';
import { FormControlBaseProps, StandardProps } from '../theme/types.types';

export interface TextAreaBaseComponentProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    // Accommodate arbitrary additional props coming from the `inputProps` prop
    [arbitrary: string]: any;
}
export interface TextAreaBaseProps
    extends StandardProps<
        React.HTMLAttributes<HTMLDivElement>,
        'children' | 'onChange' | 'onKeyUp' | 'onKeyDown' | 'onBlur' | 'onFocus' | 'defaultValue'
    > {
    textAreaRef?: React.Ref<any>;
    name?: string;
    color?: MainColor;
    value?: InputHTMLAttributes<HTMLTextAreaElement>['value'];
    defaultValue?: InputHTMLAttributes<HTMLTextAreaElement>['value'];
    disabled?: boolean;
    fullWidth?: boolean;
    error?: boolean;
    multiline?: boolean;
    placeholder?: string;
    textAreaProps?: TextAreaBaseComponentProps;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    readOnly?: boolean;
    required?: boolean;
    rows?: string | number;
    maxRows?: string | number;
    minRows?: string | number;
}

export interface TextareaProps
    extends TextAreaBaseProps,
    FormControlBaseProps<HTMLTextAreaElement>,
    CustomClasses<'root' | 'label' | 'helperText'> {
    variant?: string;
    label?: string;
    helperText?: string;
    onClear?: () => void;
    inputRef?: React.Ref<any>;
}
