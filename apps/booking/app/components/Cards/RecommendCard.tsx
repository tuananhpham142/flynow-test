import { Card, Typography } from '@acme/design-system';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';

interface IProps {}

const RecommendCard: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            variant='border'
            noPadding
            rounded={'lg'}
            body={
                <div>
                    <div className={'relative'}>
                        <Image
                            src={'https://picsum.photos/300'}
                            alt='avatar_room'
                            width={300}
                            height={300}
                            className='w-full'
                        />
                        <div className={'absolute left-1 bottom-6 px-2 bg-danger'}>
                            <Typography htmlTag={'span'} variant={'captionBold'} className={'!text-white'}>
                                -20%
                            </Typography>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-1 p-2 pt-3'}>
                        <Link href={'/detail-services/slug-id'}>
                            <Typography
                                variant={'subtitle16'}
                                className={'text-primary mb-1 cursor-pointer text__ellipsis_1'}
                            >
                                Golden Rose Hotel Danang
                            </Typography>
                        </Link>
                        <div className='text-start'>
                            <StarRated />
                        </div>
                        <Typography variant={'caption'} className={'text__ellipsis_1'}>
                            <i className={'w-4 h-4 mr-1'}>icon</i>56 Loseby An Hải Bắc, Quận Sơn Trà, Đà Nẵng
                        </Typography>
                        <Typography variant={'caption'} className={'text-primary text__ellipsis_1'}>
                            <i className={'w-4 h-4 mr-1'}>icon</i>Dùng 7000 điểm để nhận giảm giá 35%
                        </Typography>
                        <div className={'text-end mt-2'}>
                            <Typography variant={'caption'} className={'!text-grey-500'} decoration={'line-through'}>
                                600.000₫
                            </Typography>
                            <Typography variant={'subtitle16'} className={'text-warning'}>
                                470.000₫
                                <Typography htmlTag={'span'} variant={'caption'}>
                                    / 1đêm
                                </Typography>
                            </Typography>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

RecommendCard.defaultProps = {};

export default RecommendCard;
