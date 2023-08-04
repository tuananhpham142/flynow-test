import { RadioGroupProps } from '../RadioGroup/RadioGroup.type';
import { RHFBaseProps } from '../theme/types.types';

export interface RHFRadioGroupProps extends RHFBaseProps {
    radioGroupProps: Omit<RadioGroupProps, 'children' | 'name' | 'value'>;
    children: React.ReactElement[] | React.ReactElement;
}
