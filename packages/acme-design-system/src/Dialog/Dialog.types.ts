// Generated with util/create-component.js
import React, { LegacyRef, MouseEventHandler, ReactNode } from 'react';
import { CustomClasses } from '../theme/theme.types';

export interface DialogProps<T> extends CustomClasses<'root' | 'header' | 'body' | 'footer' | 'content'> {
    header?: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    visible: boolean;
    fullScreen?: boolean;
    disableEscapeKeyDown?: boolean;
    disableCloseOnBackdrop?: boolean;
    title?: string;
    size?: 'sm' | 'lg' | 'xl' | 'xxl';
    scroll?: 'paper' | 'body';
    onClose: (e?: React.MouseEvent<HTMLButtonElement>) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
    onBackdropClick?: (
        e?: React.MouseEvent<HTMLButtonElement>,
    ) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
    ref?: LegacyRef<HTMLDivElement>;
}
