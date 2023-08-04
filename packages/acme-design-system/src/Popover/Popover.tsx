'use client';
import * as React from 'react';
import { PopoverProps } from './Popover.type';
import { usePopover } from './hooks';

type ContextType =
    | (ReturnType<typeof usePopover> & {
          setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
          setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
      })
    | null;

export const PopoverContext = React.createContext<ContextType>(null);

export default function Popover({
    children,
    modal = false,
    ...restOptions
}: {
    children: React.ReactNode;
} & PopoverProps) {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const popover = usePopover({ modal, ...restOptions });
    return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
}
