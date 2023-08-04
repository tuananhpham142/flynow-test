'use client';
import { FloatingFocusManager, FloatingPortal, useMergeRefs, useTransitionStyles } from '@floating-ui/react';
import React from 'react';
import { usePopoverContext } from './hooks';

export const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function PopoverContent(
    { style, ...props },
    propRef,
) {
    const { context: floatingContext, ...context } = usePopoverContext();

    const { isMounted, styles } = useTransitionStyles(floatingContext, {
        duration: {
            open: 250,
            close: 150,
        },

    });

    const ref = useMergeRefs([context.refs.setFloating, propRef]);


    if (!floatingContext.open) return null;

    return (
        <FloatingPortal>
            {isMounted && (
                <FloatingFocusManager context={floatingContext} modal={context.modal} initialFocus={-1} returnFocus>
                    <div
                        ref={ref}
                        style={{ ...context.floatingStyles, ...style, ...styles, ...{width:context.refs.reference.current.offsetWidth}}}
                        aria-labelledby={context.labelId}
                        aria-describedby={context.descriptionId}
                        {...context.getFloatingProps(props)}
                    >
                        {props.children}
                    </div>
                </FloatingFocusManager>
            )}
        </FloatingPortal>
    );
});
