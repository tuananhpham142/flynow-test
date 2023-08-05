'use client';
import { Typography, Checkbox, IconButton } from '@acme/design-system';
import React, { FC } from 'react';

interface IProps {}

const Area: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='border-b border-grey-300 pb-2'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16' className={'mb-2 text-grey-800'}>
                    Khu vực
                </Typography>
                <IconButton size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <div className='flex flex-col gap-1 px-1'>
                <Checkbox label='Hoàn Kiếm (12)' />
                <Checkbox label='Hai Bà Trưng (6)' />
                <Checkbox label='Cầu Giấy (2)' />
            </div>
        </div>
    );
};

Area.defaultProps = {};

export default Area;
