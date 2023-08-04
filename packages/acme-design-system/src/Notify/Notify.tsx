'use client';
import React, { SyntheticEvent, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { NotifyProps } from './Notify.types';
import clsx from 'clsx';

const TOAST_CONTAINER_ID = 'notify';

const _Notify = (props: NotifyProps, documentId: string = TOAST_CONTAINER_ID) => {
    let container = document.getElementById(documentId) as HTMLElement;

    if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', documentId);
        document.body.appendChild(container);
    } else {
        _RemoveNotify();
    }

    const root = createRoot(container);

    root.render(<Notify {...props}>{props.message}</Notify>);
};

export const _RemoveNotify = (documentId: string = TOAST_CONTAINER_ID) => {
    const root = createRoot(document.getElementById(documentId) as Element);
    root.unmount();
};

const Notify: React.FC<NotifyProps> = (props) => {
    const {
        duration = 3500,
        message,
        title,
        position = 'top-right',
        type = 'primary',
        hiddenHeader,
        hiddenClose = false,
        className,
        customClasses,
    } = props;
    const toastRef = useRef<HTMLOutputElement>(null);
    let timer: number = -1;

    const onReset = () => {
        window.clearTimeout(timer);
    };

    const onStart = () => {
        if (duration) timer = window.setTimeout(_RemoveNotify, duration);
    };

    const onClose = (event: SyntheticEvent | null) => {
        if (event) event.preventDefault();

        _RemoveNotify();
    };

    const classRootGenerator = (): string => {
        const positions: Record<string, string> = {
            'top-right': 'top-5 right-5',
            'top-left': 'top-5 left-5',
            'bottom-left': 'bottom-5 left-5',
            'bottom-right': 'bottom-5 right-5',
        };
        const types: Record<string, string> = {
            primary: 'border-primary bg-primary-lighter',
            danger: 'border-danger bg-danger-lighter',
            success: 'border-success bg-success-lighter',
            warning: 'border-warning bg-warning-lighter',
        };

        return clsx(
            'fixed border flex items-center w-[300px] rounded px-[12px] py-[4px] shadow',
            positions[position],
            'text-grey-500',
            className,
            types[type],
        );
    };

    const classNotifyGenerator = (): string => {
        return clsx('text-grey-800');
    };

    useEffect(() => {
        onStart();
        toastRef.current?.focus();

        return () => {
            onReset();
            onClose(null);
        };
    }, []);

    return (
        <div role='alert' className={classRootGenerator()} style={{ zIndex: 999999 }}>
            <output
                aria-labelledby='toast-label'
                onMouseLeave={onStart}
                onMouseEnter={onReset}
                className={classNotifyGenerator()}
                ref={toastRef}
            >
                {!hiddenHeader && (
                    <div className={'flex items-center justify-between'}>
                        <strong className='text-sm font-bold'>{title}</strong>
                        {!hiddenClose && (
                            <div className='cursor-pointer text-base' onClick={onClose}>
                                <i className='icon icon-close' />
                            </div>
                        )}
                    </div>
                )}
                <div className={`pr-[12px] text-sm ${customClasses?.body}`}>{message}</div>
            </output>
        </div>
    );
};

Notify.displayName = 'Notify';

export default _Notify;
