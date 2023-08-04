'use client';

import { Chip, Typography } from '@acme/design-system';
import React, { FC } from 'react';

interface IProps {}

const PriceRange: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className={'border-b border-grey-300 pb-2'}>
            <Typography variant='subtitle16' className={'mb-2 text-grey-800'}>
                Khoảng giá
            </Typography>
            <div className='flex flex-wrap gap-1'>
                <Chip checked>0₫ - 1,000,000₫</Chip>
                <Chip>1,000,000₫ - 2,000,000₫</Chip>
                <Chip>2,000,000₫ - 3,000,000₫</Chip>
                <Chip>3,000,000₫ - 4,000,000₫</Chip>
            </div>
        </div>
    );
};

PriceRange.defaultProps = {};

export default PriceRange;
