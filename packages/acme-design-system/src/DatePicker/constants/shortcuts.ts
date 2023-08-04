import dayjs from 'dayjs';

import { ShortcutsItem } from '../DatePicker.types';
import { formatDate, nextMonth, previousMonth } from '../helpers';

const DEFAULT_SHORTCUTS: {
    [key in string]: ShortcutsItem | ShortcutsItem[];
} = {
    today: {
        text: 'Hôm nay',
        period: {
            start: formatDate(dayjs()),
            end: formatDate(dayjs()),
        },
    },
    yesterday: {
        text: 'Hôm qua',
        period: {
            start: formatDate(dayjs().subtract(1, 'd')),
            end: formatDate(dayjs().subtract(1, 'd')),
        },
    },
    past: [
        {
            daysNumber: 7,
            text: '7 ngày trước',
            period: {
                start: formatDate(dayjs().subtract(7, 'd')),
                end: formatDate(dayjs()),
            },
        },
        {
            daysNumber: 30,
            text: '30 ngày trước',
            period: {
                start: formatDate(dayjs().subtract(30, 'd')),
                end: formatDate(dayjs()),
            },
        },
    ],
    future: [
        {
            daysNumber: 3,
            text: '3 ngày tới',
            period: {
                start: formatDate(dayjs()),
                end: formatDate(dayjs().add(3, 'd')),
            },
        },
        {
            daysNumber: 7,
            text: '7 ngày tới',
            period: {
                start: formatDate(dayjs()),
                end: formatDate(dayjs().add(7, 'd')),
            },
        },
    ],
    currentMonth: {
        text: 'Tháng này',
        period: {
            start: formatDate(dayjs().startOf('month')),
            end: formatDate(dayjs().endOf('month')),
        },
    },
    pastMonth: {
        text: 'Tháng trước',
        period: {
            start: formatDate(previousMonth(dayjs()).startOf('month')),
            end: formatDate(previousMonth(dayjs()).endOf('month')),
        },
    },
    nextMonth: {
        text: 'Tháng sau',
        period: {
            start: formatDate(nextMonth(dayjs()).startOf('month')),
            end: formatDate(nextMonth(dayjs()).endOf('month')),
        },
    },
};

export default DEFAULT_SHORTCUTS;
