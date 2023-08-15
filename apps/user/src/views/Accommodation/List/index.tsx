'use client';
import React, { FC } from 'react';
import OrderPlacedCard from '@/components/Cards/OrderPlacedCard';
import { Typography, Button, Chip } from '@acme/design-system';

interface IProps {}

const ListBookingPage: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <div className={'flex justify-between items-end'}>
                <Typography htmlTag={'h5'} variant={'h5'} className='uppercase'>
                    Quản lý đơn phòng
                </Typography>
                <Button variant={'text'} endIcon={<i className='icon icon-caret-down text-[16px]' />}>
                    Lọc đơn hàng
                </Button>
            </div>
            <div className='border-b border-grey-300 mt-4 mb-3' />
            <div className='flex items-center gap-1 mb-4'>
                <Chip checked>Tất cả</Chip>
                <Chip>Đang giữ</Chip>
                <Chip>Đang tiến hành</Chip>
                <Chip>Thành công</Chip>
                <Chip>Thất bại</Chip>
            </div>
            <div className='flex flex-col gap-4'>
                <OrderPlacedCard />
                <OrderPlacedCard />
                <OrderPlacedCard />
            </div>
        </div>
    );
};

ListBookingPage.defaultProps = {};

export default ListBookingPage;
