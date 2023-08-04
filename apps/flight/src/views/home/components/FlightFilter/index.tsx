// components
import React, { Dispatch, SetStateAction } from 'react';
import { Divider } from '@acme/design-system';
import FlightFilterSkeleton from './FlightFilterSkeleton';
import FlightTimesFilter from './FlightTimesFilter';
import FlightAirlinesFilter from './FlightAirlinesFilter';
import FlightStopsFilter from './FlightStopsFilter';
import SeatClassesFilter from './SeatClassesFilter';

// types
import type { AggregateValue } from '@/contexts/flight/FlightContext.type';
import type { FlightFilter } from '@/types/types';

type Props = {
    isLoading: boolean;
    onFilter: Dispatch<SetStateAction<FlightFilter.FilterType>>;
};

const FlightFilter = (props: Props) => {
    const { isLoading, onFilter } = props;

    if (isLoading) {
        return <FlightFilterSkeleton />;
    }

    return (
        <div className='flex flex-col gap-4 py-14'>
            <SeatClassesFilter onFilter={onFilter} />
            <Divider />
            <FlightTimesFilter onFilter={onFilter} />
            <Divider />
            <FlightStopsFilter onFilter={onFilter} />
            <Divider />
            <FlightAirlinesFilter onFilter={onFilter} />
        </div>
    );
};

export default FlightFilter;
