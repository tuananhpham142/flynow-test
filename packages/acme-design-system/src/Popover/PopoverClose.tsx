'use client';
import React from 'react';
import { usePopoverContext } from './hooks';

export const PopoverClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    function PopoverClose(props, ref) {
        const { setOpen } = usePopoverContext();
        return (
            <button
                type='button'
                ref={ref}
                {...props}
                onClick={(event) => {
                    props.onClick?.(event);
                    setOpen(false);
                }}
            />
        );
    },
);
