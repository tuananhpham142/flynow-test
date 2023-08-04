// Generated with util/create-component.js
import type { ReactElement, ReactNode, SyntheticEvent } from 'react';
import { CustomClasses, MainColor } from '../theme/theme.types';

export interface TabsProps extends CustomClasses<'root' | 'tabLine' | 'tab' | 'active' | 'hover'> {
    children: ReactElement[] | ReactElement;
    onChange: (value: any, event: SyntheticEvent) => void;
    value: any;
    // scrollable?: boolean;
    // vertical?: boolean;
    color?: MainColor;
    lineSize?: 0 | 1 | 2 | 3 | 4;
}

export interface TabPanePropsForTabs {
    icon?: ReactNode;
    href?: string;
    iconPosition?: 'end' | 'start';
    disabled?: boolean;
    label?: string | ReactNode;
}
