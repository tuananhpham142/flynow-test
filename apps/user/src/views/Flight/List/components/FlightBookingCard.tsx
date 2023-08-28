import React from 'react';
import { Button, Card, Chip, Divider, Typography } from '@acme/design-system';
import { getAirlineLogo } from '@acme/pages/components/Logos';
import { flightMinutesDurationFormat, formatFlightTime } from '@acme/utils';
import { useRouter } from 'next/navigation';

type Props = {};

const FlightBookingCard = (props: Props) => {
    const router = useRouter();

    const handleNavigateToDetail = () => {
        router.push('/flight-booking/123');
    };
    return (
        <Card
            variant='border'
            noPadding
            body={
                <div className='flex gap-5 p-3'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div className='flex gap-2 py-1'>
                            <Chip
                                customClasses={{
                                    root: '!bg-warning-lighter',
                                }}
                                variant='outline'
                                rounded='rounded'
                                color='warning'
                            >
                                Đang giữ chỗ
                            </Chip>
                            <Chip
                                customClasses={{
                                    root: '!bg-success !text-white',
                                }}
                                variant='contained'
                                rounded='rounded'
                                color='success'
                            >
                                Thời gian giữ chỗ: 12h34
                            </Chip>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 w-[195px]'>
                                {/* logo */}
                                <div>{getAirlineLogo('QH', { width: 48, height: 48 })}</div>
                                {/* logo */}
                                <div className='flex flex-col'>
                                    <span className='text-grey-800'>{'BamBooAirWay'}</span>
                                    <span className='text-[13px] text-grey-500'>{'Airbus A320'}</span>
                                    <span className='text-[13px] text-grey-500'>Loại vé: {'ECONOMY'}</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <Typography variant='body14'>Thứ 2, 02/03/2023 • BL768</Typography>
                                <div className='flex items-center flex-1 gap-3'>
                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <Typography variant='subtitle20'>HAN</Typography>
                                        <Typography variant='caption'>
                                            {formatFlightTime('2021-09-30T10:00:00')}
                                        </Typography>
                                    </div>

                                    <div className='flex flex-col flex-1 items-center w-[140px]'>
                                        <span className='text-[13px] text-grey-500'>
                                            {flightMinutesDurationFormat(205)}
                                        </span>
                                        <div className='flex items-center w-full gap-0.5'>
                                            <Divider className='flex-1 h-[2px]' color='grey-500' />
                                            {1 === 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )}
                                            {/* {flight.Stops > 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )} */}
                                            <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                        </div>
                                        <span className='text-[13px] text-grey-500'>
                                            {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                        </span>
                                    </div>

                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <Typography variant='subtitle20'>SGN</Typography>
                                        <Typography variant='caption'>
                                            {formatFlightTime('2021-09-30T10:00:00')} (+1d)
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 w-[195px]'>
                                {/* logo */}
                                <div>{getAirlineLogo('QH', { width: 48, height: 48 })}</div>
                                {/* logo */}
                                <div className='flex flex-col'>
                                    <span className='text-grey-800'>{'BamBooAirWay'}</span>
                                    <span className='text-[13px] text-grey-500'>{'Airbus A320'}</span>
                                    <span className='text-[13px] text-grey-500'>Loại vé: {'ECONOMY'}</span>
                                </div>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <Typography variant='body14'>Thứ 2, 02/03/2023 • BL768</Typography>
                                <div className='flex items-center flex-1 gap-3'>
                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <Typography variant='subtitle20'>HAN</Typography>
                                        <Typography variant='caption'>
                                            {formatFlightTime('2021-09-30T10:00:00')}
                                        </Typography>
                                    </div>

                                    <div className='flex flex-col flex-1 items-center w-[140px]'>
                                        <span className='text-[13px] text-grey-500'>
                                            {flightMinutesDurationFormat(205)}
                                        </span>
                                        <div className='flex items-center w-full gap-0.5'>
                                            <Divider className='flex-1 h-[2px]' color='grey-500' />
                                            {1 === 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )}
                                            {/* {flight.Stops > 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )} */}
                                            <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                        </div>
                                        <span className='text-[13px] text-grey-500'>
                                            {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                        </span>
                                    </div>

                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <Typography variant='subtitle20'>SGN</Typography>
                                        <Typography variant='caption'>
                                            {formatFlightTime('2021-09-30T10:00:00')} (+1d)
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-between'>
                        <div className={'flex gap-2'}>
                            <div className='flex flex-col gap-3'>
                                <Typography variant={'body14'}>Mã đơn hàng:</Typography>
                                <Typography variant={'body14'}>Mã đặt chỗ chiều đi:</Typography>
                                <Typography variant={'body14'}>Mã đặt chỗ chiều về:</Typography>
                                <Typography variant={'body14'}>Ngày đặt:</Typography>
                                <Typography variant={'body14'}>Khách hàng:</Typography>
                                <Typography variant={'body14'}>Số lượng khách:</Typography>
                                <Typography variant={'body14'}>Tổng tiền thanh toán:</Typography>
                                <Typography variant={'body14'}>Trạng thái thanh toán:</Typography>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Typography variant={'body14'} className='!text-primary'>
                                    KGH3424H
                                </Typography>
                                <Typography variant={'body14'} className='!text-primary'>
                                    KGH3424H
                                </Typography>
                                <Typography variant={'body14'} className='!text-primary'>
                                    KGH3424H
                                </Typography>
                                <Typography variant={'body14'}>02/03/2023, 12:45:21</Typography>
                                <Typography variant={'body14'}>Nguyễn Hà Anh Tuấn</Typography>
                                <Typography variant={'body14'}>3 Người lớn, 2 trẻ em, 1 em bé</Typography>
                                <Typography variant={'subtitle14'} className='!text-warning'>
                                    12.000.000₫
                                </Typography>
                                <Typography variant={'body14'} className='!text-danger'>
                                    Chờ thanh toán
                                </Typography>
                            </div>
                        </div>

                        <div className=''>
                            <Button
                                onClick={handleNavigateToDetail}
                                size='sm'
                                variant={'text'}
                                endIcon={<i className='icon icon-caret-right text-[16px]' />}
                            >
                                Xem chi tiết
                            </Button>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default FlightBookingCard;
