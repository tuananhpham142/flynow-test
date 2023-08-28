import { CustomClasses } from '../theme/theme.types';
import { ReactNode } from 'react';

export interface SkeletonProps extends CustomClasses<'root'> {
    variant: 'circular' | 'rectangular' | 'rounded';
    width: number | string;
    height: number | string;
    children?: ReactNode;
}
