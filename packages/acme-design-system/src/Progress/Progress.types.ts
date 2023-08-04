import { CustomClasses } from '../theme/theme.types';

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type percentageType = IntRange<0, 101>;

export interface ProgressProps extends CustomClasses<'root' | 'label'> {
    size?: 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    percentage: percentageType;
}
