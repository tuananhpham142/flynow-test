'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { SwiperReact, Button } from '@acme/design-system';
import SlideShowModal from '@/components/Modal/SlideShowModal';

interface IProps {}

const SlideShow: FC<IProps> = (props) => {
    const {} = props;
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <div className={'max-h-[300px] container max-w-[1400px] mx-auto my-6 relative'}>
            <Button customClasses={{ root: 'absolute z-[2] left-3 bottom-3' }}>Xem hết hình ảnh</Button>
            <SwiperReact.Swiper
                slidesPerView={4}
                spaceBetween={8}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperReact.SwiperSlide>
                    <Image
                        src={'https://picsum.photos/400/300?random=1'}
                        alt={'image-room'}
                        width={400}
                        height={300}
                        className={'rounded-xl'}
                        onClick={() => setVisibleModal(true)}
                    />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image
                        src={'https://picsum.photos/400/300?random=2'}
                        alt={'image-room'}
                        width={400}
                        height={300}
                        className={'rounded-xl'}
                        onClick={() => setVisibleModal(true)}
                    />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image
                        src={'https://picsum.photos/400/300?random=3'}
                        alt={'image-room'}
                        width={400}
                        height={300}
                        className={'rounded-xl'}
                        onClick={() => setVisibleModal(true)}
                    />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image
                        src={'https://picsum.photos/400/300?random=4'}
                        alt={'image-room'}
                        width={400}
                        height={300}
                        className={'rounded-xl'}
                        onClick={() => setVisibleModal(true)}
                    />
                </SwiperReact.SwiperSlide>
                <SwiperReact.SwiperSlide>
                    <Image
                        src={'https://picsum.photos/400/300?random=5'}
                        alt={'image-room'}
                        width={400}
                        height={300}
                        className={'rounded-xl'}
                        onClick={() => setVisibleModal(true)}
                    />
                </SwiperReact.SwiperSlide>
            </SwiperReact.Swiper>
            <SlideShowModal visible={visibleModal} onClose={() => setVisibleModal(false)} />
        </div>
    );
};

SlideShow.defaultProps = {};

export default SlideShow;
