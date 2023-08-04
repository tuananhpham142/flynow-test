// Generated with util/create-component.js
import { ReactNode } from 'react';
import { BorderRadius, CustomClasses, Shadow } from '../theme/theme.types';

export interface CardProps
    extends CustomClasses<'root' | 'header' | 'body' | 'footer' | 'toolbar' | 'headerContainer'> {
    shadow?: Shadow;
    header?: ReactNode;
    toolbar?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    noPadding?: boolean;
    border?: boolean;
    variant?: 'border';
    rounded?: BorderRadius;
}
