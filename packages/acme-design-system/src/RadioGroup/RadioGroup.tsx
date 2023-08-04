import React from 'react';
import { RadioContextProps, RadioGroupProps } from './RadioGroup.type';
import FormLabel from '../FormLabel/FormLabel';
import HelperText from '../HelperText/HelperText';

export const RadioContext = React.createContext<RadioContextProps>({});

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { name, onChange, required, children, value, label, helperText, error, inline } = props;

    const contextValue = React.useMemo(
        () => ({
            name,
            value: value,
            onChange: onChange,
        }),
        [onChange, name, value],
    );
    return (
        <RadioContext.Provider value={contextValue}>
            <div role='radiogroup'>
                {label && <FormLabel label={label} required={required} />}
                <div role='radiogroup' className={`flex gap-1 ${inline ? 'flex-row' : 'flex-col'}`}>
                    {children}
                </div>
                {helperText && <HelperText message={helperText} error={error} />}
            </div>
        </RadioContext.Provider>
    );
};

export default RadioGroup;
