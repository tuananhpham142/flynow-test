// components
import React, { useContext, useEffect, useState } from 'react';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import { Card, IconButton, Typography, Drawer, Divider, Button, Tabs, TabPane, TabContent } from '@acme/design-system';
import { FormProvider, Controller, useFormContext } from '@acme/design-system/ReactHookForm';

// hooks
import { useForm, useFieldArray } from '@acme/design-system/ReactHookForm';

// utils
import { toThousandSeparator } from '@acme/utils';

// services
import { useGetBaggadeQuery } from 'services/flight/getBaggades';
import { useUpdatePassengerBaggageMutation } from 'services/flight';

// types
import type { BaggageItem } from 'models/Flight/FlightModel';
import Logo from '@acme/pages/components/Logo';

type Props = {};

type PassengersBaggage = { PassengerIndex: number; Baggage: string; PassengerFullName: string; Price: number };

enum BaggageTabs {
    DEPARTURE_BAGGAGE = 'DEPARTURE_BAGGAGE',
    RETURN_BAGGAGE = 'RETURN_BAGGAGE',
}
type PassengerBaggageForm = {
    DepartureBaggage: PassengersBaggage[];
    ReturnBaggage: PassengersBaggage[];
};

// components
const BaggageOption = ({
    isSelected = false,
    option,
    onSelect,
}: {
    isSelected?: boolean;
    option: BaggageItem;
    onSelect: (option: BaggageItem) => void;
}) => {
    const colors = isSelected ? 'bg-warning !text-white' : 'bg-white text-grey-900 hover:bg-grey-200';

    return (
        <div
            onClick={() => onSelect(option)}
            className={`flex flex-col items-center justify-center rounded-lg border border-grey-400 w-fit h-fit cursor-pointer ${colors} px-3.5 py-4`}
        >
            <Typography
                variant='subtitle14'
                customClasses={{
                    root: isSelected ? '!text-white' : '',
                }}
                className='whitespace-nowrap'
                htmlTag='span'
            >
                {option.Name}
            </Typography>
            <Typography
                customClasses={{
                    root: isSelected ? '!text-white' : '',
                }}
                variant='body16'
            >
                {option.Price.toLocaleString('vi-VN', {}) + 'đ'}
            </Typography>
        </div>
    );
};

