import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import { CustomClasses } from '../theme/theme.types';

export interface TagProps extends CustomClasses<'root'> {
    children?: ReactNode | ReactElement;
    size?: 'md' | 'lg';
    variant?: 'solid' | 'outline';
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'muted';
    closable?: boolean;
    checked?: boolean;
    prefix?: ReactNode | ReactElement;
    suffix?: ReactNode | ReactElement;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
    onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
}
