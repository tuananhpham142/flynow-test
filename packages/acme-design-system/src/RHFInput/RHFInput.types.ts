import { InputProps, NumericInputProps } from '../Input/Input.types';
import { RHFBaseProps } from '../theme/types.types';

export interface RHFInputProps extends RHFBaseProps {
    inputProps: InputProps;
}

export interface RHFInputNumberInterface extends RHFBaseProps {
    numberInputProps: NumericInputProps;
}

// export interface RHFMaskInputInterface extends CustomClasses<'helper'> {
//     control: any;
//     rules: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
//     ref?: React.Ref<any>;
//     name: string;
//     errors?: Record<string, any>;
//     maskInputProps: MaskInputProps;
// }
