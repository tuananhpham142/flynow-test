'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { SwiperReact } from '@acme/design-system';

interface IProps {}

const SlideShow: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className={'max-h-[300px]'}>
            <SwiperReact.Swiper
                slidesPerView={4}
                spaceBetween={8}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperReact.SwiperSlide>
                    <Image src={'https://picsum.photos/400/300?random=1'} alt={'image-room'} width={400} height={300} />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image src={'https://picsum.photos/400/300?random=2'} alt={'image-room'} width={400} height={300} />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image src={'https://picsum.photos/400/300?random=3'} alt={'image-room'} width={400} height={300} />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image src={'https://picsum.photos/400/300?random=4'} alt={'image-room'} width={400} height={300} />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image src={'https://picsum.photos/400/300?random=5'} alt={'image-room'} width={400} height={300} />
                </SwiperReact.SwiperSlide>
            </SwiperReact.Swiper>
        </div>
    );
};

SlideShow.defaultProps = {};

export default SlideShow;
