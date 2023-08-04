import { Card, Radio, RadioGroup, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const BedSelectCard = (props: Props) => {
    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='p-4 flex flex-col gap-4'>
                    <Typography htmlTag='h5' variant='subtitle20'>
                        Chọn loại giường
                    </Typography>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                htmlTag='span'
                                customClasses={{
                                    root: '!text-sm font-bold text-primary-dark',
                                }}
                            >
                                Phòng 1: Deluxe Family
                            </Typography>
                            <div className='pl-4'>
                                <RadioGroup name='bed-1'>
                                    <Radio label='1 giường đôi' />
                                    <Radio label='2 giường đơn' />
                                    <Radio label='Giường phụ' />
                                </RadioGroup>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Typography
                                htmlTag='span'
                                customClasses={{
                                    root: '!text-sm font-bold text-primary-dark',
                                }}
                            >
                                Phòng 2: Deluxe king bed view lake
                            </Typography>
                            <div className='pl-4'>
                                <RadioGroup name='bed-2'>
                                    <Radio label='1 giường đôi' />
                                    <Radio label='2 giường đơn' />
                                    <Radio label='Giường phụ' />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-1'>
                        <div>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M18.7824 16.1068L13.7896 6.10359C13.053 4.62783 10.9472 4.62781 10.2106 6.10358L5.21763 16.1068C4.55392 17.4366 5.52095 19 7.0071 19H16.9929C18.479 19 19.4461 17.4366 18.7824 16.1068ZM15.579 5.21043C14.1059 2.25889 9.89432 2.25888 8.42112 5.2104L3.42816 15.2136C2.10074 17.8731 4.03478 21 7.0071 21H16.9929C19.9652 21 21.8992 17.8731 20.5719 15.2137L15.579 5.21043Z'
                                    fill='#FF0000'
                                />
                                <path
                                    d='M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8Z'
                                    fill='#FF0000'
                                />
                                <path
                                    d='M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z'
                                    fill='#FF0000'
                                />
                            </svg>
                        </div>

                        <Typography htmlTag='span' variant='caption'>
                            Yêu cầu về loại giường có thể được đáp ứng hoặc không tùy vào điều kiện của chỗ nghỉ.Chúng
                            tôi sẽ liên hệ với Quý khách trong trường hợp Chỗ nghỉ không thể đáp ứng Loại giường này.
                        </Typography>
                    </div>
                </div>
            }
        />
    );
};

export default BedSelectCard;
