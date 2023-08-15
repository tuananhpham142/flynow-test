/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client';
import { FreeMode, Modal, Navigation, SwiperReact, Thumbs } from '@acme/design-system';
import { FC, useState } from 'react';

interface IProps {
    visible: boolean;
    onClose: (visible: boolean) => void;
}

const SlideShowModal: FC<IProps> = (props) => {
    const { visible, onClose } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <Modal
            isOpen={visible}
            setIsOpen={(visible) => {
                onClose(visible);
            }}
            body={
                <div className={'w-screen h-screen bg-white p-4'}>
                    <SwiperReact.Swiper
                        // style={{
                        //     '--swiper-navigation-color': '#000',
                        //     '--swiper-pagination-color': '#000',
                        // }}
                        loop={true}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='h-3/4 w-2/3'
                    >
                        <SwiperReact.SwiperSlide>
                            <div className='h-full w-4/5 mx-auto'>
                                <img
                                    src='https://swiperjs.com/demos/images/nature-1.jpg'
                                    className={'h-full w-full object-cover'}
                                />
                            </div>
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <div className='h-full w-4/5 mx-auto'>
                                <img
                                    src='https://swiperjs.com/demos/images/nature-2.jpg'
                                    className={'h-full w-full object-cover'}
                                />
                            </div>
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <div className='h-full w-4/5 mx-auto'>
                                <img
                                    src='https://swiperjs.com/demos/images/nature-3.jpg'
                                    className={'h-full w-full object-cover'}
                                />
                            </div>
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <div className='h-full w-4/5 mx-auto'>
                                <img
                                    src='https://swiperjs.com/demos/images/nature-4.jpg'
                                    className={'h-full w-full object-cover'}
                                />
                            </div>
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <div className='h-full w-4/5 mx-auto'>
                                <img
                                    src='https://swiperjs.com/demos/images/nature-5.jpg'
                                    className={'h-full w-full object-cover'}
                                />
                            </div>
                        </SwiperReact.SwiperSlide>
                    </SwiperReact.Swiper>
                    <SwiperReact.Swiper
                        onSwiper={(swiper) => setThumbsSwiper(swiper)}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='slideModal h-1/5 py-2'
                    >
                        <SwiperReact.SwiperSlide>
                            <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
                        </SwiperReact.SwiperSlide>
                        <SwiperReact.SwiperSlide>
                            <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
                        </SwiperReact.SwiperSlide>
                    </SwiperReact.Swiper>
                </div>
            }
        />
    );
};

SlideShowModal.defaultProps = {};

export default SlideShowModal;
