import { CustomClasses } from '../theme/theme.types';
import { FormControlBaseProps } from '../theme/types.types';

export interface CheckboxProps extends FormControlBaseProps, CustomClasses<'root' | 'label' | 'helper'> {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    circle?: boolean;
    labelPlacement?: 'top' | 'bottom' | 'left' | 'right';
    otherProps?: Record<string, any>;
}
