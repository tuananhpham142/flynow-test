import FlightContext from '@/contexts/flight/FlightContext';
import { FlightFilter } from '@/types/types';
import { Chip, Typography } from '@acme/design-system';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
    onFilter: Dispatch<SetStateAction<FlightFilter.FilterType>>;
};

const SeatClassesFilter = (props: Props) => {
    const { onFilter } = props;
    const { departureAggregate } = React.useContext(FlightContext);

    const [seatClassesFilter, setSeatClassesFilter] = useState<Array<string | number>>([]);

    useEffect(() => {
        onFilter((filter) => ({ ...filter, GroupClass: seatClassesFilter }));
    }, [seatClassesFilter]);
    return (
        <div className='flex flex-col gap-1'>
            <Typography variant='subtitle16'>Hạng ghế</Typography>
            <div className='flex flex-wrap gap-1'>
                {departureAggregate.GroupClass.map((seatClass) => {
                    const isChecked = seatClassesFilter?.includes(seatClass.value);
                    return (
                        <Chip
                            key={seatClass.value}
                            onClick={() => {
                                const value = seatClass.value;
                                if (!isChecked) {
                                    setSeatClassesFilter([...seatClassesFilter, value]);
                                } else {
                                    setSeatClassesFilter(seatClassesFilter.filter((i) => i !== value));
                                }
                            }}
                            checked={isChecked}
                            customClasses={{
                                root: 'px-4 py-1.5 !text-sm cursor-pointer',
                            }}
                        >
                            {/* {`${seatClass.label}(${seatClass.count})`} */}
                            {seatClass.label}
                        </Chip>
                    );
                })}
            </div>
        </div>
    );
};

export default SeatClassesFilter;
