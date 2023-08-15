// components
import React, { useContext } from 'react';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import { Card, IconButton, Typography, Drawer, Divider, Button } from '@acme/design-system';
import { FormProvider } from '@acme/design-system/ReactHookForm';

// hooks
import { useForm, useFieldArray } from '@acme/design-system/ReactHookForm';

// utils
import { toThousandSeparator } from '@acme/utils';

// services
import { useGetBaggadeQuery } from 'services/flight/getBaggades';

// types
import type { BaggageItem } from 'models/Flight/FlightModel';
type Props = {};

const BaggageOption = ({
    isSelected = false,
    option,
    onSelect,
}: {
    isSelected?: boolean;
    option: BaggageItem;
    onSelect: (option: BaggageItem) => void;
}) => {
    const colors = isSelected
        ? 'bg-warning !text-white hover:bg-warning-dark'
        : 'bg-white text-grey-900 hover:bg-grey-200';

    return (
        <div
            onClick={() => onSelect(option)}
            className={`flex flex-col items-center justify-center rounded-lg border border-grey-400 h-18 w-28 cursor-pointer ${colors}`}
        >
            <Typography
                variant='subtitle14'
                customClasses={{
                    root: isSelected ? '!text-white' : '',
                }}
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

const listOptions: Array<BaggageItem> = [
    {
        Name: '15kg',
        Price: 200000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
    {
        Name: '20kg',
        Price: 250000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
    {
        Name: '25kg',
        Price: 300000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
    {
        Name: '30kg',
        Price: 350000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
    {
        Name: '35kg',
        Price: 400000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
    {
        Name: '40kg',
        Price: 450000,
        AirlineCode: 'VJ',
        Code: '15',
        Currency: 'VND',
        Route: 'HAN-SGN',
        Value: '15',
    },
];

const BaggageCard: React.FC<Props> = (props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);

    const { sessionData, sessionId } = useContext(CreateBookingContext);
    const [selectedOption, setSelectedOption] = React.useState<BaggageItem | null>(null);

    const methods = useForm<any>();
    const { control } = methods;

    const toggleDrawer = (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e?.preventDefault();
        setShowDrawer((prev) => !prev);
    };

    // services
    const { data } = useGetBaggadeQuery({
        AId: '3531',
        FareOptionSession: '',
        FlightSession: '',
        Itinerary: 1,
        SessionId: sessionId,
    });

    //handles
    const handlerSubmitBaggadeAddOn = () => {
        // send data to server

        // update context

        // close drawer
        toggleDrawer();
    };

    console.log(data);

    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='flex flex-col p-4 card-animation'>
                        <div className=' flex items-center justify-between gap-3'>
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
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <Typography htmlTag='h5' variant='subtitle20'>
                                    Mua thêm hành lý
                                </Typography>
                                {!selectedOption && (
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
                                {selectedOption ? (
                                    <div className='w-32 h-10 flex gap-1 items-center'>
                                        <Typography
                                            variant='subtitle16'
                                            customClasses={{
                                                root: '!text-warning',
                                            }}
                                        >
                                            450,000₫
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
                        {selectedOption && (
                            <div className='pl-12'>
                                <Divider />
                                <div className='pt-2 flex'>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <Typography variant='subtitle16'>Hanoi (HAN)</Typography>
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

                                            <Typography variant='subtitle16'>Hanoi (HAN)</Typography>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            {sessionData?.PassengerInfo?.map((passenger) => {
                                                return (
                                                    <div className='flex gap-6'>
                                                        <Typography
                                                            variant='body14'
                                                            customClasses={{
                                                                root: '!text-grey-600',
                                                            }}
                                                        >
                                                            {passenger.FirstName + ' ' + passenger.LastName}
                                                        </Typography>
                                                        <Typography
                                                            variant='body14'
                                                            customClasses={{
                                                                root: '!text-grey-600',
                                                            }}
                                                        >
                                                            {selectedOption.Name +
                                                                ' - ' +
                                                                toThousandSeparator(selectedOption.Price) +
                                                                'đ'}
                                                        </Typography>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <div className='flex items-center gap-2'>
                                            <Typography variant='subtitle16'>Hanoi (HAN)</Typography>
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

                                            <Typography variant='subtitle16'>Hanoi (HAN)</Typography>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            {sessionData?.PassengerInfo?.map((passenger) => {
                                                return (
                                                    <div className='flex gap-6'>
                                                        <Typography
                                                            variant='body14'
                                                            customClasses={{
                                                                root: '!text-grey-600',
                                                            }}
                                                        >
                                                            {passenger.FirstName + ' ' + passenger.LastName}
                                                        </Typography>
                                                        <Typography
                                                            variant='body14'
                                                            customClasses={{
                                                                root: '!text-grey-600',
                                                            }}
                                                        >
                                                            {selectedOption.Name +
                                                                ' - ' +
                                                                toThousandSeparator(selectedOption.Price) +
                                                                'đ'}
                                                        </Typography>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
            />
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                        <div className='w-[996px] pt-8 mx-auto'>
                            <Typography variant='h5'>Mua thêm hành lý</Typography>
                            <div className='mt-8 flex flex-col gap-3'>
                                {sessionData?.PassengerInfo?.map((passenger) => {
                                    return (
                                        <>
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col gap-0.5'>
                                                    <Typography variant='body16'>{`${passenger.FirstName} ${passenger.LastName}`}</Typography>
                                                    <Typography variant='caption'>
                                                        {passenger.Type === 'Adult' ? 'Người lớn' : 'Trẻ em'}
                                                    </Typography>
                                                    <Typography variant='subtitle16'>
                                                        {toThousandSeparator(Number(selectedOption?.Price)) + 'đ'}
                                                    </Typography>
                                                </div>
                                                <div className='flex gap-2'>
                                                    {listOptions.map((option) => {
                                                        return (
                                                            <BaggageOption
                                                                isSelected={selectedOption?.Name === option.Name}
                                                                option={option}
                                                                onSelect={(option) => {
                                                                    setSelectedOption(option);
                                                                }}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <Divider />
                                        </>
                                    );
                                })}
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
                                        {toThousandSeparator(Number(selectedOption?.Price)) + 'đ'}
                                    </Typography>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => {
                                            handlerSubmitBaggadeAddOn();
                                        }}
                                        size='lg'
                                        rounded='lg'
                                        customClasses={{
                                            root: 'w-[112px] h-[48px]',
                                        }}
                                    >
                                        Tiếp tục
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

export default BaggageCard;
