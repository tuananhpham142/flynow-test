import { dayjs, Duration } from '@acme/design-system';
dayjs.extend(Duration);

export const flightMinutesDurationFormat = (minutes: number) => {
    return dayjs.duration(minutes, 'minutes').format('H[h] m[m]');
};

export const formatFlightTime = (flightTime: string) => {
    return dayjs(flightTime).format('HH:mm');
};

export const getDiffTime = ({
    StartTime,
    EndTime,
    DiffType,
}: {
    StartTime: string;
    EndTime: string;
    DiffType: dayjs.QUnitType;
}) => {
    return dayjs(EndTime).diff(dayjs(StartTime), DiffType);
};

export const formatFlightDate = (flightDate: string) => {
    return dayjs(flightDate).format('DD/MM/YYYY');
};
