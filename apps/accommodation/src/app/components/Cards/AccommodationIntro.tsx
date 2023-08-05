'use client';
import { Card, Tag, Typography } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import TicketTag from '../Tags/TicketTag';

interface IProps {}

const AccommodationIntro: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            variant='border'
            noPadding
            rounded={'lg'}
            body={
                <div className='flex'>
                    <Image src={'https://picsum.photos/180'} alt='avatar_room' width={180} height={180} />
                    <div className={'p-3 flex justify-between w-full'}>
                        <div className='flex flex-col gap-1'>
                            <Link href={'/slug-id'}>
                                <Typography variant={'subtitle16'} className={'text-primary cursor-pointer'}>
                                    The Luxury Collection Hotels & Resorts
                                </Typography>
                            </Link>

                            <div className='text-start'>
                                <StarRated />
                            </div>
                            <Typography variant={'caption'}>
                                <i className={'w-4 h-4 mr-1'}>icon</i>56 Loseby An Hải Bắc, Quận Sơn Trà, Đà Nẵng
                            </Typography>
                            <Typography variant={'caption'} className={'text-success'}>
                                <i className={'w-4 h-4 mr-1'}>icon</i>Miễn phí huỷ phòng
                            </Typography>
                            <Typography variant={'caption'} className={'text-primary'}>
                                <i className={'w-4 h-4 mr-1'}>icon</i>Dịch vụ đi kèm tính phí
                            </Typography>
                            <div className={'flex flex-row gap-1'}>
                                <Tag>Ưu đãi thành viên</Tag>
                                <Tag>Cặp đôi</Tag>
                                <Tag>Gia đình</Tag>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end items-end gap-0.5'>
                            <TicketTag />
                            <Typography variant={'caption'} className={'text-muted'} decoration={'line-through'}>
                                600.000₫
                            </Typography>
                            <Typography variant={'subtitle16'} className={'text-warning'}>
                                470.000₫
                            </Typography>
                            <Typography variant={'caption'} className={'text-grey-800 text-end'}>
                                (900.000₫ cho 2 đêm <br />
                                <b>+150.000₫</b> dịch vụ đi kèm)
                            </Typography>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

AccommodationIntro.defaultProps = {};

export default AccommodationIntro;
