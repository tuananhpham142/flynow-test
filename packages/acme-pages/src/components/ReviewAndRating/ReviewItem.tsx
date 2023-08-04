import React, { FC } from 'react';
import { Avatar, Typography } from '@acme/design-system';
import StarRated from './StarRated';

interface IProps {}

const ReviewItem: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className={'flex flex-col gap-2'}>
            <div className='flex gap-2'>
                <Avatar src={'https://picsum.photos/100'} size={'40'} variant={'circle'} />
                <div>
                    <Typography variant={'subtitle14'}>Luong Manh Chu</Typography>
                    <div className='flex items-center gap-2'>
                        <StarRated />
                        <Typography htmlTag={'span'} variant={'caption'}>
                            12/01/2019
                        </Typography>
                    </div>
                </div>
            </div>
            <Typography variant={'body14'} className={'!text-grey-600'}>
                Hi we are Chloe & Leo, a young couple working in Creative & Communication industry. Last 2 months one of
                my friend from England came to visit me, and he told me he loves so much the vibe where I live in. Xem
                thêm
            </Typography>
        </div>
    );
};

ReviewItem.defaultProps = {};

export default ReviewItem;
