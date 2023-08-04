import { GroupBase, Props } from 'react-select';
import { CustomClasses, MainColor } from '../theme/theme.types';
import { FormControlBaseProps } from '../theme/types.types';

export type OptionItem<T = any, E = any> = {
    label: string;
    value: T;
    disabled?: boolean;
} & E;

export type SelectBaseProps = Props<OptionItem, boolean, GroupBase<OptionItem>>;

export interface SelectProps
    extends Omit<FormControlBaseProps<HTMLSelectElement>, 'defaultValue' | 'value' | 'onChange'>,
        SelectBaseProps,
        CustomClasses<'label' | 'helper' | 'root'> {
    noSeparator?: boolean;
    isDisabled?: boolean;
}
