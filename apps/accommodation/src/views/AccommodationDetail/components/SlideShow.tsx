'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { SwiperReact, Button, Skeleton } from '@acme/design-system';
import SlideShowModal from '@/components/Modal/SlideShowModal';
import { MediaItemModel } from '@/types/Media/MediaModel';

interface IProps {
    isPreviewPage?: boolean;
    media: Array<MediaItemModel>;
}

const SlideShow: FC<IProps> = (props) => {
    const { isPreviewPage, media } = props;
    const [visibleModal, setVisibleModal] = useState(false);

    const fakeData = [1, 2, 3, 4, 5];

    const emptyItem = () => (
        <SwiperReact.SwiperSlide className={'w-[400px]'}>
            <Skeleton width={400} height={300} variant={'rounded'}>
                <div className='flex items-center justify-center w-full h-full bg-grey-400 rounded-xl'>
                    <svg
                        className='w-12 h-12 text-grey-300'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 640 512'
                    >
                        <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
                    </svg>
                </div>
            </Skeleton>
        </SwiperReact.SwiperSlide>
    );

    return (
        <div className={'max-h-[300px] container max-w-[1400px] mx-auto my-6 relative'}>
            <Button customClasses={{ root: 'absolute z-[2] left-3 bottom-3' }}>Xem hết hình ảnh</Button>
            <SwiperReact.Swiper
                slidesPerView={'auto'}
                spaceBetween={8}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {isPreviewPage && !media.length
                    ? fakeData.map((i) => emptyItem())
                    : media.map((i) => (
                          <SwiperReact.SwiperSlide className={'w-[400px]'}>
                              <Image
                                  src={`https://picsum.photos/400/300?random=${i}`}
                                  alt={'image-room'}
                                  width={400}
                                  height={300}
                                  className={'rounded-xl'}
                                  onClick={() => setVisibleModal(true)}
                              />
                          </SwiperReact.SwiperSlide>
                      ))}
            </SwiperReact.Swiper>
            <SlideShowModal visible={visibleModal} onClose={() => setVisibleModal(false)} />
        </div>
    );
};

SlideShow.defaultProps = {};

export default SlideShow;
