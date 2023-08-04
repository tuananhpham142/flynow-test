import { Placement } from '@floating-ui/react';

export type PopoverProps = {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};
