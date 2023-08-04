import { CustomClasses } from '../theme/theme.types';

export interface SkeletonProps extends CustomClasses<'root'> {
    variant: 'circular' | 'rectangular' | 'rounded';
    width: number | string;
    height: number | string;
}
