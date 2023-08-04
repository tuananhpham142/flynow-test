'use client';

import React, { FC } from 'react';
import EarthSVG from '@/components/Images/EarthSVG';
import { Button, Input, Typography } from '@acme/design-system';

interface IProps {}

const SignUpReceiveEmail: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='bg-grey-200 border border-grey-300 py-8 px-[72px] flex items-center rounded-xl'>
            <EarthSVG />
            <div className='basis-7/12 ml-14'>
                <Typography variant={'subtitle16'} className='text-grey-800'>
                    Đăng ký nhận email
                </Typography>
                <Typography variant={'caption'} className='text-grey-800'>
                    Bạn có thể nhận các ưu đãi riêng hoặc cập nhật các đề xuất du lịch
                </Typography>
                <div className='flex flex-row space-x-2 items-end mt-4'>
                    <div className='basis-8/12'>
                        <Input
                            size={'lg'}
                            fullWidth
                            variant='outline'
                            customClasses={{ inputContainer: '!rounded-lg' }}
                            placeholder='Nhập email'
                        />
                    </div>
                    <div className='basis-4/12'>
                        <Button
                            size='lg'
                            startIcon={
                                <svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <circle cx='12' cy='7' r='4' stroke='currentColor' strokeWidth='2' />
                                    <path
                                        d='M5 19C5 16.7909 6.79086 15 9 15H15C17.2091 15 19 16.7909 19 19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19Z'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                    />
                                </svg>
                            }
                        >
                            Gửi đi
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUpReceiveEmail.defaultProps = {};

export default SignUpReceiveEmail;
