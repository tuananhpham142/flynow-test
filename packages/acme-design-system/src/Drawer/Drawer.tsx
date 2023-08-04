import type { FC } from 'react';
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
import clsx from 'clsx';
import { DrawerProps } from './Drawer.types';
import React from 'react';

const Drawer: FC<DrawerProps> = (props) => {
    const {
        isOpen,
        body,
        onClose,
        lockScroll = false,
        outSideClick = false,
        position = 'bottom',
        openDuration = 500,
        closeDuration = 100,
    } = props;

    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: onClose,
    });

    const transformPositions = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        top: 'translateY(-100%)',
        bottom: 'translateY(100%)',
    };

    const { isMounted, styles: drawerStyle } = useTransitionStyles(context, {
        duration: {
            open: openDuration,
            close: closeDuration,
        },
        initial: {
            transform: transformPositions[position],
            opacity: 0.5,
        },
        open: {
            opacity: 1,
            transform: 'translate(0%,0%)',
        },
        close: {
            // transform: transformPositions[position],
            // opacity: 0.5,
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

    const getDrawerStyle = () => {
        const positions = {
            left: 'left-0 top-0 bottom-0',
            right: 'right-0 top-0 bottom-0',
            top: 'top-0 left-0 right-0',
            bottom: 'bottom-0 left-0 right-0',
        };

        return clsx(positions[position], 'fixed');
    };

    return (
        <>
            {isMounted && (
                <FloatingPortal>
                    <FloatingOverlay lockScroll={lockScroll} className='bg-[#00000080] z-[100]'>
                        {isMounted && (
                            <FloatingFocusManager context={context} modal={true}>
                                <div
                                    style={drawerStyle}
                                    className={getDrawerStyle()}
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

export default Drawer;
