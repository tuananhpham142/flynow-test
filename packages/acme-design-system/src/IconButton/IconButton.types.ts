import type { MouseEventHandler, ReactNode } from 'react';
import { CustomClasses } from '../theme/theme.types';

export interface IconButtonProps
    extends CustomClasses<'root'>,
        Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
    disabled?: boolean;
    variant?: 'outline' | 'contained' | 'text';
    isLoading?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'muted';
}
