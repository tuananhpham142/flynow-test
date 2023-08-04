// Generated with util/create-component.js
import React from 'react';
import { NumericFormat } from 'react-number-format';
import Input from './Input';
import { NumericInputProps } from './Input.types';

const NumberInput: React.FC<NumericInputProps> = (props: NumericInputProps) => {
    const {
        // inputProps,
        thousandSeparator,
        decimalSeparator,
        allowedDecimalSeparators,
        thousandsGroupStyle,
        decimalScale,
        fixedDecimalScale,
        allowNegative,
        allowLeadingZeros,
        suffix,
        prefix,
        type,
        displayType,
        inputMode,
        renderText,
        getInputRef,
        value,
        defaultValue,
        valueIsNumericString,
        onValueChange,
        isAllowed,
        onKeyDown,
        onMouseUp,
        onChange,
        onFocus,
        onBlur,
        label,
        helperText,
        required,
        error,
        fullWidth,
        size,
        startAdornment,
        endAdornment,
        color,
        onClear,
        placeholder,
    } = props;

    return (
        <React.Fragment>
            <NumericFormat
                customInput={Input}
                thousandSeparator={thousandSeparator}
                decimalSeparator={decimalSeparator}
                allowedDecimalSeparators={allowedDecimalSeparators}
                thousandsGroupStyle={thousandsGroupStyle}
                decimalScale={decimalScale}
                fixedDecimalScale={fixedDecimalScale}
                allowNegative={allowNegative}
                allowLeadingZeros={allowLeadingZeros}
                suffix={suffix}
                prefix={prefix}
                type={type}
                displayType={displayType}
                inputMode={inputMode}
                renderText={renderText}
                getInputRef={getInputRef}
                value={value}
                defaultValue={defaultValue}
                valueIsNumericString={valueIsNumericString}
                onValueChange={onValueChange}
                isAllowed={isAllowed}
                onKeyDown={onKeyDown}
                onMouseUp={onMouseUp}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onClear={onClear}
                fullWidth={fullWidth}
                label={label}
                helperText={helperText}
                required={required}
                error={error}
                size={size}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                color={color}
                placeholder={placeholder}
            />
        </React.Fragment>
    );
};

NumberInput.displayName = 'SCNumberInput';

export default NumberInput;
