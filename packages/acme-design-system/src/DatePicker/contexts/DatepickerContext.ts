import dayjs from 'dayjs';
import React, { createContext, ReactNode } from 'react';

import { DATE_FORMAT, START_WEEK } from '../constants';
import {
    ClassNamesTypeProp,
    ColorKeys,
    Configs,
    DateRangeType,
    DateType,
    DateValueType,
    Period,
    PopoverDirectionType,
} from '../DatePicker.types';

interface DatepickerStore {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    input?: React.RefObject<HTMLInputElement>;
    asSingle?: boolean;
    primaryColor: ColorKeys;
    configs?: Configs;
    calendarContainer: React.RefObject<HTMLDivElement> | null;
    arrowContainer: React.RefObject<HTMLDivElement> | null;
    hideDatepicker: () => void;
    inputSize?: 'sm' | 'md' | 'lg';
    period: Period;
    changePeriod: (period: Period) => void;
    dayHover: string | null;
    changeDayHover: (day: string | null) => void;
    inputText: string;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    showFooter?: boolean;
    placeholder?: string | null;
    separator: string;
    i18n: 'vi-VN' | 'en-US';
    value: DateValueType;
    disabled?: boolean;
    inputClassName?: ((className: string) => string) | string | null;
    containerClassName?: ((className: string) => string) | string | null;
    toggleClassName?: ((className: string) => string) | string | null;
    clearable?: boolean;
    hasToggle?: boolean;
    toggleIcon?: (open: boolean) => React.ReactNode;
    readOnly?: boolean;
    startWeekOn?: string | null;
    displayFormat: string;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    dateLooking?: 'forward' | 'backward' | 'middle';
    disabledDates?: DateRangeType[] | null;
    inputId?: string;
    inputName?: string;
    classNames?: ClassNamesTypeProp;
    popoverDirection?: PopoverDirectionType;
}

const DatepickerContext = createContext<DatepickerStore>({
    input: undefined,
    primaryColor: 'primary',
    configs: undefined,
    calendarContainer: null,
    arrowContainer: null,
    period: { start: null, end: null },
    changePeriod: (period) => {},
    hideDatepicker: () => {},
    dayHover: null,
    changeDayHover: (day: string | null) => {},
    inputText: '',
    changeInputText: (text) => {},
    updateFirstDate: (date) => {},
    changeDatepickerValue: (value: DateValueType, e: HTMLInputElement | null | undefined) => {},
    showFooter: false,
    value: null,
    i18n: 'vi-VN',
    disabled: false,
    startAdornment: undefined,
    endAdornment: undefined,
    inputClassName: '',
    containerClassName: '',
    toggleClassName: '',
    readOnly: false,
    displayFormat: DATE_FORMAT,
    minDate: null,
    maxDate: null,
    dateLooking: 'forward',
    disabledDates: null,
    inputId: undefined,
    inputName: undefined,
    startWeekOn: START_WEEK,
    toggleIcon: undefined,
    classNames: undefined,
    popoverDirection: undefined,
    separator: '~',
});

export default DatepickerContext;
