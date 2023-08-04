import { CustomClasses } from '../theme/theme.types';
import { ReactElement, ReactNode } from 'react';

export interface AvatarProps extends CustomClasses<'root' | 'badge'> {
    children?: ReactNode | ReactElement;
    variant?: 'square' | 'rounded' | 'circle';
    size?: '24' | '32' | '40' | '48' | '56' | '72' | '100' | '120';
    badgeContent?: ReactNode | ReactElement;
    showBadge?: boolean;
    src?: string;
    alt?: string;
}
