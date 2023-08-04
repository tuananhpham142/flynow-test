import clsx from 'clsx';
import type { FC } from 'react';
import { SwitchProps } from './Switch.types';

const Switch: FC<SwitchProps> = (props) => {
    const {
        checked,
        defaultChecked,
        color = 'warning',
        onChange,
        size = 'md',
        variant,
        customClasses,
        disabled,
        label,
        labelPlacement,
        value,
        otherProps,
    } = props;

    const containerClasses = clsx(
        'relative inline-flex items-center gap-2 cursor-pointer',
        disabled && '!cursor-not-allowed',
    );

    const switchSlotSize = {
        sm: 'w-[32px] h-[16px]',
        md: 'w-[40px] h-[20px]',
        lg: 'w-[48px] h-[24px]',
    };
    const switchSlotActiveColors = {
        primary: disabled ? 'peer-checked:bg-primary-lighter' : 'peer-checked:bg-primary',
        secondary: disabled ? 'peer-checked:bg-secondary-lighter' : 'peer-checked:bg-secondary',
        warning: disabled ? 'peer-checked:bg-warning-lighter' : 'peer-checked:bg-warning',
        danger: disabled ? 'peer-checked:bg-danger-lighter' : 'peer-checked:bg-danger',
        success: disabled ? 'peer-checked:bg-success-lighter' : 'peer-checked:bg-success',
    };
    const switchButtonSize = {
        sm: 'after:h-[12px] after:w-[12px] after:left-[2px] peer-checked:after:translate-x-[16px]',
        md: 'after:h-[16px] after:w-[16px] after:left-[2px] peer-checked:after:translate-x-[20px]',
        lg: 'after:h-[20px] after:w-[20px] after:left-[2px] peer-checked:after:translate-x-[24px]',
    };

    const switchSlotClasses = clsx(
        'flex-shrink-0 flex-grow-0',
        'peer-focus:outline-none rounded-full',
        disabled ? 'bg-grey-200' : 'bg-grey-600',
        disabled && !checked && !defaultChecked && 'after:bg-grey-300',
        'after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-white after:rounded-full  after:transition-all',
        switchSlotSize[size],
        switchButtonSize[size],
        switchSlotActiveColors[color],
    );
    const labelClasses = clsx(
        'select-none font-normal text-sm leading-[20px] text-grey-500 peer-checked:text-grey-900',
        disabled && '!text-grey-500',
    );
    return (
        <div>
            <label className={containerClasses}>
                <input
                    checked={checked}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    type='checkbox'
                    defaultValue=''
                    className='sr-only peer'
                />
                <div className={switchSlotClasses} />
                {label && <span className={labelClasses}>{label}</span>}
            </label>
        </div>
    );
};

export default Switch;
