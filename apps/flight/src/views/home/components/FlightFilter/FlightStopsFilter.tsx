import FlightContext from '@/contexts/flight/FlightContext';
import { FlightFilter } from '@/types/types';
import { Checkbox, IconButton, RHFCheckbox, Typography } from '@acme/design-system';
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';

type Props = {
    onFilter: Dispatch<SetStateAction<FlightFilter.FilterType>>;
};

const flightStops = [
    {
        value: 0,
        label: 'Bay thẳng',
    },
    {
        value: 1,
        label: '1 Điểm dừng',
    },
    {
        value: 2,
        label: '2 Điểm dừng',
    },
];

const FlightStopsFilter = (props: Props) => {
    const { onFilter } = props;
    const { departureAggregate } = React.useContext(FlightContext);

    const [stopsFilter, setStopsFilter] = useState<Array<number>>([]);

    const handleStopFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        const isChecked = event.target.checked;
        if (isChecked) {
            setStopsFilter([...stopsFilter, value]);
        } else {
            setStopsFilter(stopsFilter.filter((i) => i !== value));
        }
    };

    const handleResetFilter = () => {
        setStopsFilter([]);
    };

    useEffect(() => {
        onFilter((filter) => {
            return {
                ...filter,
                Stops: stopsFilter,
            };
        });
    }, [stopsFilter]);

    const isChecked = (value: number) => {
        return stopsFilter.includes(value);
    };

    const isDisabled = (value: number) => {
        return !departureAggregate.Stops.some((stop) => stop.value === value);
    };

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16'>Số điểm dừng</Typography>
                <IconButton onClick={handleResetFilter} size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <div className='flex flex-col gap-1 px-1'>
                {flightStops.map((item, index) => {
                    return (
                        <Checkbox
                            disabled={isDisabled(item.value)}
                            checked={isChecked(item.value)}
                            onChange={handleStopFilter}
                            key={item.value}
                            value={item.value}
                            label={item.label}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FlightStopsFilter;
