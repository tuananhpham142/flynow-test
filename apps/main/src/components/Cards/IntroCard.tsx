import React, { FC } from 'react';
import { Card, Typography } from '@acme/design-system';
import Image from 'next/image';

interface IProps {}

const IntroCard: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            noPadding
            rounded={'xl'}
            shadow={'shadow-none'}
            customClasses={{ root: 'overflow-hidden' }}
            variant='border'
            body={
                <div className='flex flex-col h-full'>
                    <Image
                        src={'https://picsum.photos/300'}
                        alt={'X'}
                        width={300}
                        height={300}
                        className={'object-cover w-full flex-1'}
                    />
                    <div className='p-3 bg-grey-200'>
                        <Typography variant={'captionBold'}>HO Chi Minh - Vinh City</Typography>
                        <Typography variant={'caption'}>Thời gian khởi hành: 01/02/2023</Typography>
                        <div className='mt-2'>
                            <Typography htmlTag='span' variant={'body20'} className='text-warning'>
                                299.000₫/
                            </Typography>
                            <Typography htmlTag='span' variant={'caption'} className='text-warning'>
                                chiều
                            </Typography>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

IntroCard.defaultProps = {};

export default IntroCard;
