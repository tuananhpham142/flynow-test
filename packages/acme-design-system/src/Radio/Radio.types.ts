import { FormControlBaseProps } from '../theme/types.types';

export interface RadioProps extends FormControlBaseProps {
    checked?: boolean;
    defaultChecked?: boolean;
    labelPlacement?: 'top' | 'bottom' | 'left' | 'right';
    otherProps?: Record<string, any>;
}
