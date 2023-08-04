import { MouseEventHandler, ReactElement, ReactNode } from 'react';
import { BorderRadius, CustomClasses } from '../theme/theme.types';

export interface ChipProps extends CustomClasses<'root'> {
    children?: ReactNode | ReactElement;
    size?: 'md' | 'lg' | 'sm';
    variant?: 'outline' | 'contained';
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    checked?: boolean;
    rounded?: BorderRadius;
    prefix?: ReactNode | ReactElement;
    suffix?: ReactNode | ReactElement;
    onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}
