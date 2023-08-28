import { Placement } from '@floating-ui/react';
import { CustomClasses } from '../theme/theme.types';

export interface TooltipProps extends CustomClasses<'tooltip' | 'arrow'> {
    children: React.ReactNode;
    showArrow?: boolean;
    placement?: Placement;
    title: React.ReactNode | string;
    effect?: 'dark' | 'light';
    triggerOnClick?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
