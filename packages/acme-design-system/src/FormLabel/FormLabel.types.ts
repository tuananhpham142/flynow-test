import { MainColor } from '../theme/theme.types';

export type FormLabelProps = {
    label: string;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    required?: boolean;
    color?: MainColor;
};
