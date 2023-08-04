'use client';
import React, { FC } from 'react';
import { Button, Input, Typography } from '@acme/design-system';
import AgentSystemSVG from '@/components/Images/AgentSystemSVG';

interface IProps {}

const JoinSystem: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className={'grid grid-cols-12 gap-6 items-start bg-primary-lighter p-20'}>
            <div className='col-span-6'>
                <div className='mb-10'>
                    <Typography variant={'h4'} htmlTag={'h4'} className='text-grey-800'>
                        Tham gia hệ thống đại lý
                    </Typography>
                    <Typography variant={'body16'} className='text-grey-600'>
                        Chính sách chiết khấu hấp dẫn và các chương trình khuyến mãi kích cầu gia tăng doanh thu cho Đối
                        tác diễn ra hàng tuần.
                    </Typography>
                </div>
                <div className='flex flex-row space-x-4 items-end'>
                    <div className='basis-4/6'>
                        <Input
                            label='Nhập số điện thoại'
                            placeholder='Ví dụ: 0987xxxx123'
                            fullWidth
                            variant='outline'
                            customClasses={{ inputContainer: '!rounded-lg !h-14' }}
                        />
                    </div>
                    <div className='basis-2/6'>
                        <Button size='xl' customClasses={{ root: '!h-14' }}>
                            Gửi mã OTP
                        </Button>
                    </div>
                </div>
            </div>
            <div className='col-span-6'>
                <AgentSystemSVG />
            </div>
        </div>
    );
};

JoinSystem.defaultProps = {};

export default JoinSystem;
