// Generated with util/create-component.js
import React, { useCallback, useEffect } from 'react';
import { DialogProps } from './Dialog.types';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { useMountTransition } from '../hooks/useMountTransition';
import clsx from 'clsx';

const Dialog: React.FC<DialogProps<any>> = (props: DialogProps<any>) => {
    const {
        visible,
        scroll,
        disableEscapeKeyDown,
        disableCloseOnBackdrop,
        customClasses,
        size,
        fullScreen,
        title,
        header,
        body,
        footer,
        onClose,
        onBackdropClick,
        ref,
    } = props;
    const mountTransition = useMountTransition(visible, 200);

    const rootClasses = clsx('relative z-[120] animate-fadeOutUp', visible && '!block');

    const dialogClasses = clsx(
        'relative bg-white overflow-hidden rounded-lg text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg animate-fadeInDown',
        !visible && 'animate-fadeOutUp',
    );

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const isBackdrop = event.target === event.currentTarget;
        if (!disableCloseOnBackdrop && isBackdrop && onBackdropClick) onBackdropClick();
        else !disableCloseOnBackdrop && isBackdrop && onClose && onClose();
    };

    const onEscPress = useCallback((event: KeyboardEvent) => {
        if (!disableEscapeKeyDown && event.key === 'Escape') onClose && onClose();
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', (e) => onEscPress(e), false);
        return () => {
            document.removeEventListener('keydown', (e) => onEscPress(e), false);
        };
    }, []);

    return (
        <div ref={ref} className={rootClasses} role='dialog' aria-modal='true'>
            {mountTransition && (
                <>
                    <div className='fixed inset-0 bg-grey-700 bg-opacity-75' />
                    <div className='fixed inset-0 z-[110] overflow-y-auto'>
                        <div
                            className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'
                            onClick={(e) => handleBackdropClick(e)}
                        >
                            <div className={dialogClasses}>
                                {title && !header && (
                                    <div className='flex items-center justify-between px-4 py-3 sm:px-4'>
                                        <Typography htmlTag={'h4'} variant={'subtitle16'} className={''}>
                                            {title}
                                        </Typography>
                                        <IconButton variant='text' size={'sm'} color={'danger'} onClick={onClose}>
                                            <svg className='w-5 h-5' viewBox='0 0 20 20'>
                                                <path
                                                    fill='black'
                                                    d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'
                                                />
                                            </svg>
                                        </IconButton>
                                    </div>
                                )}
                                {header && <div className={`${customClasses?.header || 'px-4 py-3'}`}>{header}</div>}
                                {body && (
                                    <div className={`bg-white px-4 pb-4 pt-5 sm:p-4 sm:pb-4 ${customClasses?.body}`}>
                                        {body}
                                    </div>
                                )}
                                {footer && (
                                    <div className={`px-4 py-3 flex justify-end sm:px-4 ${customClasses?.footer}`}>
                                        {footer}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

Dialog.defaultProps = {};

export default Dialog;
