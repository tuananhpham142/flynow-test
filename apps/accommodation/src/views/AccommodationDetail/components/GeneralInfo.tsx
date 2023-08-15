'use client';
import React, { FC } from 'react';
import { Button, Tag, Typography, IconButton, Progress } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';

interface IProps {}

const GeneralInfo: FC<IProps> = (props) => {
    const {} = props;

    const renderFeaturedItem = () => {
        return (
            <div className='flex gap-3'>
                <IconButton>icon</IconButton>
                <div>
                    <Typography variant={'subtitle14'}>Miễn phí hoàn huỷ</Typography>
                    <Typography variant={'body14'} className={'text-grey-600'}>
                        Chọn phòng với Giá hoàn tiền để linh hoạt tối đa
                    </Typography>
                </div>
            </div>
        );
    };

    const renderAmenitiesItem = () => {
        return (
            <div className='flex items-center gap-1'>
                <IconButton>icon</IconButton>
                <div>
                    <Typography variant={'body14'}>Wifi miễn phí</Typography>
                </div>
            </div>
        );
    };

    const renderProgressRatingItem = () => {
        return (
            <div className={'mb-3'}>
                <div className='flex justify-between items-center mb-0.5'>
                    <Typography variant={'body14'}>Sạch sẽ</Typography>
                    <Typography variant={'subtitle14'}>9.0</Typography>
                </div>
                <Progress percentage={80} color={'warning'} />
            </div>
        );
    };

    return (
        <>
            <div className={'flex items-center border-b border-grey-300 mb-4'}>
                <div className='basis-3/4'>
                    <Typography htmlTag={'h5'} variant={'h5'}>
                        The Luxury Collection Hotels & Resorts.
                    </Typography>
                    <div className='mt-1 mb-4'>
                        <StarRated />
                    </div>
                    <Typography variant={'body16'} className={'text-grey-700'}>
                        Được xây dựng vào năm 2018, Golf Valley Hotel là sự bổ sung khác biệt cho Đà Lạt và là lựa chọn
                        thông minh cho du khách. Từ đây, khách có thể tận dụng tối đa tất cả những gì thành phố sôi động
                        cung cấp. Với vị trí thuận tiện, khách sạn dễ dàng đến các điểm đến phải xem của thành phố. Các
                        tiện nghi và dịch vụ được cung cấp bởi Golf Valley Hotel đảm bảo cho bạn một kỳ nghỉ dễ chịu.
                        ...Xem thêm
                    </Typography>
                    <div className={'flex flex-row gap-2 my-3'}>
                        <Tag variant={'solid'} color={'warning'}>
                            #Khuyến mãi
                        </Tag>
                        <Tag variant={'solid'} color={'warning'}>
                            #Miễn phí bữa sáng
                        </Tag>
                        <Tag variant={'solid'} color={'warning'}>
                            #Miễn phí khu vui chơi trẻ em
                        </Tag>
                        <Tag variant={'solid'} color={'warning'}>
                            #Bán chạy nhất
                        </Tag>
                    </div>
                    <div className={'flex flex-row gap-2 mb-6'}>
                        <Button variant='outline'>Chia sẻ</Button>
                        <Button variant='outline'>Yêu thích</Button>
                    </div>
                </div>
                <div className='basis-1/4 text-end'>
                    <Typography htmlTag={'h5'} variant={'h5'} className={'text-orange'}>
                        1.470.000₫
                    </Typography>
                    <Typography variant={'body16'}>1 phòng/ 1 đêm</Typography>
                    <Button size={'xl'} rounded={'lg'} customClasses={{ root: 'mt-2 w-2/3' }}>
                        Chọn phòng
                    </Button>
                </div>
            </div>
            <div className={'flex flex-row'}>
                <div className={'flex-1'}>
                    <Typography variant={'subtitle18'} className={'mb-3'}>
                        Điểm nổi bật của khách sạn
                    </Typography>
                    <div className='flex flex-col gap-4'>
                        {renderFeaturedItem()}
                        {renderFeaturedItem()}
                        {renderFeaturedItem()}
                    </div>
                </div>
                <div className={'border-r border-grey-300 mx-4'} />
                <div className={'flex-1'}>
                    <Typography variant={'subtitle18'} className={'mb-3'}>
                        Tiện ích khác biệt
                    </Typography>
                    <div className={'grid grid-cols-2 gap-x-6 gap-y-3'}>
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                    </div>
                </div>
                <div className={'border-r border-grey-300 mx-4'} />
                <div className={'flex-1'}>
                    <div className={'flex items-center gap-2 mb-3'}>
                        <Typography
                            htmlTag={'span'}
                            variant={'subtitle18'}
                            className={'rounded bg-blue px-2 text-white'}
                        >
                            9.9
                        </Typography>
                        <Typography variant={'subtitle18'}>Khách hàng đánh giá</Typography>
                    </div>

                    {renderProgressRatingItem()}
                    {renderProgressRatingItem()}
                    {renderProgressRatingItem()}

                    <Typography variant={'caption'} className={'!text-primary'}>
                        Xem 2345 đánh giá
                    </Typography>
                </div>
            </div>
        </>
    );
};

GeneralInfo.defaultProps = {};

export default GeneralInfo;
