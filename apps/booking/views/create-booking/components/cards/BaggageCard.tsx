import { Card, IconButton, Typography, Drawer, Divider, Button } from '@acme/design-system';
import React from 'react';

type Props = {};

const BaggageOption = ({ isSelected = false }: { isSelected?: boolean }) => {
    const colors = isSelected
        ? 'bg-warning !text-white hover:bg-warning-dark'
        : 'bg-white text-grey-900 hover:bg-grey-200';
    return (
        <div
            className={`flex flex-col items-center justify-center rounded-lg border border-grey-400 h-18 w-28 cursor-pointer ${colors}`}
        >
            <Typography
                variant='subtitle14'
                customClasses={{
                    root: isSelected ? '!text-white' : '',
                }}
            >
                15kg
            </Typography>
            <Typography
                customClasses={{
                    root: isSelected ? '!text-white' : '',
                }}
                variant='body16'
            >
                200,000₫
            </Typography>
        </div>
    );
};

const BaggageCard: React.FC<Props> = (props) => {
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
                            <Typography variant='h5'>Mua thêm hành lý</Typography>
                            <div className='mt-8 flex flex-col gap-3'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption isSelected={true} />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
                                </div>
                                <Divider />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption isSelected={true} />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
                                </div>
                                <Divider />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption isSelected />
                                    </div>
                                </div>
                                <Divider />

                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption isSelected />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
                                </div>
                                <Divider />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
                                </div>
                                <Divider />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
                                </div>
                                <Divider />
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-0.5'>
                                        <Typography variant='body16'>NGUYEN HOANG LONG</Typography>
                                        <Typography variant='caption'>Người lớn</Typography>
                                        <Typography variant='subtitle16'>0₫</Typography>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption isSelected />
                                        <BaggageOption />
                                        <BaggageOption />
                                        <BaggageOption />
                                    </div>
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
                                        1,000,000₫
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

export default BaggageCard;
