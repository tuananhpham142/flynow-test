'use client';
import React, { FC } from 'react';
import { SwiperReact, Pagination as SwiperPagination, Autoplay } from '@acme/design-system';
import Image from 'next/image';

interface IProps {}

const AdsBanner: FC<IProps> = (props) => {
    const {} = props;

    return (
        <SwiperReact.Swiper
            className='w-full h-full relative'
            loop
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[SwiperPagination, Autoplay]}
        >
            <SwiperReact.SwiperSlide>
                <Image src={'https://picsum.photos/1440/350?random=1'} alt={'banner'} width={1440} height={350} />
            </SwiperReact.SwiperSlide>
            <SwiperReact.SwiperSlide>
                <Image src={'https://picsum.photos/1440/350?random=2'} alt={'banner'} width={1440} height={350} />
            </SwiperReact.SwiperSlide>
            <SwiperReact.SwiperSlide>
                <Image src={'https://picsum.photos/1440/350?random=3'} alt={'banner'} width={1440} height={350} />
            </SwiperReact.SwiperSlide>
        </SwiperReact.Swiper>
    );
};

AdsBanner.defaultProps = {};

export default AdsBanner;
