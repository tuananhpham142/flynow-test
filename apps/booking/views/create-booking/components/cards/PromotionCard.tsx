import { Button, Card, Input, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const PromotionCard = (props: Props) => {
    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='flex flex-col gap-4 p-4'>
                    <div className='flex items-center gap-1'>
                        <Typography htmlTag='h5' variant='subtitle20'>
                            Ưu đãi
                        </Typography>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M8 6C8 5.44772 8.44772 5 9 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H9C8.44772 7 8 6.55228 8 6ZM8 12C8 11.4477 8.44772 11 9 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H9C8.44772 13 8 12.5523 8 12ZM8 18C8 17.4477 8.44772 17 9 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H9C8.44772 19 8 18.5523 8 18Z'
                                fill='#212B36'
                            />
                            <path
                                d='M6 6C6 6.82843 5.32843 7.5 4.5 7.5C3.67157 7.5 3 6.82843 3 6C3 5.17157 3.67157 4.5 4.5 4.5C5.32843 4.5 6 5.17157 6 6Z'
                                fill='#4469AF'
                            />
                            <path
                                d='M6 12C6 12.8284 5.32843 13.5 4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12Z'
                                fill='#4469AF'
                            />
                            <path
                                d='M6 18C6 18.8284 5.32843 19.5 4.5 19.5C3.67157 19.5 3 18.8284 3 18C3 17.1716 3.67157 16.5 4.5 16.5C5.32843 16.5 6 17.1716 6 18Z'
                                fill='#4469AF'
                            />
                        </svg>
                    </div>

                    <div className='flex items-end gap-6'>
                        <div className='flex-1'>
                            <Input label='Mã ưu đãi' placeholder='Nhập' fullWidth size='lg' />
                        </div>
                        <div className='flex-1'>
                            <Button size='lg' disabled>
                                Áp dụng
                            </Button>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default PromotionCard;
