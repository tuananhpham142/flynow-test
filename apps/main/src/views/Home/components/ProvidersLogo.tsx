'use client';
import { Typography } from '@acme/design-system';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {}

const ProvidersLogo: FC<IProps> = (props) => {
    const {} = props;

    return (
        <>
            <Typography variant={'h4'} htmlTag={'h4'} className='text-grey-800 text-center mb-10'>
                Kết nối 20,000+ nhà cung cấp
            </Typography>
            <div className='flex flex-row justify-center space-x-6'>
                <Image src={'/../public/assets/images/qatar_airway.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/vietnam_airlines.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/air_asia.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/american_airlines.png'} alt={'logo'} width={250} height={68} />
            </div>
            <div className='flex flex-row justify-center space-x-6 my-6'>
                <Image src={'/../public/assets/images/tiger_air.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/air_france.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/qatar_airway.png'} alt={'logo'} width={250} height={68} />
            </div>
            <div className='flex flex-row justify-center space-x-6'>
                <Image src={'/../public/assets/images/american_airlines.png'} alt={'logo'} width={250} height={68} />
                <Image src={'/../public/assets/images/vietnam_airlines.png'} alt={'logo'} width={250} height={68} />
            </div>
        </>
    );
};

ProvidersLogo.defaultProps = {};

export default ProvidersLogo;
