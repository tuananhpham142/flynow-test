import { CustomClasses } from '../theme/theme.types';
import { FormControlBaseProps } from '../theme/types.types';

export interface RadioGroupProps
    extends Omit<FormControlBaseProps, 'value'>,
        CustomClasses<'root' | 'label' | 'helperText'> {
    inline?: boolean;
    name: string;
    value?: string | number | null;
    children: React.ReactElement[] | React.ReactElement;
    // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioContextProps {
    inline?: boolean;
    name?: string;
    value?: string | number | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
