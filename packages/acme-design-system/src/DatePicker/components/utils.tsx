'use client';

import React, { useCallback, useContext } from 'react';

import { BG_COLOR, BORDER_COLOR, BUTTON_COLOR, RING_COLOR } from '../constants';
import DatepickerContext from '../contexts/DatepickerContext';

interface IconProps {
    className: string;
}

interface Button {
    children: JSX.Element | JSX.Element[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    roundedFull?: boolean;
    padding?: string;
    active?: boolean;
}

export const DateIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
            />
        </svg>
    );
};

export const CloseIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.20711 7.79289C8.81658 7.40237 8.18342 7.40237 7.79289 7.79289C7.40237 8.18342 7.40237 8.81658 7.79289 9.20711L10.5858 12L7.79289 14.7929C7.40237 15.1834 7.40237 15.8166 7.79289 16.2071C8.18342 16.5976 8.81658 16.5976 9.20711 16.2071L12 13.4142L14.7929 16.2071C15.1834 16.5976 15.8166 16.5976 16.2071 16.2071C16.5976 15.8166 16.5976 15.1834 16.2071 14.7929L13.4142 12L16.2071 9.20711C16.5976 8.81658 16.5976 8.18342 16.2071 7.79289C15.8166 7.40237 15.1834 7.40237 14.7929 7.79289L12 10.5858L9.20711 7.79289Z'
            />
        </svg>
    );
};

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
    );
};

export const DoubleChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5' />
        </svg>
    );
};

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
    );
};

export const DoubleChevronRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
    return (
        <svg
            className={className}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
        >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
        </svg>
    );
};

// eslint-disable-next-line react/display-name
export const Arrow = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div
            ref={ref}
            className='absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] bg-white dark:bg-slate-800 dark:border-slate-600'
        />
    );
});

export const SecondaryButton: React.FC<Button> = ({ children, onClick, disabled = false }) => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);

    // Functions
    const getClassName: () => string = useCallback(() => {
        const ringColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];
        return `w-full transition-all duration-300 bg-white dark:text-grey-700 font-medium border border-grey-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-grey-50 ${ringColor}`;
    }, [primaryColor]);

    return (
        <button type='button' className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export const PrimaryButton: React.FC<Button> = ({ children, onClick, disabled = false }) => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);
    const bgColor = BG_COLOR['default'][primaryColor as keyof (typeof BG_COLOR)['default']];
    const borderColor = BORDER_COLOR['default'][primaryColor as keyof (typeof BORDER_COLOR)['default']];
    const bgColorHover = BG_COLOR.hover[primaryColor as keyof typeof BG_COLOR.hover];
    const ringColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];

    // Functions
    const getClassName = useCallback(() => {
        return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${
            disabled ? ' cursor-no-drop' : ''
        }`;
    }, [bgColor, bgColorHover, borderColor, disabled, ringColor]);

    return (
        <button type='button' className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export const RoundedButton: React.FC<Button> = ({
    children,
    onClick,
    disabled,
    roundedFull = false,
    padding = 'py-[0.55rem]',
    active = false,
}) => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);

    // Functions
    const getClassName = useCallback(() => {
        const darkClass = 'dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10';
        const activeClass = active ? 'font-semibold bg-grey-50 dark:bg-white/5' : '';
        const defaultClass = !roundedFull
            ? `w-full tracking-wide ${darkClass} ${activeClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-grey-100 rounded-md focus:ring-1`
            : `${darkClass} ${activeClass} transition-all duration-300 hover:bg-grey-100 rounded-full p-[0.45rem] focus:ring-1`;
        const buttonFocusColor = BUTTON_COLOR.focus[primaryColor as keyof typeof BUTTON_COLOR.focus];
        const disabledClass = disabled ? 'line-through' : '';

        return `${defaultClass} ${buttonFocusColor} ${disabledClass}`;
    }, [disabled, padding, primaryColor, roundedFull, active]);

    return (
        <button type='button' className={getClassName()} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export const VerticalDash = () => {
    // Contexts
    const { primaryColor } = useContext(DatepickerContext);
    const bgColor = BG_COLOR['default'][primaryColor as keyof (typeof BG_COLOR)['default']];

    return <div className={`bg-primary h-7 w-1 rounded-full hidden md:block ${bgColor}`} />;
};
