import { Button, Input, clsx } from '@acme/design-system';
import React from 'react';

type Props = {
    isCollapsed: boolean;
};

const FlightBookingFilter = (props: Props) => {
    const { isCollapsed } = props;

    const filerWrapperClasses = clsx(
        isCollapsed ? 'h-[0px]' : 'h-[152px]',
        'grid grid-cols-3 gap-x-6 gap-y-4 overflow-hidden transition-all duration-100',
    );
    return (
        <div className={filerWrapperClasses}>
            <Input size={'lg'} fullWidth label='Mã đặt chỗ' placeholder='Nhập' />
            <Input size={'lg'} fullWidth label='Mã đơn hàng' placeholder='Nhập' />
            <Input size={'lg'} fullWidth label='Khách hàng' placeholder='Nhập' />
            <Input size={'lg'} fullWidth label='Khoảng ngày khởi hành' placeholder='dd/mm/yyyy' />
            <Input size={'lg'} fullWidth label='Khoảng ngày đặt' placeholder='dd/mm/yyyy' />
            <div className={'flex items-end'}>
                <Button size={'lg'} rounded='lg'>
                    Hiển thị kết quả
                </Button>
            </div>
        </div>
    );
};

export default FlightBookingFilter;