const BaggageCard: React.FC<Props> = (props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);
    const [baggageTab, setBaggageTab] = useState<BaggageTabs>(BaggageTabs.DEPARTURE_BAGGAGE);

    const { sessionData, sessionId, updateSessionData } = useContext(CreateBookingContext);

    const methods = useForm<PassengerBaggageForm>({
        defaultValues: {
            DepartureBaggage: sessionData?.FlightInfo[0]?.PassengerFlightInfo?.map((passenger) => {
                return {
                    PassengerFullName: passenger.PassengerFullName,
                    PassengerIndex: passenger.PassengerIndex,
                    Baggage: passenger?.FlightInfo[0]?.Baggage,
                    Price: passenger?.FlightInfo[0]?.Price,
                };
            }),
            ReturnBaggage: sessionData?.FlightInfo[0]?.PassengerFlightInfo?.map((passenger) => {
                return {
                    PassengerFullName: passenger.PassengerFullName,
                    PassengerIndex: passenger.PassengerIndex,
                    Baggage: passenger?.FlightInfo[1]?.Baggage,
                    Price: passenger?.FlightInfo[1]?.Price,
                };
            }),
        },
    });
    const { handleSubmit, watch } = methods;

    const toggleDrawer = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e?.preventDefault();
        setShowDrawer((prev) => !prev);
    };

    const { trigger: updatePassengerBaggage, isMutating: isUpdatePassengerBaggage } =
        useUpdatePassengerBaggageMutation();

    //handles
    const handlerSubmitBaggadeAddOn = async (data: PassengerBaggageForm) => {
        try {
            const { DepartureBaggage, ReturnBaggage } = data;
            if (isUpdatePassengerBaggage) return;
            if (!sessionId) return;

            if (DepartureBaggage) {
                const departurePassengerBaggage = DepartureBaggage.map((passenger) => {
                    return {
                        PassengerIndex: passenger.PassengerIndex,
                        Baggage: passenger.Baggage,
                        Price: passenger.Price,
                        FlightNumber: sessionData?.FlightInfoSelected[0]?.FlightNumber || '',
                    };
                });

                updatePassengerBaggage({
                    AId: '3531',
                    PassengerFlightInfo: departurePassengerBaggage,
                    SessionId: sessionId,
                }).then((res) => {
                    if (res.ok && res.status === 200) {
                        if (ReturnBaggage) {
                            const returnPassengerBaggage = ReturnBaggage.map((passenger) => {
                                return {
                                    PassengerIndex: passenger.PassengerIndex,
                                    Baggage: passenger.Baggage,
                                    Price: passenger.Price,
                                    FlightNumber: sessionData?.FlightInfoSelected[1]?.FlightNumber || '',
                                };
                            });

                            updatePassengerBaggage({
                                AId: '3531',
                                PassengerFlightInfo: returnPassengerBaggage,
                                SessionId: sessionId,
                            }).then((res) => {
                                if (res.data?.Data) {
                                    updateSessionData(res.data.Data);
                                    toggleDrawer();
                                }
                            });
                        } else {
                            if (res.data?.Data) {
                                updateSessionData(res.data.Data);
                            }
                        }
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeBaggageTab = (val: BaggageTabs, event: React.SyntheticEvent) => {
        setBaggageTab(val);
    };

    const passengerFlightInfo = sessionData?.FlightInfo?.[0]?.PassengerFlightInfo;

    const isRenderPassengerBaggageSelected =
        passengerFlightInfo?.some((passenger) => {
            return passenger?.FlightInfo?.[0]?.Baggage || passenger?.FlightInfo?.[1]?.Baggage;
        }) && passengerFlightInfo;

    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='flex flex-col p-4 card-animation'>
                        <div className=' flex items-center justify-between gap-3'>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <rect width='40' height='40' rx='20' fill='#4469AF' />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M12 15C10.8954 15 10 15.8954 10 17V27C10 28.1046 10.8954 29 12 29H14V15H12ZM16 15V29H24V15H16ZM26 15V29H28C29.1046 29 30 28.1046 30 27V17C30 15.8954 29.1046 15 28 15H26Z'
                                    fill='white'
                                />
                                <path
                                    d='M25 16V14C25 12.8954 24.1046 12 23 12H17C15.8954 12 15 12.8954 15 14V16'
                                    stroke='white'
                                    stroke-width='2'
                                />
                            </svg>
                            <div className='flex flex-col gap-1 flex-1'>
                                <Typography htmlTag='h5' variant='subtitle20'>
                                    Mua thêm hành lý
                                </Typography>
                                {!isRenderPassengerBaggageSelected && (
                                    <Typography
                                        htmlTag='span'
                                        customClasses={{
                                            root: '!text-sm text-grey-500',
                                        }}
                                    >
                                        Thêm hành lý để tiết kiệm chi phí. Hãng hàng không thường tính phí cao hơn khi
                                        mua sau
                                    </Typography>
                                )}
                            </div>
                            <div onClick={toggleDrawer} className='cursor-pointer'>
                                {passengerFlightInfo && isRenderPassengerBaggageSelected ? (
                                    <div className='w-32 h-10 flex gap-1 items-center justify-end'>
                                        <Typography
                                            variant='subtitle16'
                                            customClasses={{
                                                root: '!text-warning',
                                            }}
                                        >
                                            {toThousandSeparator(
                                                Number(
                                                    passengerFlightInfo.reduce((total, passenger) => {
                                                        return (
                                                            total +
                                                            passenger.FlightInfo[0].Price +
                                                            passenger?.FlightInfo?.[1]?.Price
                                                        );
                                                    }, 0),
                                                ),
                                            ) + 'đ'}
                                        </Typography>
                                        <svg
                                            width='40'
                                            height='40'
                                            viewBox='0 0 40 40'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <rect width='40' height='40' rx='20' fill='white' />
                                            <path
                                                d='M12 29C12 28.4477 12.4477 28 13 28H27C27.5523 28 28 28.4477 28 29C28 29.5523 27.5523 30 27 30H13C12.4477 30 12 29.5523 12 29Z'
                                                fill='#4469AF'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M20.4118 11.1742C21.9739 9.61216 24.5066 9.61217 26.0687 11.1743L26.826 11.9316C28.3881 13.4937 28.3881 16.0264 26.826 17.5885L19.9199 24.4945C19.6425 24.772 19.2896 24.9617 18.9051 25.04L14.4016 25.9579C12.997 26.2442 11.7562 25.0034 12.0424 23.5989L12.9602 19.0951C13.0386 18.7107 13.2283 18.3577 13.5057 18.0803L20.4118 11.1742ZM24.6545 12.5885C23.8734 11.8074 22.6071 11.8074 21.826 12.5885L21.4144 13.0001L25.0002 16.5859L25.4118 16.1743C26.1929 15.3932 26.1929 14.1269 25.4118 13.3458L24.6545 12.5885ZM16.4144 18.0001L20.0002 14.4143L23.586 18.0001L20.0002 21.5859L16.4144 18.0001ZM15.0002 19.4143L14.9199 19.4945L14.0021 23.9982L18.5057 23.0803L18.5859 23.0001L15.0002 19.4143Z'
                                                fill='#4469AF'
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <IconButton size='lg' variant='text'>
                                        <i className='icon icon-plus-circle-line text-2xl text-grey-900' />
                                    </IconButton>
                                )}
                            </div>
                        </div>
                        {passengerFlightInfo && (
                            <div className='pl-12'>
                                {isRenderPassengerBaggageSelected && (
                                    <>
                                        <Divider />
                                        <div className='pt-2 flex gap-14'>
                                            <div className='flex-1 flex flex-col gap-2'>
                                                <div className='flex flex-col gap-2'>
                                                    {passengerFlightInfo?.map((passenger, index) => {
                                                        const baggageName = passenger.FlightInfo[0].Baggage;
                                                        const baggagePrice = passenger.FlightInfo[0].Price;

                                                        if (!baggageName) return null;
                                                        return (
                                                            <>
                                                                {index === 0 && (
                                                                    <div className='flex items-center gap-2'>
                                                                        <Typography variant='subtitle16'>
                                                                            {
                                                                                sessionData.FlightInfoSelected[0]
                                                                                    ?.StartPoint
                                                                            }
                                                                        </Typography>
                                                                        <svg
                                                                            width='16'
                                                                            height='16'
                                                                            viewBox='0 0 16 16'
                                                                            fill='none'
                                                                            xmlns='http://www.w3.org/2000/svg'
                                                                        >
                                                                            <path
                                                                                d='M5.19341 14.6667L6.45675 14.6667L10.6667 9.33337L13.3334 9.33337C13.687 9.33337 14.0262 9.1929 14.2762 8.94285C14.5263 8.6928 14.6667 8.35366 14.6667 8.00004C14.6667 7.64642 14.5263 7.30728 14.2762 7.05723C14.0262 6.80718 13.687 6.66671 13.3334 6.66671L10.5967 6.66671L6.38675 1.33337L5.19408 1.33337L7.06741 6.66671L4.00008 6.66671L2.66675 4.66671L1.33341 4.66671L2.66675 8.00004L1.33341 11.3334L2.66675 11.3334L4.00008 9.33337L7.12341 9.33337L5.19341 14.6667Z'
                                                                                fill='#212B36'
                                                                            />
                                                                        </svg>
                                                                        <Typography variant='subtitle16'>
                                                                            {
                                                                                sessionData.FlightInfoSelected[0]
                                                                                    ?.EndPoint
                                                                            }{' '}
                                                                            (
                                                                            {
                                                                                sessionData.FlightInfoSelected[0]
                                                                                    ?.AirlineName
                                                                            }
                                                                            )
                                                                        </Typography>
                                                                    </div>
                                                                )}
                                                                <div className='flex gap-6 justify-between'>
                                                                    <Typography
                                                                        variant='body14'
                                                                        customClasses={{
                                                                            root: '!text-grey-600',
                                                                        }}
                                                                    >
                                                                        {passenger.PassengerFullName}
                                                                    </Typography>
                                                                    <Typography
                                                                        variant='body14'
                                                                        customClasses={{
                                                                            root: '!text-grey-600',
                                                                        }}
                                                                    >
                                                                        {baggageName +
                                                                            ' - ' +
                                                                            toThousandSeparator(baggagePrice) +
                                                                            'đ'}
                                                                    </Typography>
                                                                </div>
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            {sessionData.InitSessionData.ItineraryType === 2 && (
                                                <div className='flex-1 flex flex-col gap-2'>
                                                    <div className='flex flex-col gap-2'>
                                                        {passengerFlightInfo.map((passenger, index) => {
                                                            const baggageName = passenger.FlightInfo[1].Baggage;
                                                            const baggagePrice = passenger.FlightInfo[1].Price;

                                                            if (!baggageName) return null;
                                                            return (
                                                                <>
                                                                    {index === 0 && (
                                                                        <div className='flex items-center gap-2'>
                                                                            <Typography variant='subtitle16'>
                                                                                {
                                                                                    sessionData.FlightInfoSelected[1]
                                                                                        ?.StartPoint
                                                                                }
                                                                            </Typography>
                                                                            <svg
                                                                                width='16'
                                                                                height='16'
                                                                                viewBox='0 0 16 16'
                                                                                fill='none'
                                                                                xmlns='http://www.w3.org/2000/svg'
                                                                            >
                                                                                <path
                                                                                    d='M5.19341 14.6667L6.45675 14.6667L10.6667 9.33337L13.3334 9.33337C13.687 9.33337 14.0262 9.1929 14.2762 8.94285C14.5263 8.6928 14.6667 8.35366 14.6667 8.00004C14.6667 7.64642 14.5263 7.30728 14.2762 7.05723C14.0262 6.80718 13.687 6.66671 13.3334 6.66671L10.5967 6.66671L6.38675 1.33337L5.19408 1.33337L7.06741 6.66671L4.00008 6.66671L2.66675 4.66671L1.33341 4.66671L2.66675 8.00004L1.33341 11.3334L2.66675 11.3334L4.00008 9.33337L7.12341 9.33337L5.19341 14.6667Z'
                                                                                    fill='#212B36'
                                                                                />
                                                                            </svg>
                                                                            <Typography variant='subtitle16'>
                                                                                {
                                                                                    sessionData.FlightInfoSelected[1]
                                                                                        ?.EndPoint
                                                                                }{' '}
                                                                                (
                                                                                {
                                                                                    sessionData.FlightInfoSelected[1]
                                                                                        ?.AirlineName
                                                                                }
                                                                                )
                                                                            </Typography>
                                                                        </div>
                                                                    )}
                                                                    <div className='flex gap-6 justify-between'>
                                                                        <Typography
                                                                            variant='body14'
                                                                            customClasses={{
                                                                                root: '!text-grey-600',
                                                                            }}
                                                                        >
                                                                            {passenger.PassengerFullName}
                                                                        </Typography>
                                                                        <Typography
                                                                            variant='body14'
                                                                            customClasses={{
                                                                                root: '!text-grey-600',
                                                                            }}
                                                                        >
                                                                            {baggageName +
                                                                                ' - ' +
                                                                                toThousandSeparator(baggagePrice) +
                                                                                'đ'}
                                                                        </Typography>
                                                                    </div>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                }
            />
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <FormProvider {...methods}>
                        <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                            <div className='min-w-[996px] max-w-[1200px] pt-8 mx-auto'>
                                <Typography variant='h5'>Mua thêm hành lý</Typography>
                                <div className='flex pl-[230px] mt-8'>
                                    <Tabs
                                        value={baggageTab}
                                        onChange={handleChangeBaggageTab}
                                        color={'primary'}
                                        lineSize={4}
                                        customClasses={{
                                            root: 'border-b border-grey-400 flex [&>li]:flex-1 w-full',
                                            tab: 'w-full',
                                        }}
                                    >
                                        <TabPane
                                            label={
                                                <div className='flex flex-col text-center gap 2'>
                                                    <Typography
                                                        variant='subtitle16'
                                                        className={`${
                                                            baggageTab === BaggageTabs.DEPARTURE_BAGGAGE
                                                                ? '!text-primary'
                                                                : '!text-grey-500'
                                                        }`}
                                                    >
                                                        Chiều đi
                                                    </Typography>
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
                                            value={baggageTab}
                                            id={BaggageTabs.DEPARTURE_BAGGAGE}
                                        />
                                        <TabPane
                                            label={
                                                <div className='flex flex-col text-center gap 2'>
                                                    <Typography
                                                        variant='subtitle16'
                                                        className={`${
                                                            baggageTab === BaggageTabs.RETURN_BAGGAGE
                                                                ? '!text-primary'
                                                                : '!text-grey-500'
                                                        }`}
                                                    >
                                                        Chiều về
                                                    </Typography>
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
                                            value={baggageTab}
                                            id={BaggageTabs.RETURN_BAGGAGE}
                                            disabled
                                        />
                                    </Tabs>
                                </div>
                                <TabContent>
                                    <TabPane value={baggageTab} id={BaggageTabs.DEPARTURE_BAGGAGE}>
                                        <BaggageSelectForm name='DepartureBaggage' />
                                    </TabPane>
                                    <TabPane value={baggageTab} id={BaggageTabs.RETURN_BAGGAGE}>
                                        <BaggageSelectForm name='ReturnBaggage' />
                                    </TabPane>
                                </TabContent>
                            </div>
                            <div className='fixed bottom-0 left-0 right-0 h-[100px] bg-white shadow-[0px_-4px_12px_0px_rgba(0,_0,_0,_0.1)]'>
                                <div className='w-[1200px] flex justify-between items-center mx-auto h-full'>
                                    <div className='flex flex-col'>
                                        <Typography variant='body16'>Tổng tiền</Typography>
                                        <Typography
                                            variant='subtitle20'
                                            customClasses={{
                                                root: '!text-warning',
                                            }}
                                        >
                                            {toThousandSeparator(
                                                Number(
                                                    watch('DepartureBaggage').reduce((total, passenger) => {
                                                        return total + passenger.Price;
                                                    }, 0) +
                                                        watch('ReturnBaggage').reduce((total, passenger) => {
                                                            return total + passenger.Price;
                                                        }, 0),
                                                ),
                                            ) + 'đ'}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Button
                                            onClick={(e) => {
                                                e?.preventDefault();
                                                handleSubmit(handlerSubmitBaggadeAddOn)();
                                            }}
                                            size='lg'
                                            rounded='lg'
                                            isLoading={isUpdatePassengerBaggage}
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
                    </FormProvider>
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

export default BaggageCard;

// ======================= BaggageForm ======================= //

type BaggageFormProps = {
    name: 'DepartureBaggage' | 'ReturnBaggage';
};
const BaggageSelectForm: React.FC<BaggageFormProps> = (props) => {
    const { name } = props;

    const { sessionData, sessionId } = useContext(CreateBookingContext);

    const itinerary = name === 'DepartureBaggage' ? 1 : 2;
    const fareOptionSession =
        sessionData?.FlightInfoSelected[name === 'DepartureBaggage' ? 0 : 1]?.FareOptions?.[0]?.FareOptionSession || '';
    const flightSession =
        sessionData?.FlightInfoSelected[name === 'DepartureBaggage' ? 0 : 1]?.FareOptions?.[0].FlightSession || '';

    const { data: baggageQueryResult } = useGetBaggadeQuery({
        AId: '3531',
        FareOptionSession: fareOptionSession,
        FlightSession: flightSession,
        Itinerary: itinerary,
        SessionId: sessionId,
    });

    const { control } = useFormContext<PassengerBaggageForm>();

    const { fields: passengersBaggage } = useFieldArray({
        control,
        name: name,
    });

    const getPassengersType = (passengerIndex: number) => {
        const type = sessionData?.PassengerInfo.find((passenger) => passenger.Index === passengerIndex)?.Type;
        return type === 'Adult' ? 'Người lớn' : 'Trẻ em';
    };

    const baggagesInfo =
        itinerary === 1
            ? baggageQueryResult?.data?.Data.DepartureBaggages
            : baggageQueryResult?.data?.Data.ReturnBaggages;

    const isEmpty = !baggagesInfo || baggagesInfo.length === 0;

    return (
        <div className='flex flex-col gap-3 mt-4'>
            {isEmpty ? (
                <div className='flex flex-col gap-4 items-center w-full h-full pt-16 pl-[230px]'>
                    <Logo width={200} className='fill-grey-400' />
                    <div className='text-center'>
                        <Typography variant='subtitle20' className='!text-grey-600'>
                            Không hỗ trợ mua thêm hành lý
                        </Typography>
                    </div>
                </div>
            ) : (
                <>
                    {passengersBaggage?.map((passenger, index) => {
                        return (
                            <>
                                <Controller
                                    render={({ field: { onChange, name, value, onBlur, ref } }) => {
                                        return (
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex justify-between'>
                                                    <div className='flex flex-col gap-0.5 w-[230px]'>
                                                        <Typography variant='body16'>{`${passenger.PassengerFullName}`}</Typography>
                                                        <Typography variant='caption' className='!text-grey-500'>
                                                            {getPassengersType(passenger.PassengerIndex)}
                                                        </Typography>
                                                        <div className='flex gap-2 items-center'>
                                                            <Typography variant='subtitle16' className='!text-warning'>
                                                                {toThousandSeparator(Number(value?.Price)) + 'đ'}
                                                            </Typography>
                                                            {value?.Baggage && (
                                                                <IconButton
                                                                    onClick={(e) => {
                                                                        e?.preventDefault();
                                                                        onChange({
                                                                            Baggage: '',
                                                                            Price: 0,
                                                                            PassengerIndex: passenger.PassengerIndex,
                                                                            PassengerFullName:
                                                                                passenger.PassengerFullName,
                                                                        });
                                                                    }}
                                                                    size='sm'
                                                                    variant='text'
                                                                >
                                                                    <svg
                                                                        width='16'
                                                                        height='16'
                                                                        viewBox='0 0 16 16'
                                                                        fill='none'
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                    >
                                                                        <path
                                                                            fill-rule='evenodd'
                                                                            clip-rule='evenodd'
                                                                            d='M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8C14.6668 4.3181 11.6821 1.33333 8.00016 1.33333C4.31826 1.33333 1.3335 4.3181 1.3335 8C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667ZM6.13807 5.19526C5.87772 4.93491 5.45561 4.93491 5.19526 5.19526C4.93491 5.45561 4.93491 5.87772 5.19526 6.13807L7.05719 8L5.19526 9.86193C4.93491 10.1223 4.93491 10.5444 5.19526 10.8047C5.45561 11.0651 5.87772 11.0651 6.13807 10.8047L8 8.94281L9.86193 10.8047C10.1223 11.0651 10.5444 11.0651 10.8047 10.8047C11.0651 10.5444 11.0651 10.1223 10.8047 9.86193L8.94281 8L10.8047 6.13807C11.0651 5.87772 11.0651 5.45561 10.8047 5.19526C10.5444 4.93491 10.1223 4.93491 9.86193 5.19526L8 7.05719L6.13807 5.19526Z'
                                                                            fill='#637381'
                                                                        />
                                                                    </svg>
                                                                </IconButton>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {baggagesInfo && (
                                                        <div className='flex flex-1 gap-2'>
                                                            {baggagesInfo?.map((option) => {
                                                                return (
                                                                    <BaggageOption
                                                                        isSelected={value.Baggage === option.Name}
                                                                        option={option}
                                                                        onSelect={(option) => {
                                                                            onChange({
                                                                                Baggage: option.Name,
                                                                                Price: option.Price,
                                                                                PassengerIndex:
                                                                                    passenger.PassengerIndex,
                                                                                PassengerFullName:
                                                                                    passenger.PassengerFullName,
                                                                            });
                                                                            // setSelectedOption(option);
                                                                        }}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                                <Divider />
                                            </div>
                                        );
                                    }}
                                    name={`${name}.${index}`}
                                    control={control}
                                />
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
};
