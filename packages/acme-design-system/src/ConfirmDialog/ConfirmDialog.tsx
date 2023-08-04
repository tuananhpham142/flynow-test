import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Button from '../Button';
import Dialog from '../Dialog';
import { ConfirmDialogProps } from './ConfirmDialog.types';

const CONFIRM_DIALOG_CONTAINER_ID = `confirm__dialog` as const;

let container = document.getElementById(CONFIRM_DIALOG_CONTAINER_ID) as Element;

export const _OpenConfirmDialog = (props: ConfirmDialogProps, documentId: string = CONFIRM_DIALOG_CONTAINER_ID) => {
    if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', documentId);
        document.body.appendChild(container);
    } else _CloseConfirmDialog();
    const root = createRoot(container!);
    root.render(<ConfirmDialog {...props} />);
};

const _CloseConfirmDialog = (documentId: string = CONFIRM_DIALOG_CONTAINER_ID) => {
    const root = createRoot(document.getElementById(documentId) as Element);

    root.unmount();
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props: ConfirmDialogProps) => {
    const {
        isLoading,
        title,
        content,
        onConfirm,
        onCancel,
        size,
        allowEnterKey,
        allowEscKey,
        didClose,
        didOpen,
        didDestroy,
        labelConfirm,
        labelCancel,
        variant,
        noIcon,
        duration,
        customClasses,
    } = props;
    const dialogRef = useRef<HTMLDivElement>(null);
    let timer: number = -1;

    const onReset = () => {
        window.clearTimeout(timer);
    };

    const onStart = () => {
        if (duration) timer = window.setTimeout(_CloseConfirmDialog, duration);
        if (didOpen) {
            didOpen();
        }
    };

    const onClose = (event: any) => {
        if (event) event.preventDefault();

        _CloseConfirmDialog();
        if (didClose) {
            didClose();
        }
    };

    const getIconByVariant = () => {
        switch (variant) {
            case 'success':
                return 'text-success ti ti-check ';
            case 'danger':
                return 'text-danger ti ti-exclamation-mark';
            case 'warning':
                return 'text-warning ti ti-question-mark';
            case 'primary':
                return 'text-primary ti ti-info-square';
            default:
                return 'text-primary';
        }
    };

    useEffect(() => {
        onStart();
        dialogRef.current?.focus();

        return () => {
            onReset();
            onClose(null);
            if (didDestroy) {
                didDestroy();
            }
        };
    });

    return (
        <>
            {ReactDOM.createPortal(
                <Dialog
                    ref={dialogRef}
                    size={size}
                    visible={true}
                    disableEscapeKeyDown={!allowEscKey}
                    body={
                        <>
                            <div className='sm:flex sm:items-start'>
                                <div className='mx-auto flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0'>
                                    <svg
                                        className={`h-6 w-6 ${getIconByVariant()}`}
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke-width='1.5'
                                        stroke='currentColor'
                                        aria-hidden='true'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                                        />
                                    </svg>
                                </div>
                                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                                    <h3
                                        className={`text-base font-semibold leading-6 text-grey-900 ${customClasses?.title}`}
                                    >
                                        {title}
                                    </h3>
                                    <div className='mt-2'>
                                        <p className={`text-sm text-grey-500 ${customClasses?.content}`}>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    onBackdropClick={(e) => onClose(e)}
                    footer={
                        <div className='bg-grey-50 flex gap-2'>
                            <Button
                                customClasses={{ root: `min-w-100px ${customClasses?.cancelButton}` }}
                                isLoading={isLoading}
                                color={'primary'}
                                variant={'text'}
                                onClick={() => {
                                    onCancel();
                                    onClose(null);
                                }}
                            >
                                {labelCancel}
                            </Button>

                            <Button
                                customClasses={{
                                    root: `min-w-100px ${customClasses?.confirmButton}`,
                                }}
                                isLoading={isLoading}
                                color={variant}
                                onClick={() => {
                                    onConfirm();
                                    onClose(null);
                                }}
                            >
                                {labelConfirm}
                            </Button>
                        </div>
                    }
                    onClose={(e) => onClose(e)}
                />,
                container,
            )}
        </>
    );
};

ConfirmDialog.defaultProps = {
    duration: 3500,
};

export default ConfirmDialog;
