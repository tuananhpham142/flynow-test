import { Button, Card, Divider, Drawer, IconButton, StepperInput, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const MealCard = (props: Props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setShowDrawer((prev) => !prev);
    };

    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='p-4 flex items-center justify-between gap-3'>
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
                                    d='M24 11C26.7614 11 29 13.2386 29 16V20C29 20.4589 28.6877 20.8589 28.2425 20.9701L25 21.7808V28C25 28.5523 24.5523 29 24 29C23.4477 29 23 28.5523 23 28V12C23 11.4477 23.4477 11 24 11ZM25 19.7192L27 19.2192V16C27 14.6938 26.1652 13.5825 25 13.1707V19.7192Z'
                                    fill='white'
                                />
                                <path
                                    d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V14C11 16.419 12.7178 18.4367 15 18.9V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V18.9C19.2822 18.4367 21 16.419 21 14V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V14C19 15.3062 18.1652 16.4175 17 16.8293V12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12V16.8293C13.8348 16.4175 13 15.3062 13 14V12Z'
                                    fill='white'
                                />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-1 flex-1'>
                            <Typography htmlTag='h5' variant='subtitle20'>
                                Mua suất ăn
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
                        <div className='w-[996px] pt-8 mx-auto'>
                            <Typography variant='h5'>Mua suất ăn</Typography>
                            <div className='mt-8 flex flex-col gap-3'>
                                <div className='grid grid-cols-12 items-start'>
                                    <div className='col-span-3 flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
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
                                    <div className='col-span-9 flex items-start gap-8'>
                                        <div className='flex gap-3'>
                                            <img
                                                className='w-[100px] h-[100px] rounded-lg object-cover'
                                                src={
                                                    'https://www.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg'
                                                }
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='subtitle16'
                                                >
                                                    Combo Gà Tắm nước mắm - 1 người
                                                </Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='body16'
                                                >
                                                    Gà mua về bạn rửa sạch với nước, sau đó chà xát thịt gà với một ít
                                                    muối trong vòng 10 phút để khử mùi tanh ...
                                                </Typography>
                                                <Typography variant='body16'>91.000₫</Typography>
                                            </div>
                                        </div>
                                        <div className='p-1'>
                                            <StepperInput value={2} />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='grid grid-cols-12 items-start'>
                                    <div className='col-span-3 flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography
                                            customClasses={{
                                                root: '!text-grey-500',
                                            }}
                                            variant='caption'
                                        >
                                            Người lớn
                                        </Typography>
                                        <Typography variant='subtitle16'>91,000₫</Typography>
                                    </div>
                                    <div className='col-span-9 flex items-start gap-8'>
                                        <div className='flex gap-3'>
                                            <img
                                                className='w-[100px] h-[100px] rounded-lg object-cover'
                                                src={
                                                    'https://www.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg'
                                                }
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='subtitle16'
                                                >
                                                    Combo Gà Tắm nước mắm - 1 người
                                                </Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='body16'
                                                >
                                                    Gà mua về bạn rửa sạch với nước, sau đó chà xát thịt gà với một ít
                                                    muối trong vòng 10 phút để khử mùi tanh ...
                                                </Typography>
                                                <Typography variant='body16'>91.000₫</Typography>
                                            </div>
                                        </div>
                                        <div className='p-1'>
                                            <StepperInput value={1} />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='grid grid-cols-12 items-start'>
                                    <div className='col-span-3 flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography
                                            customClasses={{
                                                root: '!text-grey-500',
                                            }}
                                            variant='caption'
                                        >
                                            Người lớn
                                        </Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='col-span-9 flex items-start gap-8'>
                                        <div className='flex gap-3'>
                                            <img
                                                className='w-[100px] h-[100px] rounded-lg object-cover'
                                                src={
                                                    'https://www.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg'
                                                }
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='subtitle16'
                                                >
                                                    Combo Gà Tắm nước mắm - 1 người
                                                </Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='body16'
                                                >
                                                    Gà mua về bạn rửa sạch với nước, sau đó chà xát thịt gà với một ít
                                                    muối trong vòng 10 phút để khử mùi tanh ...
                                                </Typography>
                                                <Typography variant='body16'>91.000₫</Typography>
                                            </div>
                                        </div>
                                        <div className='p-1'>
                                            <StepperInput value={0} />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='grid grid-cols-12 items-start'>
                                    <div className='col-span-3 flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography
                                            customClasses={{
                                                root: '!text-grey-500',
                                            }}
                                            variant='caption'
                                        >
                                            Người lớn
                                        </Typography>
                                        <Typography variant='subtitle16'>273,000₫</Typography>
                                    </div>
                                    <div className='col-span-9 flex items-start gap-8'>
                                        <div className='flex gap-3'>
                                            <img
                                                className='w-[100px] h-[100px] rounded-lg object-cover'
                                                src={
                                                    'https://www.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg'
                                                }
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='subtitle16'
                                                >
                                                    Combo Gà Tắm nước mắm - 1 người
                                                </Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='body16'
                                                >
                                                    Gà mua về bạn rửa sạch với nước, sau đó chà xát thịt gà với một ít
                                                    muối trong vòng 10 phút để khử mùi tanh ...
                                                </Typography>
                                                <Typography variant='body16'>91.000₫</Typography>
                                            </div>
                                        </div>
                                        <div className='p-1'>
                                            <StepperInput value={3} />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='grid grid-cols-12 items-start'>
                                    <div className='col-span-3 flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography
                                            customClasses={{
                                                root: '!text-grey-500',
                                            }}
                                            variant='caption'
                                        >
                                            Người lớn
                                        </Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='col-span-9 flex items-start gap-8'>
                                        <div className='flex gap-3'>
                                            <img
                                                className='w-[100px] h-[100px] rounded-lg object-cover'
                                                src={
                                                    'https://www.huongnghiepaau.com/wp-content/uploads/2018/07/com-ga-xoi-mo.jpg'
                                                }
                                            />
                                            <div className='flex flex-col gap-1'>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='subtitle16'
                                                >
                                                    Combo Gà Tắm nước mắm - 1 người
                                                </Typography>
                                                <Typography
                                                    customClasses={{
                                                        root: '!text-grey-600',
                                                    }}
                                                    variant='body16'
                                                >
                                                    Gà mua về bạn rửa sạch với nước, sau đó chà xát thịt gà với một ít
                                                    muối trong vòng 10 phút để khử mùi tanh ...
                                                </Typography>
                                                <Typography variant='body16'>91.000₫</Typography>
                                            </div>
                                        </div>
                                        <div className='p-1'>
                                            <StepperInput value={0} />
                                        </div>
                                    </div>
                                </div>
                                <Divider />
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

export default MealCard;
