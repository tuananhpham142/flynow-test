import { MouseEventHandler, ReactNode } from 'react';
import { BorderRadius, CustomClasses } from '../theme/theme.types';

export interface ButtonProps
    extends CustomClasses<'root' | 'label'>,
        Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    children: string | ReactNode;
    variant?: 'outline' | 'contained' | 'text';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClick?: (
        e?: React.MouseEvent<HTMLButtonElement>,
    ) => MouseEventHandler<any> | void | undefined | Promise<unknown | null>;
    startIcon?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    isLoading?: boolean;
    style?: React.CSSProperties;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    rounded?: BorderRadius;
}
