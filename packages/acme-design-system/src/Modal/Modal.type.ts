export interface ModalProps {
    isOpen: boolean;
    body: React.ReactElement;
    setIsOpen: (state: boolean) => void;
    lockScroll?: boolean;
    outSideClick?: boolean;
}
