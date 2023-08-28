'use client';
import {
    Button,
    Datepicker,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Typography,
    dayjs,
} from '@acme/design-system';
import { DateValueType } from '@acme/design-system/DatePicker/DatePicker.types';
import React, { FC, useState } from 'react';
import AcdAutosuggestionResult from './AcdAutosuggestionResult';
import { AcdSearchQuery } from '../../../types/Accommodation/AcdRequest';
import { queryString } from '@acme/utils';
import { useRouter } from 'next/navigation';
import { routePaths } from '@acme/utils';
import OccupancyPopup from './OccupancyPopup';

interface IProps {
    isHomePage?: boolean;
    initQuery?: AcdSearchQuery;
    onSubmit: (data: AcdSearchQuery) => void;
}

const AccommodationSearch: FC<IProps> = (props) => {
    const {
        isHomePage,
        onSubmit,
        initQuery = {
            Rooms: 1,
            Adult: 1,
            Children: 0,
            Destination: '',
            CheckIn: dayjs().format('YYYY-MM-DD'),
            CheckOut: dayjs().add(1, 'day').format('YYYY-MM-DD'),
        },
    } = props;
    const router = useRouter();

    // States
    const [valueDatePicker, setValueDatePicker] = useState<DateValueType>({
        startDate: initQuery.CheckIn,
        endDate: initQuery.CheckOut,
    });
    const [destination, setDestination] = useState<string>('');
    const [occupancy, setOccupancy] = useState({
        Rooms: 1,
        Adult: 1,
        Children: 0,
    });
    // End States

    const handleSubmitSearch = () => {
        const acdQuery: AcdSearchQuery = {
            ...occupancy,
            Destination: destination,
            CheckIn: valueDatePicker.startDate as string,
            CheckOut: valueDatePicker.endDate as string,
        };
        const searchParams = queryString.stringify(acdQuery);

        if (isHomePage) {
            window.location.assign(`${window.location.origin + routePaths.accommodation}?${searchParams}`);
        } else {
            router.replace(`?${searchParams}`);
            onSubmit(acdQuery);
        }
    };

    return (
        <>
            <div className='rounded w-full flex items-center gap-2'>
                <OccupancyPopup occupancyData={occupancy} onChange={setOccupancy} />
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 grow'>
                    <div className='rounded flex-[5] flex flex-wrap items-center'>
                        <div className='flex-1'>
                            <Popover placement='bottom'>
                                <PopoverTrigger>
                                    <Input
                                        customClasses={{
                                            inputContainer: '!h-[56px] !rounded-lg',
                                        }}
                                        startAdornment={
                                            <span className='text-grey-800 me-2'>
                                                <svg
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        fill-rule='evenodd'
                                                        clip-rule='evenodd'
                                                        d='M12 4C8.13401 4 5 7.13401 5 11C5 13.2061 6.33607 15.268 8.20492 16.8876L11.6463 19.8702C11.8493 20.0461 12.1507 20.0461 12.3537 19.8702L15.7951 16.8876C17.6639 15.268 19 13.2061 19 11C19 7.13401 15.866 4 12 4ZM3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11C21 14.0264 19.1902 16.5918 17.1049 18.399L13.6635 21.3816C12.7088 22.209 11.2912 22.209 10.3365 21.3816L6.89505 18.399C4.80977 16.5918 3 14.0264 3 11Z'
                                                        fill='#212B36'
                                                    />
                                                    <path
                                                        d='M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z'
                                                        fill='#212B36'
                                                    />
                                                </svg>
                                            </span>
                                        }
                                        value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                        fullWidth
                                        size='lg'
                                        placeholder='Điểm đến'
                                    />
                                </PopoverTrigger>
                                <PopoverContent className='z-100 !w-[600px]'>
                                    <AcdAutosuggestionResult result={[]} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='rounded flex-[4] flex items-center border border-grey-400 rounded-lg'>
                        <div className='grow'>
                            <Datepicker
                                hasToggle
                                placeholder='Ngày đi'
                                containerClassName={'h-[56px] rounded-lg'}
                                useRange
                                startAdornment={
                                    <span className='text-grey-800 me-2'>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M19 6H5L5 20H19V6ZM5 4C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H5Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z'
                                                fill='currentColor'
                                            />
                                            <rect x='4' y='5' width='16' height='3' fill='currentColor' />
                                        </svg>
                                    </span>
                                }
                                value={valueDatePicker}
                                formatInputValueDisplay={(val: DateValueType) =>
                                    `Ngày đi: ${dayjs(val?.startDate?.toString()).format('DD-MM-YYYY') || ''}`
                                }
                                displayFormat={'DD-MM-YYYY'}
                                onChange={(value: DateValueType, e?: HTMLInputElement | null | undefined) => {
                                    setValueDatePicker(value);
                                }}
                            />
                        </div>
                        <div className=''>|</div>
                        <div className='grow'>
                            <Datepicker
                                hasToggle
                                clearable
                                placeholder='Ngày về'
                                containerClassName={'h-[56px] rounded-lg'}
                                useRange
                                startAdornment={
                                    <span className='text-grey-800 me-2'>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M19 6H5L5 20H19V6ZM5 4C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H5Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z'
                                                fill='currentColor'
                                            />
                                            <rect x='4' y='5' width='16' height='3' fill='currentColor' />
                                        </svg>
                                    </span>
                                }
                                value={valueDatePicker}
                                formatInputValueDisplay={(val: DateValueType) =>
                                    `Ngày về: ${dayjs(val?.endDate?.toString()).format('DD-MM-YYYY') || ''}`
                                }
                                displayFormat={'DD-MM-YYYY'}
                                onChange={(value: DateValueType, e?: HTMLInputElement | null | undefined) => {
                                    setValueDatePicker(value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='rounded w-[120px]'>
                    <Button
                        variant='contained'
                        color='primary'
                        className='h-full w-full'
                        rounded='lg'
                        onClick={handleSubmitSearch}
                    >
                        Tìm kiếm
                    </Button>
                </div>
            </div>
        </>
    );
};
export default AccommodationSearch;
