import React from 'react';
import { Button, Divider, Typography, dayjs, DayJsLocaleVn } from '@acme/design-system';
dayjs.locale(DayJsLocaleVn);
import { getPlaneType, formatFlightTime, currencyFormat } from '@acme/utils';
import { getAirlineLogo } from '../Logos';
import FlightContext from '@/contexts/flight/FlightContext';

type Props = {};

const SelectedFlightCard = (props: Props) => {
    const { sessionData, flightViewMode } = React.useContext(FlightContext);

    const departureCardInfo = sessionData?.FlightInfoSelected?.find((item) => item.Index === 1);

    if (!departureCardInfo) {
        return null;
    }

    // utils
    const formatStartTime = () => {
        const timeString = dayjs(departureCardInfo.StartDate).locale('vi-VN').format('dddd, DD/MM/YYYY');
        return timeString.charAt(0).toUpperCase() + timeString.slice(1);
    };

    const fareOption = departureCardInfo.FareOptions[0];

    const firstSegment = departureCardInfo.ListSegment[0];

    const lastSegment = [...departureCardInfo.ListSegment].pop() || firstSegment;

    if (flightViewMode === 1) {
        return null;
    }

    return (
        <div className='relative w-full h-[112px] flex bg-primary-light rounded-lg text-white before:absolute before:h-[20px] before:w-[20px] before:bg-[#fbfbfb] before:rounded-full before:left-[67%] before:-top-[10px] before:-translate-x-[10px] after:absolute after:h-[20px] after:w-[20px] after:bg-[#fbfbfb] after:rounded-full after:left-[67%] after:-bottom-[10px] after:-translate-x-[10px]'>
            <div className='flex-[67] border-r border-dashed'>
                <div className='flex flex-col h-full w-full py-3 px-6 gap-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Typography
                                variant='subtitle16'
                                customClasses={{
                                    root: '!text-white',
                                }}
                            >
                                Chiều đi
                            </Typography>
                            <Typography
                                variant='body16'
                                customClasses={{
                                    root: '!text-white',
                                }}
                            >
                                {formatStartTime()}
                            </Typography>
                        </div>
                        <div className='flex items-center gap-1'>
                            {getAirlineLogo(departureCardInfo.AirlineCode, {})}
                            <Typography
                                customClasses={{
                                    root: '!text-sm text-primary-lighter',
                                }}
                            >
                                {departureCardInfo.AirlineName}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Divider color='primary-lighter' />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-1'>
                                <Typography
                                    variant='body14'
                                    customClasses={{
                                        root: '!text-white',
                                    }}
                                >
                                    {formatFlightTime(departureCardInfo.StartDate)}
                                </Typography>
                                <Typography
                                    variant='body14'
                                    customClasses={{
                                        root: '!text-white',
                                    }}
                                >
                                    {formatFlightTime(departureCardInfo.EndDate)}
                                    {/* <sup className='text-[10px]'>+1d</sup> */}
                                </Typography>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Typography
                                    variant='body14'
                                    customClasses={{
                                        root: '!text-white',
                                    }}
                                >
                                    {firstSegment.StartPointCityName} ({departureCardInfo.StartPoint})
                                </Typography>
                                <Typography
                                    variant='body14'
                                    customClasses={{
                                        root: '!text-white',
                                    }}
                                >
                                    {lastSegment.EndPointCityName} ({departureCardInfo.EndPoint})
                                </Typography>
                            </div>
                        </div>
                        <div className='flex flex-col items-end gap-1'>
                            <Typography
                                customClasses={{
                                    root: '!text-sm text-primary-lighter',
                                }}
                            >
                                {departureCardInfo.FlightNumber} •{' '}
                                {getPlaneType(Number(departureCardInfo.ListSegment[0].Plane))}
                            </Typography>
                            <Typography
                                customClasses={{
                                    root: '!text-sm text-primary-lighter',
                                }}
                            >
                                Loại vé: {fareOption.GroupClass}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-[33]'>
                <div className='flex flex-col justify-between items-end h-full w-full py-3 px-6'>
                    <div className='flex flex-col items-end'>
                        <Typography
                            variant='body14'
                            customClasses={{
                                root: 'text-primary-lighter',
                            }}
                        >
                            Tổng giá vé chiều đi
                        </Typography>
                        <Typography
                            variant='subtitle16'
                            customClasses={{
                                root: '!text-white',
                            }}
                        >
                            {currencyFormat(fareOption.TotalPrice)}
                        </Typography>
                    </div>
                    <Button
                        size='sm'
                        variant='outline'
                        fullWidth
                        customClasses={{
                            root: '!bg-[#0000] text-primary-lighter !border-white hover:text-white',
                        }}
                    >
                        Thay đổi chuyến bay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SelectedFlightCard;
