'use client';
import { Typography, Button } from '@acme/design-system';
import React, { FC } from 'react';
import ReviewItem from '@acme/pages/components/ReviewAndRating/ReviewItem';
import { ReviewItemModel } from '@/types/Review/ReviewModel';

interface IProps {
    reviews: Array<ReviewItemModel>;
    totalRating: number;
    totalRatingText: string;
    totalReview: number;
}

const Reviews: FC<IProps> = (props) => {
    const { reviews, totalReview, totalRating, totalRatingText } = props;

    return (
        <div className='mt-10'>
            <Typography htmlTag={'h5'} variant={'h5'}>
                Đánh giá
            </Typography>
            <div className='border-b border-grey-300 my-4' />
            {/*total*/}
            <div className={'max-w-[845px]'}>
                <div className={'flex items-center gap-2 mb-3'}>
                    <Typography
                        htmlTag={'span'}
                        variant={'subtitle20'}
                        className={'rounded bg-blue px-2 py-2.5 text-white'}
                    >
                        {totalRating}
                    </Typography>
                    <div>
                        <Typography variant={'subtitle14'} className={'!text-primary'}>
                            {totalRatingText || 'Trung bình'}
                        </Typography>
                        <Typography variant={'caption'} className={'!text-grey-500'}>
                            {totalReview} đánh giá trên dịch vụ
                        </Typography>
                    </div>
                </div>
                {/*review*/}
                <div>{reviews.length ? reviews.map(() => <ReviewItem />) : 'Chưa có đánh giá'}</div>
                {reviews.length ? (
                    <div className={'text-center'}>
                        <Button rounded={'rounded'} className={'mt-4'}>
                            Xem hết đánh giá
                        </Button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

Reviews.defaultProps = {};

export default Reviews;
