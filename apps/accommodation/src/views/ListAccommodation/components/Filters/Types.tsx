import React, { FC } from 'react';
import { Checkbox, IconButton, Typography } from '@acme/design-system';

interface IProps {}

const TypeOfAccommodation: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='border-b border-grey-300 pb-2'>
            <div className='flex justify-between'>
                <Typography variant='subtitle16' className={'mb-2 text-grey-800'}>
                    Tiện ích nổi bật
                </Typography>
                <IconButton size='sm' variant='text'>
                    <i className='icon icon-back text-xl' />
                </IconButton>
            </div>
            <div className='flex flex-col gap-1 px-1'>
                <Checkbox label='Bể bơi trong nhà' />
                <Checkbox label='Bể bơi ngoài trời' />
                <Checkbox label='Chỗ đỗ xe' />
            </div>
        </div>
    );
};

TypeOfAccommodation.defaultProps = {};

export default TypeOfAccommodation;
