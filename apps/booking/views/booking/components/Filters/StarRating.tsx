'use client';
import React, { FC } from 'react';
import { Chip, Typography } from '@acme/design-system';

interface IProps {}

const StarRating: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='border-b border-grey-300 pb-2'>
            <Typography variant='subtitle16' className={'mb-2 text-grey-800'}>
                Hạng sao
            </Typography>
            <div className='flex flex-wrap gap-1'>
                <Chip suffix={<i>icon</i>}>1</Chip>
                <Chip suffix={<i>icon</i>}>2</Chip>
                <Chip suffix={<i>icon</i>}>3</Chip>
                <Chip suffix={<i>icon</i>} checked>
                    4
                </Chip>
                <Chip suffix={<i>icon</i>} checked>
                    5
                </Chip>
            </div>
        </div>
    );
};

StarRating.defaultProps = {};

export default StarRating;
