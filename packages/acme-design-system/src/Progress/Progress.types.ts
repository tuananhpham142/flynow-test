import { CustomClasses } from '../theme/theme.types';

type CreateArrayWithLengthX<LENGTH extends number, ACC extends unknown[] = []> = ACC['length'] extends LENGTH
    ? ACC
    : CreateArrayWithLengthX<LENGTH, [...ACC, 1]>;

type NumericRange<
    START_ARR extends number[],
    END extends number,
    ACC extends number = never,
> = START_ARR['length'] extends END ? ACC | END : NumericRange<[...START_ARR, 1], END, ACC | START_ARR['length']>;

export interface ProgressProps extends CustomClasses<'root' | 'label'> {
    size?: 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    percentage:
        | NumericRange<CreateArrayWithLengthX<0>, 45>
        | NumericRange<CreateArrayWithLengthX<44>, 89>
        | 88
        | 89
        | 90
        | 91
        | 92
        | 93
        | 94
        | 95
        | 96
        | 97
        | 98
        | 99
        | 100;
}
