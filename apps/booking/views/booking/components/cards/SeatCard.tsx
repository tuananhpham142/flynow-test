import { Button, Card, Divider, Drawer, IconButton, TabPane, Tabs, Typography } from '@acme/design-system';
import React, { useContext, useState } from 'react';
import DeckSeatMap from '../DeckSeatMap';

import { deckSeatMapData } from '../DeckSeatMap/dummyData';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';

type Props = {};

enum FlightItineraryTabs {
    DEPARTURE = 'DEPARTURE',
    RETURN = 'RETURN',
}

const SeatCard = (props: Props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const [itineraryTab, setItineraryTab] = useState<FlightItineraryTabs>(FlightItineraryTabs.DEPARTURE);
    const { sessionData, sessionId, updateSessionData } = useContext(CreateBookingContext);

    // handle toggle drawer
    const toggleDrawer = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e?.preventDefault();
        setShowDrawer((prev) => !prev);
    };

    // handle change itinerary tab
    const handleChangeItineraryTab = (val: FlightItineraryTabs, event: React.SyntheticEvent) => {
        setItineraryTab(val);
    };

    //  const passengerFlightInfo = sessionData?.PassengerInfo;
    const passengerFlightInfo = sessionData?.FlightInfo?.[0]?.PassengerFlightInfo;

    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='p-4 flex items-center justify-between gap-3 card-animation'>
                        <div>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <rect width='40' height='40' rx='20' fill='#4469AF' />
                                <path
                                    d='M9.29802 13.7346L12.3153 26.2346C12.4236 26.6836 12.8254 27 13.2873 27H23.0986C23.4839 27 23.7137 26.5706 23.5 26.25C23.2863 25.9294 23.5161 25.5 23.9014 25.5H30.4773C30.766 25.5 31 25.266 31 24.9773C31 24.707 30.7939 24.4813 30.5246 24.4568L20.5548 23.5504C20.2099 23.5191 19.9058 23.3115 19.7509 23.0018L19.4866 22.4732C19.1832 21.8664 18.5929 21.4548 17.9186 21.3798L15.7206 21.1356C14.9718 21.0524 14.3333 20.5555 14.0688 19.8501L13.4522 18.2058C13.1768 17.4715 13.3561 16.6439 13.9106 16.0894L14.8041 15.1959C14.9295 15.0705 15 14.9003 15 14.723C15 14.5782 14.9531 14.4374 14.8662 14.3216L14.1 13.3C13.7223 12.7964 13.1295 12.5 12.5 12.5H10.2701C9.62288 12.5 9.14615 13.1055 9.29802 13.7346Z'
                                    fill='white'
                                />
                                <path
                                    d='M24 21.5L19.5 21L20.5 23L29.1537 23.9109C29.606 23.9585 30 23.6038 30 23.149C30 22.7745 29.7292 22.4549 29.3598 22.3933L24 21.5Z'
                                    fill='white'
                                />
                                <path
                                    d='M14.2212 18.1828L15 20L18.5 20.5L16.3546 17.0674C16.134 16.7144 15.7471 16.5 15.3309 16.5C14.4642 16.5 13.8798 17.3862 14.2212 18.1828Z'
                                    fill='white'
                                />
                                <path
                                    d='M14 27.5H22V28C22 28.5523 21.5523 29 21 29H15C14.4477 29 14 28.5523 14 28V27.5Z'
                                    fill='white'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M14.5938 12.8906L15.0905 13.6358C15.6194 14.429 15.5148 15.4852 14.8406 16.1594L14.5 16.5C15.6046 16.5 16.5 15.6046 16.5 14.5C16.5 13.3954 15.6046 12.5 14.5 12.5C14.4214 12.5 14.3438 12.5045 14.2676 12.5134C14.3902 12.6237 14.5001 12.7501 14.5938 12.8906Z'
                                    fill='white'
                                />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 flex-1'>
                            <Typography htmlTag='h5' variant='subtitle20'>
                                Chọn chỗ ngồi
                            </Typography>
                            <Typography
                                htmlTag='span'
                                customClasses={{
                                    root: '!text-sm text-grey-500',
                                }}
                            >
                                Thêm hành lý để tiết kiệm chi phí. Hãng hàng không thường tính phí cao hơn khi mua sau
                            </Typography>
                        </div>
                        <div>
                            <IconButton onClick={toggleDrawer} size='lg' variant='text'>
                                <i className='icon icon-plus-circle-line text-2xl text-grey-900' />
                            </IconButton>
                        </div>
                    </div>
                }
            />
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                        <div className='w-[1200px] pt-8 mx-auto h-full'>
                            <Typography variant='h5'>Chọn chỗ ngồi</Typography>
                            <div className='flex pl-[360px] mt-8 border-b border-grey-400'>
                                <Tabs
                                    value={itineraryTab}
                                    onChange={handleChangeItineraryTab}
                                    color={'primary'}
                                    lineSize={4}
                                    customClasses={{
                                        root: 'flex [&>li]:flex-1 w-full',
                                        tab: 'w-full',
                                    }}
                                >
                                    <TabPane
                                        label={
                                            <div className='flex flex-col text-center gap 2'>
                                                <Typography variant='subtitle16'>Chiều đi</Typography>
                                                <div className='flex gap-1 items-center justify-center'>
                                                    <Typography
                                                        variant='caption'
                                                        htmlTag='span'
                                                        className='!text-grey-500'
                                                    >
                                                        Hanoi (HAN){' '}
                                                    </Typography>
                                                    <svg
                                                        width='17'
                                                        height='16'
                                                        viewBox='0 0 17 16'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            fill-rule='evenodd'
                                                            clip-rule='evenodd'
                                                            d='M9.69526 3.86192C9.95561 3.60157 10.3777 3.60157 10.6381 3.86192L14.3047 7.52859C14.5651 7.78893 14.5651 8.21104 14.3047 8.47139L10.6381 12.1381C10.3777 12.3984 9.95561 12.3984 9.69526 12.1381C9.43491 11.8777 9.43491 11.4556 9.69526 11.1953L12.2239 8.66666H3.16667C2.79848 8.66666 2.5 8.36818 2.5 7.99999C2.5 7.6318 2.79848 7.33332 3.16667 7.33332H12.2239L9.69526 4.80473C9.43491 4.54438 9.43491 4.12227 9.69526 3.86192Z'
                                                            fill='#212B36'
                                                        />
                                                    </svg>
                                                    <Typography
                                                        variant='caption'
                                                        htmlTag='span'
                                                        className='!text-grey-500'
                                                    >
                                                        Ho Chi Minh (SGN)
                                                    </Typography>
                                                </div>
                                            </div>
                                        }
                                        value={itineraryTab}
                                        id={FlightItineraryTabs.DEPARTURE}
                                    />
                                    <TabPane
                                        label={
                                            <div className='flex flex-col text-center gap 2'>
                                                <Typography variant='subtitle16'>Chiều về</Typography>
                                                <div className='flex gap-1 items-center justify-center'>
                                                    <Typography
                                                        variant='caption'
                                                        htmlTag='span'
                                                        className='!text-grey-500'
                                                    >
                                                        Hanoi (HAN){' '}
                                                    </Typography>
                                                    <svg
                                                        width='17'
                                                        height='16'
                                                        viewBox='0 0 17 16'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            fill-rule='evenodd'
                                                            clip-rule='evenodd'
                                                            d='M9.69526 3.86192C9.95561 3.60157 10.3777 3.60157 10.6381 3.86192L14.3047 7.52859C14.5651 7.78893 14.5651 8.21104 14.3047 8.47139L10.6381 12.1381C10.3777 12.3984 9.95561 12.3984 9.69526 12.1381C9.43491 11.8777 9.43491 11.4556 9.69526 11.1953L12.2239 8.66666H3.16667C2.79848 8.66666 2.5 8.36818 2.5 7.99999C2.5 7.6318 2.79848 7.33332 3.16667 7.33332H12.2239L9.69526 4.80473C9.43491 4.54438 9.43491 4.12227 9.69526 3.86192Z'
                                                            fill='#212B36'
                                                        />
                                                    </svg>
                                                    <Typography
                                                        variant='caption'
                                                        htmlTag='span'
                                                        className='!text-grey-500'
                                                    >
                                                        Ho Chi Minh (SGN)
                                                    </Typography>
                                                </div>
                                            </div>
                                        }
                                        value={itineraryTab}
                                        id={FlightItineraryTabs.RETURN}
                                        disabled
                                    />
                                </Tabs>
                            </div>
                            <div className='pt-6 flex gap-8  h-[calc(100%-120px)] pb-[125px]'>
                                <div className='flex flex-col gap-3 w-[360px]'>
                                    {passengerFlightInfo?.map((passenger) => (
                                        <>
                                            <div className='col-span-3 flex flex-col gap-0.5'>
                                                <Typography variant='body16'>{passenger.PassengerFullName}</Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-500',
                                                    }}
                                                    variant='caption'
                                                >
                                                    Người lớn
                                                </Typography>
                                                <Typography variant='subtitle16'>182,000₫</Typography>
                                            </div>
                                            <Divider />
                                        </>
                                    ))}
                                </div>

                                <div className='flex-1 overflow-y-scroll pr-3 '>
                                    <DeckSeatMap data={deckSeatMapData} />
                                </div>
                            </div>
                        </div>
                        <div className='fixed bottom-0 left-0 right-0 h-[100px] bg-white shadow-[0px_-4px_12px_0px_rgba(0,_0,_0,_0.1)]'>
                            <div className='w-[996px] flex justify-between items-center mx-auto h-full'>
                                <div className='flex flex-col'>
                                    <Typography variant='body16'>Tổng tiền</Typography>
                                    <Typography
                                        variant='subtitle20'
                                        customClasses={{
                                            root: '!text-warning',
                                        }}
                                    >
                                        546,000₫
                                    </Typography>
                                </div>
                                <div>
                                    <Button
                                        size='lg'
                                        rounded='lg'
                                        customClasses={{
                                            root: 'w-[112px] h-[48px]',
                                        }}
                                    >
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                lockScroll={true}
                isOpen={showDrawer}
                outSideClick={true}
                onClose={(state) => {
                    setShowDrawer(state);
                }}
            />
        </>
    );
};

export default SeatCard;
