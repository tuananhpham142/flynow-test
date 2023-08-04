import React, { MouseEventHandler, ReactElement, ReactNode } from 'react';
import { CustomClasses } from '../theme/theme.types';
import { Root } from 'react-dom/client';

export interface NotifyProps extends CustomClasses<'header' | 'body'> {
    className?: string;
    message: ReactNode | ReactElement;
    title?: ReactNode | ReactElement;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    type?: 'primary' | 'danger' | 'success' | 'warning';
    duration?: number;
    hiddenClose?: boolean;
    hiddenHeader?: boolean;
    onClose?: (e?: React.MouseEvent<HTMLButtonElement>) => MouseEventHandler<any> | void | undefined;
    rootProps?: Root;
}
