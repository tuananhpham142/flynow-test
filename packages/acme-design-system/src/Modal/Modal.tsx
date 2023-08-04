import React from 'react';
import {
    FloatingOverlay,
    FloatingFocusManager,
    FloatingPortal,
    useFloating,
    useInteractions,
    useClick,
    useRole,
    useDismiss,
    useTransitionStyles,
} from '@floating-ui/react';
import { ModalProps } from './Modal.type';

const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, body, setIsOpen, lockScroll = false, outSideClick = false } = props;

    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const { isMounted, styles: modalStyles } = useTransitionStyles(context, {
        duration: {
            open: 700,
            close: 100,
        },
        initial: {
            transform: 'translate(-50%,-70%)',
            opacity: 0.7,
        },
        open: {
            opacity: 1,
            transform: 'translate(-50%,-50%)',
        },
        close: {
            transform: 'scale(0) translate(-50%, -50%)',
        },
    });

    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, {
        outsidePressEvent: 'mousedown',
        outsidePress: outSideClick,
        ancestorScroll: false,
    });

    const { getFloatingProps } = useInteractions([click, role, dismiss]);

    return (
        <>
            {isMounted && (
                <FloatingPortal>
                    <FloatingOverlay lockScroll={lockScroll} className='bg-[#00000080] z-[100]'>
                        {isMounted && (
                            <FloatingFocusManager context={context} modal={true}>
                                <div
                                    style={modalStyles}
                                    className='fixed inset-1/2 w-fit h-fit'
                                    ref={refs.setFloating}
                                    {...getFloatingProps()}
                                >
                                    {body}
                                </div>
                            </FloatingFocusManager>
                        )}
                    </FloatingOverlay>
                </FloatingPortal>
            )}
        </>
    );
};

export default Modal;
