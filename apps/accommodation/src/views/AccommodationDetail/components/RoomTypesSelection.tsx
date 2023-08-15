'use client';
import { Typography } from '@acme/design-system';
import React, { FC } from 'react';
import RoomClassCard from '@/components/Cards/RoomClassCard';

interface IProps {}

const RoomTypesSelection: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className={'mt-10'}>
            <div className={'flex justify-between items-end'}>
                <div>
                    <Typography htmlTag={'h5'} variant={'h5'} className='uppercase'>
                        Lựa chọn phòng
                    </Typography>
                    <Typography variant={'body14'}>Giá đã bao gồm VAT</Typography>
                </div>
                <div>
                    <Typography variant={'subtitle16'} className='!text-grey-600 text-end'>
                        Đảm bảo giá tốt nhất
                    </Typography>
                    <Typography variant={'body14'} className='!text-primary text-end'>
                        Dành riêng cho hội viên VIP. Xem chi tiết
                    </Typography>
                </div>
            </div>
            <div className='border-b border-grey-300 mt-4 mb-5' />
            <div>
                <RoomClassCard />
            </div>
        </div>
    );
};

RoomTypesSelection.defaultProps = {};

export default RoomTypesSelection;
