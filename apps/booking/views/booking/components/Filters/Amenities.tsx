import React, { FC } from 'react';
import { Checkbox, IconButton, Typography } from '@acme/design-system';

interface IProps {}

const Amenities: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='border-b border-grey-300 pb-2'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16' className={'mb-2 text-grey-800'}>
                    Hình thức
                </Typography>
                <IconButton size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <div className='flex flex-col gap-1 px-1'>
                <Checkbox label='Khách sạn' />
                <Checkbox label='Resort' />
                <Checkbox label='Căn hộ/Villa' />
            </div>
        </div>
    );
};

Amenities.defaultProps = {};

export default Amenities;
