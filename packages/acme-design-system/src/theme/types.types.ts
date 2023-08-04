import { RegisterOptions } from 'react-hook-form';
import { MainColor } from './theme.types';

/**
 * Xoá thuộc tính `K` khỏi `T`.
 * và lấy tất cả các thuộc tính còn lại của `T`.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Types `StandardProps` dùng chung cho tất cả component.
 *
 * type `Removals` (những thuộc tính muốn loại bỏ từ `C`) có kiểu Uninon ( 'onChange' | 'value' | 'checked).
 */
export type StandardProps<C, Removals extends keyof C = never> = DistributiveOmit<C, Removals> & {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    // ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
    // style?: React.CSSProperties;
};

/**
 * `Type` dùng chung cho `Form Component`.
 */
export interface FormControlBaseProps<E = HTMLInputElement, ValueType = React.InputHTMLAttributes<E>['value']> {
    id?: string;
    name?: string;
    value?: ValueType;
    defaultValue?: ValueType;
    error?: boolean;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: MainColor;
    variant?: string;
    fullWidth?: boolean;

    onChange?: React.ChangeEventHandler<E>;
}

export interface RHFBaseProps {
    name: string;
    rules: RegisterOptions;
}
