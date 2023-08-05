'use client';
import RecommendCard from '@/app/components/Cards/RecommendCard';
import { SwiperReact, Typography } from '@acme/design-system';
import { FC } from 'react';

interface IProps {}

const Recommend: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
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
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                    <SwiperReact.SwiperSlide>
                        <RecommendCard />
                    </SwiperReact.SwiperSlide>
                </SwiperReact.Swiper>
            </div>
        </div>
    );
};

Recommend.defaultProps = {};

export default Recommend;
