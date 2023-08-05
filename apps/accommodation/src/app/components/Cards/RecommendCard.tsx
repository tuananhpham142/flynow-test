import { Card, Typography } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

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
                    <Image
                        src={'https://picsum.photos/300'}
                        alt='avatar_room'
                        width={300}
                        height={300}
                        className='w-full'
                    />
                    <div className={'p-2 pt-3'}>
                        <Link href={'/slug-id'}>
                            <Typography
                                variant={'subtitle16'}
                                className={'text-primary cursor-pointer text__ellipsis_1'}
                            >
                                Golden Rose Hotel Danang
                            </Typography>
                        </Link>
                        <div className='text-start'>
                            <StarRated />
                        </div>
                        <Typography variant={'caption'}>
                            <i className={'w-4 h-4 mr-1 text__ellipsis_1'}>icon</i>56 Loseby An Hải Bắc, Quận Sơn Trà,
                            Đà Nẵng
                        </Typography>
                        <Typography variant={'caption'} className={'text-primary'}>
                            <i className={'w-4 h-4 mr-1 text__ellipsis_1'}>icon</i>Dùng 7000 điểm để nhận giảm giá 35%
                        </Typography>
                        <div>
                            <Typography variant={'caption'} className={'text-muted'} decoration={'line-through'}>
                                600.000₫
                            </Typography>
                            <Typography variant={'subtitle16'} className={'text-warning'}>
                                470.000₫
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
