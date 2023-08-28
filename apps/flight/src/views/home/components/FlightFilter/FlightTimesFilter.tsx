import FlightContext from '@/contexts/flight/FlightContext';
import { FlightFilter } from '@/types/types';
import { Checkbox, IconButton, Typography, dayjs } from '@acme/design-system';
import { FilterGreaterAndLess } from '@acme/utils';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
    onFilter: Dispatch<SetStateAction<FlightFilter.FilterType>>;
};

const timesFilter = [
    {
        label: '00:00 - 06:00 (Đêm đến sáng)',
        value: {
            min: 0,
            max: 6,
        },
    },
    {
        label: '06:00 - 12:00 (Sáng đến trưa)',
        value: {
            min: 6,
            max: 12,
        },
    },
    {
        label: '12:00 - 18:00 (Trưa đến tối)',
        value: {
            min: 12,
            max: 18,
        },
    },
    {
        label: '18:00 - 24:00 (Tối đến đêm)',
        value: {
            min: 18,
            max: 24,
        },
    },
];

const FlightTimesFilter = (props: Props) => {
    const { onFilter } = props;
    const { sessionData } = React.useContext(FlightContext);

    const [starTimeFilter, setStartTimeFilter] = useState<FilterGreaterAndLess>();
    const [endTimeFilter, setEndTimeFilter] = useState<FilterGreaterAndLess>();

    // const isDisabledStartFilter = (minHours: number, maxHours: number) => {
    //     if (!sessionData) return true;
    //     const { FlightData } = sessionData;
    //     const { DepartureFlights } = FlightData;

    //     return DepartureFlights.some((flight) => {
    //         const { StartDate } = flight;
    //         const hoursToCheck = dayjs(StartDate).hour();
    //         return hoursToCheck >= minHours && hoursToCheck <= maxHours;
    //     });
    // };

    const handleStartTimeFilter = (checked: boolean, minHour: number, maxHour: number) => {
        if (checked) {
            setStartTimeFilter({
                min: minHour,
                max: maxHour,
            });
        } else {
            setStartTimeFilter(undefined);
        }
    };

    const handleEndTimeFilter = (checked: boolean, minHour: number, maxHour: number) => {
        if (checked) {
            setEndTimeFilter({
                min: minHour,
                max: maxHour,
            });
        } else {
            setEndTimeFilter(undefined);
        }
    };

    const handleResetStartTimeFilter = () => {
        setStartTimeFilter(undefined);
    };
    const handleResetEndTimeFilter = () => {
        setEndTimeFilter(undefined);
    };

    useEffect(() => {
        if (starTimeFilter) {
            onFilter((filter) => ({
                ...filter,
                StartDate: starTimeFilter,
            }));
        } else {
            onFilter((filter) => {
                delete filter.StartDate;
                return {
                    ...filter,
                };
            });
        }
    }, [starTimeFilter]);

    useEffect(() => {
        if (endTimeFilter) {
            onFilter((filter) => ({
                ...filter,
                EndDate: endTimeFilter,
            }));
        } else {
            onFilter((filter) => {
                delete filter.EndDate;
                return {
                    ...filter,
                };
            });
        }
    }, [endTimeFilter]);

    const isStartFilterChecked = (minHour: number, maxHour: number) => {
        if (!starTimeFilter) return false;
        const minTime = starTimeFilter.min;
        const maxTime = starTimeFilter.max;
        return minTime === minHour && maxTime === maxHour;
    };

    const isEndFilterChecked = (minHour: number, maxHour: number) => {
        if (!endTimeFilter) return false;
        const minTime = endTimeFilter.min;
        const maxTime = endTimeFilter.max;
        return minTime === minHour && maxTime === maxHour;
    };

    return (
        <>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                    <Typography variant='subtitle16'>Thời gian cất cánh</Typography>
                    <IconButton onClick={handleResetStartTimeFilter} size='sm' variant='text'>
                        <i className='icon icon-back text-xl' />
                    </IconButton>
                </div>
                <div className='flex flex-col gap-1 px-1'>
                    {timesFilter.map((time, index) => (
                        <Checkbox
                            key={`TIME_${index}`}
                            circle
                            onChange={(e) => {
                                handleStartTimeFilter(e.target.checked, time.value.min, time.value.max);
                            }}
                            // disabled={isDisabledStartFilter(time.value.min, time.value.max)}
                            checked={isStartFilterChecked(time.value.min, time.value.max)}
                            label={time.label}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                    <Typography variant='subtitle16'>Thời gian hạ cánh</Typography>
                    <IconButton onClick={handleResetEndTimeFilter} size='sm' variant='text'>
                        <i className='icon icon-back text-xl' />
                    </IconButton>
                </div>
                <div className='flex flex-col gap-1 px-1'>
                    {timesFilter.map((time, index) => (
                        <Checkbox
                            key={`TIME_${index}`}
                            circle
                            onChange={(e) => {
                                handleEndTimeFilter(e.target.checked, time.value.min, time.value.max);
                            }}
                            checked={isEndFilterChecked(time.value.min, time.value.max)}
                            label={time.label}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FlightTimesFilter;
