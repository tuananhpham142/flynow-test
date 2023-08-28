// components
import React, { useContext } from 'react';
import { Select, Skeleton, Typography } from '@acme/design-system';

// types
import type { OptionItem, FlightSort } from '@/types/types';
import { toThousandSeparator } from '@acme/utils';
import FlightContext from '@/contexts/flight/FlightContext';

const sortOptions: Array<FlightSort.SortOption> = [
    {
        label: 'Rẻ nhất',
        value: {
            field: 'TotalPrice',
            sort: 'asc',
        },
    },
    {
        label: 'Cất cánh sớm nhất',
        value: {
            field: 'StartDate',
            sort: 'asc',
        },
    },
    {
        label: 'Cất cánh muộn nhất',
        value: {
            field: 'StartDate',
            sort: 'desc',
        },
    },
    {
        label: 'Hạ cánh sớm nhất',
        value: {
            field: 'EndDate',
            sort: 'asc',
        },
    },
    {
        label: 'Hạ cánh muộn nhất',
        value: {
            field: 'EndDate',
            sort: 'desc',
        },
    },
    {
        label: 'Thời gian bay ngắn nhất',
        value: {
            field: 'Duration',
            sort: 'asc',
        },
    },
];

type Props = {
    onSelect: (val: FlightSort.SortOptionValue) => void;
    totalResult: number;
    isLoading: boolean;
};

const FlightSorting: React.FC<Props> = (props) => {
    const { totalResult, onSelect, isLoading } = props;
    const { sessionData } = useContext(FlightContext);
    return (
        <>
            {isLoading ? (
                <FlightSortingSkeleton />
            ) : (
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <Typography
                            htmlTag='h2'
                            customClasses={{
                                root: '!font-semibold !text-2xl',
                            }}
                        >
                            {sessionData && sessionData?.FlightInfoSelected?.length === 1
                                ? 'Chọn chiều về'
                                : 'Chọn chiều đi'}
                        </Typography>
                        <Typography
                            customClasses={{
                                root: 'text-grey-500',
                            }}
                        >
                            {toThousandSeparator(totalResult)} kết quả
                        </Typography>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Typography
                            customClasses={{
                                root: 'text-grey-800',
                            }}
                        >
                            Sắp xếp theo
                        </Typography>
                        <Select
                            defaultValue={sortOptions[0]}
                            isClearable={false}
                            isSearchable={false}
                            size='lg'
                            placeholder='Sắp xếp theo'
                            options={sortOptions}
                            onChange={(val: OptionItem<FlightSort.SortOptionValue>) => onSelect(val.value)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default FlightSorting;

export const FlightSortingSkeleton = () => {
    return (
        <div className='flex items-center justify-between p-2 h-14 rounded-lg bg-white'>
            <div className='flex flex-col gap-2'>
                <Skeleton variant='rounded' height={23} width={150} />
                <Skeleton variant='rounded' height={14} width={100} />
            </div>
            <div className='flex gap-2 items-center'>
                <Skeleton variant='rounded' height={24} width={100} />
                <Skeleton variant='rounded' height={40} width={200} />
            </div>
        </div>
    );
};
