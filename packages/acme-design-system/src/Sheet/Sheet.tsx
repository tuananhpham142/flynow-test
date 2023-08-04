import React, { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';
import { WithInjectedProps } from '../types/common.types';

export type SnapPointType = ({ sheetModalHeight }: { sheetModalHeight: number }) => number[];

export type SheetRef = {
    snapTo?: (snapPoint: number) => void;
    sheet?: HTMLDivElement;
};

export interface SheetProps {
    className?: string;
    style?: React.CSSProperties;
    mask?: boolean;
    afterClose?: () => any;
    onClose?: (e: React.SyntheticEvent) => any;
    maskClosable?: boolean;
    visible?: boolean;
    title?: string;
    modalStyle?: React.CSSProperties;
    maskStyle?: React.CSSProperties;
    modalClassName?: string;
    maskClassName?: string;
    width?: string | number;
    height?: string | number;
    children?: React.ReactNode;
    zIndex?: number;
    handler?: boolean;
    autoHeight?: boolean;
    contentRef?: React.MutableRefObject<HTMLDivElement>;
    swipeToClose?: boolean;
    /**
     * Khai báo các snap points, là vị trí của sheet modal (bottom), open là 0, close là 1 (100%)
     */
    snapPoints?: SnapPointType | number[];
    defaultSnapPoint?: number;
    onSnap?: (snapPoint: number) => void;
    ref?: SheetRef;
    unmountOnClose?: boolean;
}

export interface SheetContentProps extends SheetProps {
    title?: string;
    children?: React.ReactNode;
    ariaId?: string;
    onVisibleChanged?: (visible: boolean) => void;
    onMouseDown?: React.MouseEventHandler;
    onMouseUp?: React.MouseEventHandler;
    modalRef?: React.MutableRefObject<HTMLDivElement>;
}

export interface ActionButton extends React.HTMLProps<HTMLButtonElement> {}

export interface ActionSheetProps<E = ActionButton>
    extends Omit<SheetProps, 'handler' | 'ref' | 'snapPoints' | 'defaultSnap' | 'onSnap'> {
    divider?: boolean;
    actions?:
        | {
              Element: ComponentType<WithInjectedProps<E>>;
              props: Omit<E, 'onClick'>;
          }[]
        | Array<
              {
                  Element: ComponentType<WithInjectedProps<E>>;
                  props: Omit<E, 'onClick'>;
              }[]
          >;
    groupDivider?: boolean;
}

export interface CompoundedComponent extends ForwardRefExoticComponent<SheetProps & RefAttributes<HTMLDivElement>> {
    Actions: ForwardRefExoticComponent<ActionSheetProps & RefAttributes<HTMLDivElement>>;
}

declare const Sheet: CompoundedComponent;

export default Sheet;
