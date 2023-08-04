import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { Checkbox, IconButton, Input, Typography } from '@acme/design-system';
import { FlightFilter } from '@/types/types';
import FlightContext from '@/contexts/flight/FlightContext';

type Props = {
    onFilter: Dispatch<SetStateAction<FlightFilter.FilterType>>;
};

const getAirlineName = (code: string) => {
    switch (code) {
        case 'VN':
            return 'Vietnam Airlines';
        case 'VJ':
            return 'Vietjet Air';
        case 'QH':
            return 'Bamboo Airways';
        default:
            return code;
    }
};

const FlightAirlinesFilter = (props: Props) => {
    const { onFilter } = props;
    const { departureAggregate } = React.useContext(FlightContext);

    const [airlinesFilter, setAirlinesFilter] = useState<Array<string | number>>([]);

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setAirlinesFilter([...airlinesFilter, value]);
        } else {
            setAirlinesFilter(airlinesFilter.filter((i) => i !== value));
        }
    };

    const handleResetFilter = () => {
        setAirlinesFilter([]);
    };

    useEffect(() => {
        onFilter((filter) => {
            return {
                ...filter,
                AirlineCode: airlinesFilter,
            };
        });
    }, [airlinesFilter]);

    const isChecked = (value: string | number) => {
        return airlinesFilter.includes(value);
    };

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16'>Hãng hàng không</Typography>
                <IconButton onClick={handleResetFilter} size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <Input
                placeholder='Tìm kiếm hãng bay'
                fullWidth
                startAdornment={<i className='icon icon-search text-xl' />}
            />
            <div className='flex flex-col gap-1 px-1'>
                {departureAggregate.AirlineCode.map((item) => {
                    return (
                        <Checkbox
                            checked={isChecked(item.value)}
                            onChange={handleFilter}
                            key={item.value}
                            value={item.value}
                            label={`${getAirlineName(item.value as string)} (${item.count})`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default FlightAirlinesFilter;
