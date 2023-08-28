import React, { FC } from 'react';
import { Input, Button } from '@acme/design-system';

interface IProps {}

const Filters: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='grid grid-cols-4 gap-x-6 gap-y-4 my-6'>
            <Input size={'lg'} fullWidth label='Mã đơn hàng' />
            <Input size={'lg'} fullWidth label='Mã đặt chỗ' />
            <Input size={'lg'} fullWidth label='Khách hàng' />
            <Input size={'lg'} fullWidth label='Khoảng ngày check-in' />
            <Input size={'lg'} fullWidth label='Khoảng ngày check-out' />
            <div className={'flex items-end'}>
                <Button size={'lg'} rounded='lg'>
                    Hiển thị kết quả
                </Button>
            </div>
        </div>
    );
};

Filters.defaultProps = {};

export default Filters;
