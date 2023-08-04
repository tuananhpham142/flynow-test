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

    const departureDate = sessionData?.DepartureDate;
    const returnDate = sessionData?.ReturnDate;

    const handleTimeFilter = (checked: boolean, minHour: number, maxHour: number) => {
        const minTime = dayjs(departureDate)
            .set('hour', minHour)
            .set('minute', 0)
            .set('second', 0)
            .format('YYYY-MM-DDTHH:mm:ss');
        const maxTime = dayjs(departureDate)
            .set('hour', maxHour)
            .set('minute', 0)
            .set('second', 0)
            .format('YYYY-MM-DDTHH:mm:ss');

        if (checked) {
            setStartTimeFilter({
                min: minTime,
                max: maxTime,
            });
        } else {
            setStartTimeFilter(undefined);
        }
    };

    const handleResetFilter = () => {
        setStartTimeFilter(undefined);
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

    const isChecked = (minHour: number, maxHour: number) => {
        if (!starTimeFilter) return false;
        const minTime = dayjs(starTimeFilter.min);
        const maxTime = dayjs(starTimeFilter.max);
        if (maxHour === 24) {
            return minTime.hour() === minHour && maxTime.hour() === 0;
        }
        return minTime.hour() === minHour && maxTime.hour() === maxHour;
    };
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16'>Thời gian cất cánh</Typography>
                <IconButton onClick={handleResetFilter} size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <div className='flex flex-col gap-1 px-1'>
                {timesFilter.map((time, index) => (
                    <Checkbox
                        key={`TIME_${index}`}
                        circle
                        onChange={(e) => {
                            handleTimeFilter(e.target.checked, time.value.min, time.value.max);
                        }}
                        checked={isChecked(time.value.min, time.value.max)}
                        label={time.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default FlightTimesFilter;
