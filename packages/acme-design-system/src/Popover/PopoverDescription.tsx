'use client';
import React, { useId } from 'react';
import { usePopoverContext } from './hooks';

export const PopoverDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(
    function PopoverDescription(props, ref) {
        const { setDescriptionId } = usePopoverContext();
        const id = useId();

        // Only sets `aria-describedby` on the Popover root element
        // if this component is mounted inside it.
        React.useLayoutEffect(() => {
            setDescriptionId(id);
            return () => setDescriptionId(undefined);
        }, [id, setDescriptionId]);

        return <p {...props} ref={ref} id={id} />;
    },
);
