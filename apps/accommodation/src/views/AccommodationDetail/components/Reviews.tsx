'use client';
import { Typography, Button } from '@acme/design-system';
import React, { FC } from 'react';
import ReviewItem from '@acme/pages/components/ReviewAndRating/ReviewItem';

interface IProps {}

const Reviews: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
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
                        9.9
                    </Typography>
                    <div>
                        <Typography variant={'subtitle14'} className={'!text-primary'}>
                            Xuất sắc
                        </Typography>
                        <Typography variant={'caption'} className={'!text-grey-500'}>
                            2345 đánh giá trên dịch vụ
                        </Typography>
                    </div>
                </div>
                {/*review*/}
                <div>
                    <ReviewItem />
                </div>
                <div className={'text-center'}>
                    <Button rounded={'rounded'} className={'mt-4'}>
                        Xem hết đánh giá
                    </Button>
                </div>
            </div>
        </div>
    );
};

Reviews.defaultProps = {};

export default Reviews;
