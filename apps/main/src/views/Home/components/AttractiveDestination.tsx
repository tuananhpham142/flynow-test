'use client';
import VietnamMapSVG from '@/components/Images/VietnamMapSVG';
import React, { FC } from 'react';
import { SwiperReact, Typography, IconButton, Navigation as SwiperNavigation } from '@acme/design-system';
import PlaceCard from '@/components/Cards/PlaceCard';

interface IProps {}

const AttractiveDestination: FC<IProps> = (props) => {
    const {} = props;

    const prevBtnId = 'prev-btn';
    const nextBtnId = 'next-btn';

    const renderSlideNavigationBtn = () => {
        return (
            <>
                <div id={prevBtnId} className={`absolute left-0 top-[45%] -translate-y-1/2 z-[1]`}>
                    <IconButton size='xl' variant={'contained'}>
                        prev
                    </IconButton>
                </div>

                <div id={nextBtnId} className='absolute right-0 top-[45%] -translate-y-1/2 z-[1]'>
                    <IconButton size='xl' variant={'contained'}>
                        next
                    </IconButton>
                </div>
            </>
        );
    };

    return (
        <div className='grid grid-cols-12 gap-6 items-center'>
            <div className='col-span-4'>
                <VietnamMapSVG />
            </div>
            <div className='col-span-8'>
                <div className='mb-8'>
                    <Typography variant={'h4'} htmlTag={'h4'} className='text-grey-800'>
                        Điểm đến hấp dẫn
                    </Typography>
                    <Typography variant={'body16'} className='text-grey-600'>
                        Top 10 điểm đến được lựa chọn nhiều nhất
                    </Typography>
                </div>

                <SwiperReact.Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    slidesOffsetBefore={72}
                    slidesOffsetAfter={72}
                    className='w-full h-full relative'
                    navigation={{
                        prevEl: `#${prevBtnId}`,
                        nextEl: `#${nextBtnId}`,
                        disabledClass: 'opacity-50',
                    }}
                    modules={[SwiperNavigation]}
                >
                    {renderSlideNavigationBtn()}
                    <SwiperReact.SwiperSlide>
                        <PlaceCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <PlaceCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <PlaceCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <PlaceCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <PlaceCard />
                    </SwiperReact.SwiperSlide>
                </SwiperReact.Swiper>
            </div>
        </div>
    );
};

AttractiveDestination.defaultProps = {};

export default AttractiveDestination;
