'use client';
import React, { FC } from 'react';
import { Typography } from '@acme/design-system';

interface IProps {}

const SalientFeatures: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3 px-3 py-2 h-28 border border-grey-300 rounded-xl bg-white flex flex-col'>
                <i className='w-8 h-8'>icon</i>
                <Typography variant={'captionBold'} className='text-grey-800'>
                    Dễ dàng tìm kiếm
                </Typography>
                <Typography variant={'caption'} className='text-grey-600'>
                    Trên 100 hãng hàng không và hàng triệu khách sạn
                </Typography>
            </div>
            <div className='col-span-3 px-3 py-2 h-28 border border-grey-300 rounded-xl bg-white flex flex-col'>
                <i className='w-8 h-8'>icon</i>
                <Typography variant={'captionBold'} className='text-grey-800'>
                    Thanh toán nhanh chóng, thuận tiện
                </Typography>
                <Typography variant={'caption'} className='text-grey-600'>
                    Trên 100 hãng hàng không và hàng triệu khách sạn
                </Typography>
            </div>
            <div className='col-span-3 px-3 py-2 h-28 border border-grey-300 rounded-xl bg-white flex flex-col'>
                <i className='w-8 h-8'>icon</i>
                <Typography variant={'captionBold'} className='text-grey-800'>
                    Dịch vụ 24/7
                </Typography>
                <Typography variant={'caption'} className='text-grey-600'>
                    Trên 100 hãng hàng không và hàng triệu khách sạn
                </Typography>
            </div>
            <div className='col-span-3 px-3 py-2 h-28 border border-grey-300 rounded-xl bg-white flex flex-col'>
                <i className='w-8 h-8'>icon</i>
                <Typography variant={'captionBold'} className='text-grey-800'>
                    Ưu đãi quanh năm
                </Typography>
                <Typography variant={'caption'} className='text-grey-600'>
                    Trên 100 hãng hàng không và hàng triệu khách sạn
                </Typography>
            </div>
        </div>
    );
};

SalientFeatures.defaultProps = {};

export default SalientFeatures;
