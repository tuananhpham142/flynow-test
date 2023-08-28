'use client';
import RecommendCard from '@/components/Cards/RecommendCard';
import { SwiperReact, Typography, Skeleton } from '@acme/design-system';
import React, { FC } from 'react';
import { AcdDetailResponse } from '@/types/Accommodation/AcdModel';

interface IProps {
    isPreviewPage?: boolean;
}

const Recommend: FC<IProps> = (props) => {
    const { isPreviewPage } = props;

    const recommendRooms: Array<AcdDetailResponse> = [];

    const fakeData = [1, 2, 3, 4];
    const renderEmptyRoom = () => (
        <SwiperReact.SwiperSlide>
            <Skeleton width={'100%'} height={180} variant={'rounded'}>
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
            <div className={'flex flex-col gap-1 p-2 pt-3'}>
                <Typography variant={'subtitle16'} className={'text-primary mb-1 cursor-pointer text__ellipsis_1'}>
                    Tên cơ sở lưu trú
                </Typography>
                <Skeleton width={'100%'} height={10} variant={'rounded'} />
                <Skeleton width={'100%'} height={10} variant={'rounded'} />
                <Skeleton width={'100%'} height={10} variant={'rounded'} />
            </div>
        </SwiperReact.SwiperSlide>
    );

    return (
        <div className='mt-10'>
            <div className={'flex justify-between items-end'}>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Gợi ý chỗ ở
                </Typography>
                <Typography variant={'body16'} className='!text-primary'>
                    Xem thêm
                </Typography>
            </div>
            <div className='border-b border-grey-300 mt-4 mb-5' />
            <div>
                <SwiperReact.Swiper
                    slidesPerView={4}
                    spaceBetween={24}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {isPreviewPage && !recommendRooms.length
                        ? fakeData.map(() => renderEmptyRoom())
                        : recommendRooms.map((room) => (
                              <SwiperReact.SwiperSlide>
                                  <RecommendCard room={room} />
                              </SwiperReact.SwiperSlide>
                          ))}
                </SwiperReact.Swiper>
            </div>
        </div>
    );
};

Recommend.defaultProps = {};

export default Recommend;
