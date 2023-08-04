import { CustomClasses, PositionLocation } from '../theme/theme.types';
import { ReactNode } from 'react';

export interface DrawerProps extends CustomClasses<'root'> {
    isOpen: boolean;
    body: ReactNode;
    lockScroll?: boolean;
    outSideClick?: boolean;
    onClose?: (state: boolean) => void;
    position?: PositionLocation;
    openDuration?: number;
    closeDuration?: number;
}
