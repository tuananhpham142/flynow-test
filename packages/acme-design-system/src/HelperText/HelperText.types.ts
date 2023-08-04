import { MainColor } from '../theme/theme.types';

export type HelperTextProps = {
    message: string;
    error?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: MainColor;
};
