import React, { FC } from 'react';
import { Card, Typography } from '@acme/design-system';
import Image from 'next/image';

interface IProps {}

const PlaceCard: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <Image
                src={'https://picsum.photos/300'}
                alt={'X'}
                width={282}
                height={282}
                className={'object-cover w-full rounded-xl'}
            />
            <Typography variant={'subtitle20'} className='text-primary mt-2'>
                Hà Nội
            </Typography>
        </div>
    );
};

PlaceCard.defaultProps = {};

export default PlaceCard;
