'use client';
import React, { FC } from 'react';
import { Typography, Tag, Card, Button } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';
import SurchargeItem from '@/views/Accommodation/Detail/components/SurchargeItem';

interface IProps {}

const AccommodationBookingDetail: FC<IProps> = (props) => {
    const {} = props;

    const renderRoomDetailItem = () => {
        return (
            <div className='flex gap-10 py-4'>
                <Typography variant={'subtitle16'} className={'!text-primary'}>
                    Phòng 1:
                </Typography>
                <div className={'flex-1 flex gap-3'}>
                    <div className='flex flex-col gap-4'>
                        <Typography variant={'body16'}>Số lượng khách:</Typography>
                        <Typography variant={'body16'}>Khách đặt:</Typography>
                        <Typography variant={'body16'}>Số điện thoại:</Typography>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant={'body16'}>2 người lớn, 1 trẻ em</Typography>
                        <Typography variant={'body16'}>Nguyễn Văn An</Typography>
                        <Typography variant={'body16'}>0987654321</Typography>
                    </div>
                </div>
            </div>
        );
    };

    const renderRoomPriceItem = () => {
        return (
            <div className='flex gap-10 py-4'>
                <div className='flex '>
                    <Typography variant={'subtitle16'}>Phòng 1</Typography>
                    <Typography variant={'caption'} className={'!text-grey-600'}>
                        2 người lớn, 1 trẻ em (3 tuổi)
                    </Typography>
                </div>

                <div className={'flex-1 flex gap-3'}>
                    <div className='flex flex-col gap-4'>
                        <Typography variant={'body16'}>Số lượng khách:</Typography>
                        <Typography variant={'body16'}>Khách đặt:</Typography>
                        <Typography variant={'body16'}>Số điện thoại:</Typography>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Typography variant={'body16'}>2 người lớn, 1 trẻ em</Typography>
                        <Typography variant={'body16'}>Nguyễn Văn An</Typography>
                        <Typography variant={'body16'}>0987654321</Typography>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    The Luxury Collection Hotels & Resorts.
                </Typography>
                <div className='mt-1 my-2'>
                    <StarRated />
                </div>
                <Typography variant={'body16'}>
                    <i className='icon icon-baggade text-[20px] mr-1' />
                    56 Loseby An Hải Bắc, Quận Sơn Trà, Đà Nẵng
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <div className='flex gap-6'>
                    <div className={'flex-1 flex gap-2'}>
                        <div className='flex flex-col gap-3'>
                            <Typography variant={'body16'}>Ngày đặt:</Typography>
                            <Typography variant={'body16'}>Số lượng khách:</Typography>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography variant={'body16'}>02/03/2023, 12:45:21</Typography>
                            <Typography variant={'body16'}>3 người lớn, 2 trẻ em, 1 em bé </Typography>
                        </div>
                    </div>
                    <div className={'flex-1 flex gap-2'}>
                        <div className='flex flex-col gap-3'>
                            <Typography variant={'body16'}>Mã đơn hàng:</Typography>
                            <Typography variant={'body16'}>Mã đặt phòng:</Typography>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography variant={'body16'} className={'!text-primary'}>
                                F9876HY
                            </Typography>
                            <Typography variant={'body16'} className={'!text-primary'}>
                                VMB5678DF32W1
                            </Typography>
                        </div>
                    </div>
                    <div className='flex-1 flex gap-2 items-center justify-end my-3'>
                        <Tag variant={'outline'} color={'warning'}>
                            Đang giữ
                        </Tag>
                        <Tag variant={'solid'} color={'success'}>
                            Thời hạn thanh toán: 11h34
                        </Tag>
                    </div>
                </div>
            </div>

            <Card
                customClasses={{ root: 'mt-6' }}
                variant='border'
                rounded='lg'
                body={
                    <div>
                        <Typography variant={'subtitle20'} className={'mb-3'}>
                            Phòng tiêu chuẩn
                        </Typography>
                        <div className='flex'>
                            <div className='flex-1 flex gap-3'>
                                <div className='flex flex-col gap-3'>
                                    <Typography variant={'body16'}>Số lượng phòng:</Typography>
                                    <Typography variant={'body16'}>Số đêm:</Typography>
                                    <Typography variant={'body16'}>Ngày nhận phòng:</Typography>
                                    <Typography variant={'body16'}>Ngày trả phòng:</Typography>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <Typography variant={'body16'}>2</Typography>
                                    <Typography variant={'body16'}>3</Typography>
                                    <Typography variant={'body16'}>02/03/2023</Typography>
                                    <Typography variant={'body16'}>02/03/2023</Typography>
                                </div>
                            </div>
                            <div className='flex-1 flex flex-col gap-4'>
                                <div className={'flex flex-col gap-2'}>
                                    <Typography variant={'subtitle16'}>Hoàn hủy</Typography>
                                    <Typography variant={'body14'}>
                                        Không hoàn hủy khi bạn hủy đơn với khách sạn, Không hoàn hủy khi bạn hủy đơn với
                                        khách sạn, Không hoàn hủy khi bạn hủy đơn với khách sạn ... Xem thêm
                                    </Typography>
                                </div>
                                <div className={'flex flex-col gap-2'}>
                                    <Typography variant={'subtitle16'} className={'!text-danger'}>
                                        Nhận hóa đơn tại khách sạn
                                    </Typography>
                                    <Typography variant={'body14'}>
                                        Tripi không hỗ trợ xuất hóa đơn cho đơn hàng này. Vui lòng liên hệ khách sạn để
                                        được hỗ trợ
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            <Button size='xl' customClasses={{ root: 'mt-6 mb-2' }}>
                Tạo phát sinh thêm
            </Button>

            <div className='flex flex-row gap-6'>
                <div className='basis-2/3'>
                    <Card
                        variant='border'
                        rounded='lg'
                        body={
                            <div>
                                <div>
                                    <Typography variant={'subtitle20'}>Chi tiết phòng đặt</Typography>
                                    <div className={'divide-y divide-grey-300'}>
                                        {renderRoomDetailItem()}
                                        {renderRoomDetailItem()}
                                        {renderRoomDetailItem()}
                                    </div>
                                </div>
                                <div className={'mt-2'}>
                                    <Typography variant={'subtitle20'}>Yêu cầu đặc biệt</Typography>
                                    <div className={'flex-1 flex gap-4 mt-2'}>
                                        <div className='basis-1/4 flex flex-col gap-4'>
                                            <Typography variant={'body16'} className={'!text-primary'}>
                                                Giờ nhận phòng:
                                            </Typography>
                                            <Typography variant={'body16'} className={'!text-primary'}>
                                                Giờ trả phòng:
                                            </Typography>
                                            <Typography variant={'body16'} className={'!text-primary'}>
                                                Loại giường:
                                            </Typography>
                                            <Typography variant={'body16'} className={'!text-primary'}>
                                                Yêu cầu khác:
                                            </Typography>
                                        </div>
                                        <div className='basis-3/4 flex flex-col gap-4'>
                                            <Typography variant={'body16'}>10:30</Typography>
                                            <Typography variant={'body16'}>10:30</Typography>
                                            <Typography variant={'body16'}>Phòng 1: 2 giường đơn</Typography>
                                            <Typography variant={'body16'}>
                                                Phòng 2: Phòng có người già nên cần phòng yên tĩnh
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-6'}>
                                    <Typography variant={'subtitle20'}>Phát sinh thêm</Typography>
                                    <div className={'divide-y divide-grey-300'}>
                                        <SurchargeItem />
                                        <SurchargeItem />
                                        <SurchargeItem />
                                        <SurchargeItem />
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className='basis-1/3'>
                    <Card
                        variant='border'
                        rounded='lg'
                        body={
                            <div>
                                <div>
                                    <Typography variant={'subtitle20'}>Chi tiết thanh toán</Typography>
                                    <div className={'divide-y divide-grey-300'}></div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </>
    );
};

AccommodationBookingDetail.defaultProps = {};

export default AccommodationBookingDetail;
