import React, { FC } from 'react';
import { Card, Typography, Tag, Button } from '@acme/design-system';
import Image from 'next/image';
import Link from 'next/link';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';

interface IProps {}

const OrderPlacedCard: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            variant='border'
            noPadding
            rounded={'lg'}
            body={
                <div className='flex'>
                    <Image src={'https://picsum.photos/180/220'} alt='avatar_room' width={180} height={220} />
                    <div className={'p-3 pl-6 flex gap-8 w-full'}>
                        <div className='basis-3/6 flex flex-col gap-1'>
                            <Link href={'/[slug]-services/slug-id'}>
                                <Typography variant={'subtitle16'} className={'!text-primary cursor-pointer'}>
                                    The Luxury Collection Hotels & Resorts
                                </Typography>
                            </Link>
                            <div className='text-start'>
                                <StarRated />
                            </div>
                            <Typography variant={'caption'}>
                                <i className={'w-4 h-4 mr-1'}>icon</i>56 Loseby An Hải Bắc, Quận Sơn Trà, Đà Nẵng
                            </Typography>
                            <div className='flex gap-2 items-center my-3'>
                                <Tag variant={'outline'} color={'warning'}>
                                    Đang giữ
                                </Tag>
                                <Tag variant={'solid'} color={'success'}>
                                    Thời hạn thanh toán: 11h34
                                </Tag>
                            </div>
                            <Typography variant={'body14'} className={'text-success mb-2'}>
                                Số lượng khách: 3 người lớn, 2 trẻ em, 1 em bé
                            </Typography>
                            <Typography variant={'body14'}>Lịch trình: 02/03/2023 - 08/03/2023</Typography>
                        </div>
                        <div className={'basis-2/6 flex gap-2'}>
                            <div className='flex flex-col gap-3'>
                                <Typography variant={'body14'}>Mã đơn hàng:</Typography>
                                <Typography variant={'body14'}>Mã đặt phòng:</Typography>
                                <Typography variant={'body14'}>Ngày đặt:</Typography>
                                <Typography variant={'body14'}>Khách hàng:</Typography>
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
                                <Typography variant={'body14'}>02/03/2023, 12:45:21</Typography>
                                <Typography variant={'body14'}>Nguyễn Hà Anh Tuấn</Typography>
                                <Typography variant={'body14'} className='!text-warning'>
                                    12.000.000₫
                                </Typography>
                                <Typography variant={'body14'} className='!text-danger'>
                                    Chờ thanh toán
                                </Typography>
                            </div>
                        </div>
                        <div className={'basis-1/6 text-end'}>
                            <Button variant={'text'} endIcon={<i className='icon icon-caret-right text-[16px]' />}>
                                Xem chi tiết
                            </Button>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

OrderPlacedCard.defaultProps = {};

export default OrderPlacedCard;
