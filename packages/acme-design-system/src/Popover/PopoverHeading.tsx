'use client';
import React, { useId } from 'react';
import { usePopoverContext } from './hooks';

export const PopoverHeading = React.forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>(
    function PopoverHeading(props, ref) {
        const { setLabelId } = usePopoverContext();
        const id = useId();

        // Only sets `aria-labelledby` on the Popover root element
        // if this component is mounted inside it.
        React.useLayoutEffect(() => {
            setLabelId(id);
            return () => setLabelId(undefined);
        }, [id, setLabelId]);

        return (
            <h2 {...props} ref={ref} id={id}>
                {props.children}
            </h2>
        );
    },
);
