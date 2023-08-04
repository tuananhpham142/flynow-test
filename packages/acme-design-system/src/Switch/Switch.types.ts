import { CustomClasses } from '../theme/theme.types';
import { FormControlBaseProps } from '../theme/types.types';

export interface SwitchProps extends FormControlBaseProps, CustomClasses<'root' | 'label' | 'helper'> {
    checked?: boolean;
    defaultChecked?: boolean;
    otherProps?: Record<string, any>;
    labelPlacement?: 'top' | 'bottom' | 'left' | 'right';
}
