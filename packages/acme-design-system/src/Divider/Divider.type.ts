import { HTMLAttributes } from 'react';
import { StandardProps } from '../theme/types.types';
import { PaletteColors } from '../theme/theme.types';

export interface DividerProps extends StandardProps<HTMLAttributes<HTMLDivElement>> {
    vertical?: boolean;
    color?: PaletteColors;
}
