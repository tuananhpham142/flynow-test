import { Card, Checkbox, Input, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const SpecialRequirementsCard = (props: Props) => {
    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='p-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <Typography htmlTag='h5' variant='subtitle20'>
                            Yêu cầu đặc biệt
                        </Typography>
                        <Typography
                            htmlTag='span'
                            variant='caption'
                            customClasses={{
                                root: 'text-grey-600',
                            }}
                        >
                            Bạn có thể gửi các yêu cầu khác và khách sạn sẽ cố gắng đáp ứng nguyện vọng của bạn. Lưu ý
                            các yêu cầu này không được đảm bảo trước và có thể mất phí.
                        </Typography>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <Checkbox label='Giờ trả phòng' checked />
                            <div className='flex gap-4 items-center pl-7'>
                                <Input
                                    size='lg'
                                    value={'13:00'}
                                    customClasses={{
                                        inputContainer: 'w-[180px]',
                                    }}
                                    endAdornment={
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
                                                d='M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z'
                                                fill='#212B36'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11 12.4142V7C11 6.44772 11.4477 6 12 6Z'
                                                fill='#212B36'
                                            />
                                        </svg>
                                    }
                                />
                                <div className='flex items-center gap-1'>
                                    <Typography
                                        htmlTag='span'
                                        customClasses={{
                                            root: '!text-sm',
                                        }}
                                    >
                                        23/04/2020,
                                    </Typography>
                                    <Typography
                                        htmlTag='span'
                                        customClasses={{
                                            root: '!text-sm text-grey-600',
                                        }}
                                    >
                                        Giờ địa phương (GMT+7)
                                    </Typography>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Checkbox label='Giờ nhận phòng' />
                        </div>

                        <div>
                            <Checkbox label='Khác' />
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default SpecialRequirementsCard;
