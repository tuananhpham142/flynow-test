import clsx from 'clsx';
import React from 'react';
import { HelperTextProps } from './HelperText.types';
import { MainColor } from '../theme/theme.types';

const HelperText: React.FC<HelperTextProps> = (props) => {
    const { message, size = 'md', error, color } = props;

    const helperTextColors: Record<MainColor, string> = {
        primary: 'text-primary',
        danger: 'text-danger',
        success: 'text-success',
        secondary: 'text-secondary',
        warning: 'text-warning',
    };

    const helperTextSizes = {
        sm: 'text-[13px] leading-[20px] pl-[8px] h-[20px]',
        md: 'text-[13px] leading-[20px] pl-[8px] h-[20px]',
        lg: 'text-[13px] leading-[20px] pl-[8px] h-[20px]',
    };

    const helperTextClassName = clsx(
        'block',
        helperTextSizes[size],
        color ? helperTextColors[color] : 'text-grey-500',
        error && '!text-danger',
    );

    return <span className={helperTextClassName}>{message}</span>;
};

export default HelperText;
