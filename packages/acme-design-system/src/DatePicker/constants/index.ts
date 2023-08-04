import { ColorKeys, Colors } from '../DatePicker.types';

export const COLORS = ['primary', 'secondary', 'danger', 'grey', 'warning', 'success'] as const;

export const DEFAULT_COLOR: ColorKeys = 'primary';

export const LANGUAGE: 'vi-VN' | 'en-US' = 'vi-VN';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const START_WEEK = 'mon';

export const DATE_LOOKING_OPTIONS = ['forward', 'backward', 'middle'];

export const DAYS = [0, 1, 2, 3, 4, 5, 6];

export const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CALENDAR_SIZE = 42;

// Beware, these maps of colors cannot be replaced with functions using string interpolation such as `bg-${color}-100`
// as described in Tailwind documentation https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export const BG_COLOR: Colors = {
    lighter: {
        primary: 'bg-primary-lighter',
        secondary: 'bg-secondary-lighter',
        danger: 'bg-danger-lighter',
        grey: 'bg-grey-lighter',
        warning: 'bg-warning-lighter',
        success: 'bg-success-lighter',
    },
    light: {
        primary: 'bg-primary-light',
        secondary: 'bg-secondary-light',
        danger: 'bg-danger-light',
        grey: 'bg-grey-light',
        warning: 'bg-warning-light',
        success: 'bg-success-light',
    },
    default: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        danger: 'bg-danger',
        grey: 'bg-grey',
        warning: 'bg-warning',
        success: 'bg-success',
    },
    hover: {
        primary: 'hover:bg-primary-darker',
        secondary: 'hover:bg-secondary-darker',
        danger: 'hover:bg-danger-darker',
        grey: 'hover:bg-grey-darker',
        warning: 'hover:bg-warning-darker',
        success: 'hover:bg-success-darker',
    },
    hoverLighter: {
        primary: 'hover:bg-primary-lighter',
        secondary: 'hover:bg-secondary-lighter',
        danger: 'hover:bg-danger-lighter',
        grey: 'hover:bg-grey-lighter',
        warning: 'hover:bg-warning-lighter',
        success: 'hover:bg-success-lighter',
    },
};

export const TEXT_COLOR: Colors = {
    default: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        danger: 'text-danger',
        grey: 'text-grey',
        warning: 'text-warning',
        success: 'text-success',
    },
    dark: {
        primary: 'text-primary dark:text-primary-lighter dark:hover:text-primary-light',
        secondary: 'text-secondary dark:text-secondary-lighter dark:hover:text-secondary-light',
        danger: 'text-danger dark:text-danger-lighter dark:hover:text-danger-light',
        grey: 'text-grey dark:text-grey-lighter dark:hover:text-grey-light',
        warning: 'text-warning dark:text-warning-lighter dark:hover:text-warning-light',
        success: 'text-success dark:text-success-lighter dark:hover:text-success-light',
    },
    hover: {
        primary: 'hover:text-primary-darker',
        secondary: 'hover:text-secondary-darker',
        danger: 'hover:text-danger-darker',
        grey: 'hover:text-grey-darker',
        warning: 'hover:text-warning-darker',
        success: 'hover:text-success-darker',
    },
};

export const BORDER_COLOR: Colors = {
    default: {
        primary: 'border-primary',
        secondary: 'border-secondary',
        danger: 'border-danger',
        grey: 'border-grey',
        warning: 'border-warning',
        success: 'border-success',
    },
    focus: {
        primary: 'focus:border-primary',
        secondary: 'focus:border-secondary',
        danger: 'focus:border-danger',
        grey: 'focus:border-grey',
        warning: 'focus:border-warning',
        success: 'focus:border-success',
    },
};

export const RING_COLOR: Colors = {
    focus: {
        primary: 'focus:ring-primary',
        secondary: 'focus:ring-secondary',
        danger: 'focus:ring-danger',
        grey: 'focus:ring-grey',
        warning: 'focus:ring-warning',
        success: 'focus:ring-success',
    },
    'second-focus': {
        primary: 'focus:ring-primary-light',
        secondary: 'focus:ring-secondary-light',
        danger: 'focus:ring-danger-light',
        grey: 'focus:ring-grey-light',
        warning: 'focus:ring-warning-light',
        success: 'focus:ring-success-light',
    },
};

export const BUTTON_COLOR: Colors = {
    focus: {
        primary: 'focus:ring-primary-lighter focus:bg-primary-lighter',
        secondary: 'focus:ring-secondary-lighter focus:bg-secondary-lighter',
        danger: 'focus:ring-danger-lighter focus:bg-danger-lighter',
        grey: 'focus:ring-grey-lighter focus:bg-grey-lighter',
        warning: 'focus:ring-warning-lighter focus:bg-warning-lighter',
        success: 'focus:ring-success-lighter focus:bg-success-lighter',
    },
};
