// Generated with util/create-component.js
import React, { LegacyRef, MouseEventHandler, ReactNode } from 'react';
import { CustomClasses } from '../theme/theme.types';

export interface ConfirmDialogProps
    extends CustomClasses<
        | 'container'
        | 'title'
        | 'content'
        | 'closeButton'
        | 'icon'
        | 'actions'
        | 'confirmButton'
        | 'cancelButton'
        | 'footer'
    > {
    title: ReactNode;
    variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    content: ReactNode;
    noIcon?: boolean;
    isLoading?: boolean;
    onConfirm: (
        e?: React.MouseEvent<HTMLButtonElement>,
    ) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
    onCancel: (e?: React.MouseEvent<HTMLButtonElement>) => MouseEventHandler<any> | void | undefined | Promise<unknown>;
    size?: 'sm' | 'lg' | 'xl';
    allowEnterKey?: boolean;
    allowEscKey?: boolean;
    didClose?: Function;
    didOpen?: Function;
    didDestroy?: Function;
    duration: 0 | number;
    labelConfirm: string;
    labelCancel: string;
}
