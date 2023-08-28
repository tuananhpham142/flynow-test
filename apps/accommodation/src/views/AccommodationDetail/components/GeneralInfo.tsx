'use client';
import React, { FC } from 'react';
import { Button, Tag, Typography, IconButton, Progress } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';
import { TagModel } from '@/types/Tag/TagModel';
import { OverallRatingModel } from '@/types/Review/ReviewModel';

interface IProps {
    specialAmenities: Array<TagModel>;
    features: Array<TagModel>;
    overallRating: OverallRatingModel;
    name: string;
    description: string;
    totalRating: number;
    totalReview: number;
    price: number;
    unitPrice: number;
    isPreviewPage?: boolean;
}

const GeneralInfo: FC<IProps> = (props) => {
    const {
        isPreviewPage,
        description,
        name,
        overallRating,
        totalReview,
        totalRating,
        features,
        specialAmenities,
        unitPrice,
        price,
    } = props;

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
            <>
                <div className={'mb-3'}>
                    <div className='flex justify-between items-center mb-0.5'>
                        <Typography variant={'body14'}>Sạch sẽ</Typography>
                        <Typography variant={'subtitle14'}>{overallRating.AvgCleanliness}</Typography>
                    </div>
                    <Progress percentage={50} color={'warning'} />
                </div>
                <div className={'mb-3'}>
                    <div className='flex justify-between items-center mb-0.5'>
                        <Typography variant={'body14'}>Dịch vụ</Typography>
                        <Typography variant={'subtitle14'}>{overallRating.AvgService}</Typography>
                    </div>
                    <Progress percentage={50} color={'warning'} />
                </div>
                <div className={'mb-3'}>
                    <div className='flex justify-between items-center mb-0.5'>
                        <Typography variant={'body14'}>Giá trị</Typography>
                        <Typography variant={'subtitle14'}>{overallRating.AvgValuable}</Typography>
                    </div>
                    <Progress percentage={50} color={'warning'} />
                </div>
            </>
        );
    };

    return (
        <>
            <div className={'flex items-center border-b border-grey-300 mb-4'}>
                <div className='basis-3/4'>
                    <Typography htmlTag={'h5'} variant={'h5'}>
                        {isPreviewPage && !name ? 'Tên cơ sở lưu trú' : name}
                    </Typography>
                    <div className='mt-1 mb-4'>
                        <StarRated />
                    </div>
                    <Typography variant={'body16'} className={'text-grey-700'}>
                        {isPreviewPage && !description ? 'Mô tả chung của cơ sở lưu trú' : description}
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
                        {isPreviewPage && !price ? '0đ' : price}
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
                        {isPreviewPage && !features.length
                            ? 'Chưa có thông tin'
                            : features.map(() => renderFeaturedItem())}
                    </div>
                </div>
                <div className={'border-r border-grey-300 mx-4'} />
                <div className={'flex-1'}>
                    <Typography variant={'subtitle18'} className={'mb-3'}>
                        Tiện ích khác biệt
                    </Typography>
                    <div className={'grid grid-cols-2 gap-x-6 gap-y-3'}>
                        {isPreviewPage && !specialAmenities.length
                            ? 'Chưa có thông tin'
                            : specialAmenities.map(() => renderAmenitiesItem())}
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
                            {totalRating}
                        </Typography>
                        <Typography variant={'subtitle18'}>Khách hàng đánh giá</Typography>
                    </div>
                    {renderProgressRatingItem()}

                    <Typography variant={'caption'} className={'!text-primary'}>
                        Xem {totalReview} đánh giá
                    </Typography>
                </div>
            </div>
        </>
    );
};

GeneralInfo.defaultProps = {};

export default GeneralInfo;
