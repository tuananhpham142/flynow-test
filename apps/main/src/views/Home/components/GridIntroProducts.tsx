'use client';
import React, { FC } from 'react';
import IntroCard from '../../../components/Cards/IntroCard';
import { Button, Typography } from '@acme/design-system';

interface IProps {}

const GridIntroProducts: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <Typography variant={'h4'} htmlTag={'h4'} className='text-grey-800'>
                        Vé máy bay rẻ nhất
                    </Typography>
                    <Typography variant={'body16'} className='text-grey-600'>
                        Flynow luôn cập nhật giá vé tốt nhất
                    </Typography>
                </div>
                <Button variant={'outline'} size='lg'>
                    Xem thêm
                </Button>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <IntroCard />
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <IntroCard />
                    </div>
                    <div>
                        <IntroCard />
                    </div>
                    <div>
                        <IntroCard />
                    </div>
                    <div>
                        <IntroCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

GridIntroProducts.defaultProps = {};

export default GridIntroProducts;
