'use client';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, Chip, Divider, IconButton, Typography } from '@acme/design-system';
import { getAirlineLogo } from '@acme/pages/components/Logos';
import { flightMinutesDurationFormat, formatFlightTime } from '@acme/utils';
import InvoiceIssuance from './components/InvoiceIssuance';
import TicketCodeSplit from './components/TicketCodeSplit';
import TicketCancelation from './components/TicketCancelation';

type Props = {};

const FlightBookingDetail = (props: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            {/* Info */}
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <Breadcrumb>
                        <BreadcrumbItem icon={<i className='icon icon-home-fill' />}>Tổng quan</BreadcrumbItem>
                        <BreadcrumbItem>Đơn hàng vé máy bay</BreadcrumbItem>
                        <BreadcrumbItem>Hà Nội - Paris</BreadcrumbItem>
                    </Breadcrumb>
                    <div className={'flex justify-between items-end'}>
                        <Typography htmlTag={'h5'} variant={'h5'} className=''>
                            Hà Nội - Paris
                        </Typography>
                    </div>
                    <Divider />

                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col justify-between h-14'>
                                <Typography variant='body16'>Ngày đặt:</Typography>
                                <Typography variant='body16'>Số lượng khách:</Typography>
                            </div>
                            <div className='flex flex-col justify-between h-14'>
                                <Typography variant='body16'>02/03/2023, 12:45:21</Typography>
                                <Typography variant='body16'>3 người lớn, 2 trẻ em, 1 em bé</Typography>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <Typography variant='body16'>Mã đơn hàng:</Typography>
                            <Typography className='!text-primary' variant='body16'>
                                F9876HY
                            </Typography>
                        </div>

                        <div className='flex gap-2'>
                            <Chip
                                customClasses={{
                                    root: '!h-[36px] !bg-warning-lighter',
                                }}
                                size='lg'
                                variant='outline'
                                rounded='rounded'
                                color='warning'
                            >
                                Đang giữ chỗ
                            </Chip>
                            <Chip
                                size='lg'
                                customClasses={{
                                    root: '!bg-success !text-white !h-[36px]',
                                }}
                                variant='contained'
                                rounded='rounded'
                                color='success'
                            >
                                Thời gian giữ chỗ: 12h34
                            </Chip>
                        </div>
                    </div>

                    <Divider />
                </div>
            </div>
            {/* Info */}

            {/* Detail */}
            <div className='flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <Button
                        size='lg'
                        variant='outline'
                        rounded='lg'
                        startIcon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M4 7C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H6V7H4ZM8 7V21H16V7H8ZM18 7V21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H18Z'
                                    fill='#4469AF'
                                />
                                <path
                                    d='M17 8V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6V8'
                                    stroke='#4469AF'
                                    stroke-width='2'
                                />
                            </svg>
                        }
                    >
                        Thêm hành lý
                    </Button>
                    <Button
                        size='lg'
                        variant='outline'
                        rounded='lg'
                        startIcon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M16 3C18.7614 3 21 5.23858 21 8V12C21 12.4589 20.6877 12.8589 20.2425 12.9701L17 13.7808V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V4C15 3.44772 15.4477 3 16 3ZM17 11.7192L19 11.2192V8C19 6.69378 18.1652 5.58254 17 5.17071V11.7192Z'
                                    fill='#4469AF'
                                />
                                <path
                                    d='M5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4V6C3 8.41896 4.71776 10.4367 7 10.9V20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20V10.9C11.2822 10.4367 13 8.41896 13 6V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V6C11 7.30622 10.1652 8.41746 9 8.82929V4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V8.82929C5.83481 8.41746 5 7.30622 5 6V4Z'
                                    fill='#4469AF'
                                />
                            </svg>
                        }
                    >
                        Thêm suất ăn
                    </Button>
                    <Button
                        size='lg'
                        variant='outline'
                        rounded='lg'
                        startIcon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M1.29802 5.73464L4.31526 18.2346C4.42364 18.6836 4.82544 19 5.28734 19H15.0986C15.4839 19 15.7137 18.5706 15.5 18.25C15.2863 17.9294 15.5161 17.5 15.9014 17.5H22.4773C22.766 17.5 23 17.266 23 16.9773C23 16.707 22.7939 16.4813 22.5246 16.4568L12.5548 15.5504C12.2099 15.5191 11.9058 15.3115 11.7509 15.0018L11.4866 14.4732C11.1832 13.8664 10.5929 13.4548 9.9186 13.3798L7.72058 13.1356C6.97181 13.0524 6.33332 12.5555 6.06879 11.8501L5.45219 10.2058C5.1768 9.47148 5.35606 8.64394 5.91063 8.08937L6.8041 7.1959C6.92953 7.07047 7 6.90034 7 6.72295C7 6.57823 6.95306 6.43742 6.86623 6.32164L6.1 5.3C5.72229 4.79639 5.12951 4.5 4.5 4.5H2.2701C1.62288 4.5 1.14615 5.10549 1.29802 5.73464Z'
                                    fill='#4469AF'
                                />
                                <path
                                    d='M16 13.5L11.5 13L12.5 15L21.1537 15.9109C21.606 15.9585 22 15.6038 22 15.149C22 14.7745 21.7292 14.4549 21.3598 14.3933L16 13.5Z'
                                    fill='#4469AF'
                                />
                                <path
                                    d='M6.22122 10.1828L7 12L10.5 12.5L8.35464 9.06742C8.13402 8.71444 7.74713 8.5 7.33087 8.5C6.46415 8.5 5.8798 9.3862 6.22122 10.1828Z'
                                    fill='#4469AF'
                                />
                                <path
                                    d='M6 19.5H14V20C14 20.5523 13.5523 21 13 21H7C6.44772 21 6 20.5523 6 20V19.5Z'
                                    fill='#4469AF'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M6.59376 4.8906L7.09053 5.63576C7.61936 6.42901 7.51477 7.48525 6.84065 8.15938L6.50002 8.5C7.60459 8.5 8.50002 7.60457 8.50002 6.5C8.50002 5.39543 7.60459 4.5 6.50002 4.5C6.4214 4.5 6.34384 4.50454 6.26758 4.51336C6.39023 4.62373 6.50008 4.75008 6.59376 4.8906Z'
                                    fill='#4469AF'
                                />
                            </svg>
                        }
                    >
                        Chọn chỗ ngồi
                    </Button>
                    <Button
                        size='lg'
                        variant='outline'
                        rounded='lg'
                        startIcon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 6.47715 6.47715 2 12 2C15.7027 2 18.934 4.01288 20.6616 6.99927C20.9381 7.47733 20.7747 8.08906 20.2967 8.36561C19.8186 8.64215 19.2069 8.47879 18.9304 8.00073C17.5456 5.60691 14.9599 4 12 4ZM21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C8.29733 22 5.06597 19.9871 3.33843 17.0007C3.06189 16.5227 3.22525 15.9109 3.70331 15.6344C4.18137 15.3579 4.7931 15.5212 5.06965 15.9993C6.45439 18.3931 9.04013 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11Z'
                                    fill='#212B36'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M3 16.5C3 15.9477 3.44772 15.5 4 15.5H7C7.55228 15.5 8 15.9477 8 16.5C8 17.0523 7.55228 17.5 7 17.5H5V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20V16.5Z'
                                    fill='#212B36'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M20 3C20.5523 3 21 3.44772 21 4V7.5C21 8.05228 20.5523 8.5 20 8.5H17C16.4477 8.5 16 8.05228 16 7.5C16 6.94772 16.4477 6.5 17 6.5H19V4C19 3.44772 19.4477 3 20 3Z'
                                    fill='#212B36'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M12 7C12.5523 7 13 7.44772 13 8V12.5316L15.6402 14.7318C16.0645 15.0853 16.1218 15.7159 15.7682 16.1402C15.4147 16.5645 14.7841 16.6218 14.3598 16.2682L11 13.4684V8C11 7.44772 11.4477 7 12 7Z'
                                    fill='#212B36'
                                />
                            </svg>
                        }
                    >
                        Đổi lịch trình
                    </Button>
                    <TicketCodeSplit />
                    <InvoiceIssuance />
                    <TicketCancelation />
                </div>

                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-8'>
                        <Card
                            variant='border'
                            noPadding
                            body={
                                <div className='flex flex-col gap-3 py-4'>
                                    <div className='flex flex-col gap-4 px-4'>
                                        <div className='flex gap-4 items-center'>
                                            <Typography
                                                htmlTag='span'
                                                variant='subtitle16'
                                                className='w-18 shrink-0 grow-0'
                                            >
                                                Chiều đi
                                            </Typography>
                                            <div className='flex items-center justify-between flex-1'>
                                                <div className='flex items-center gap-2'>
                                                    {/* logo */}
                                                    <div>{getAirlineLogo('QH', { width: 48, height: 48 })}</div>
                                                    {/* logo */}
                                                    <div className='flex flex-col'>
                                                        <Typography htmlTag='span' variant='body16'>
                                                            {'BambooAirway'}
                                                        </Typography>
                                                        <Typography
                                                            htmlTag='span'
                                                            variant='caption'
                                                            className='text-grey-500'
                                                        >
                                                            {'QH666'} • {'Boeing 777'}
                                                        </Typography>

                                                        <Typography
                                                            htmlTag='span'
                                                            variant='caption'
                                                            className='text-grey-500'
                                                        >
                                                            Loại vé: {'ECONOMY'}
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between gap-9'>
                                                    <div className='flex items-center flex-1 gap-3'>
                                                        {/* Flight Schedule  */}
                                                        <div className='flex justify-center items-center flex-col gap-1'>
                                                            <Typography htmlTag='span' variant='subtitle20'>
                                                                {'HAN'}
                                                            </Typography>

                                                            <Typography htmlTag='span' variant='caption'>
                                                                {formatFlightTime('2021-12-31T12:45:00')}
                                                            </Typography>
                                                        </div>

                                                        <div className='flex flex-col flex-1 items-center w-[140px]'>
                                                            <span className='text-[13px] text-grey-500'>
                                                                {flightMinutesDurationFormat(3000)}
                                                            </span>
                                                            <div className='flex items-center w-full gap-0.5'>
                                                                <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                                {1 === 1 && (
                                                                    <>
                                                                        <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                        <Divider
                                                                            className='flex-1 h-[2px]'
                                                                            color='grey-500'
                                                                        />
                                                                    </>
                                                                )}
                                                                {1 > 1 && (
                                                                    <>
                                                                        <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                        <Divider
                                                                            className='flex-1 h-[2px]'
                                                                            color='grey-500'
                                                                        />
                                                                    </>
                                                                )}
                                                                <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                                            </div>
                                                            <span className='text-[13px] text-grey-500'>
                                                                {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                                            </span>
                                                        </div>

                                                        <div className='flex justify-center items-center flex-col gap-1'>
                                                            <Typography htmlTag='span' variant='subtitle20'>
                                                                {'CDG'}
                                                            </Typography>

                                                            <Typography htmlTag='span' variant='caption'>
                                                                {formatFlightTime('2021-12-31T12:45:00')} (+{1}d)
                                                            </Typography>
                                                        </div>
                                                        {/* Flight Schedule  */}
                                                    </div>
                                                    <div className=''>
                                                        <Button
                                                            variant='text'
                                                            size='sm'
                                                            endIcon={
                                                                false ? (
                                                                    <i className='icon icon-caret-up text-[16px]' />
                                                                ) : (
                                                                    <i className='icon icon-caret-down text-[16px]' />
                                                                )
                                                            }
                                                        >
                                                            Chính sách
                                                        </Button>
                                                        {/* <span className='text-primary text-[13px]'>Chính sách</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pl-20'>
                                            <Divider />
                                        </div>
                                        <div className='flex gap-4 items-center'>
                                            <Typography
                                                htmlTag='span'
                                                variant='subtitle16'
                                                className='w-18 shrink-0 grow-0'
                                            >
                                                Chiều về
                                            </Typography>
                                            <div className='flex items-center justify-between flex-1'>
                                                <div className='flex items-center gap-2'>
                                                    {/* logo */}
                                                    <div>{getAirlineLogo('QH', { width: 48, height: 48 })}</div>
                                                    {/* logo */}
                                                    <div className='flex flex-col'>
                                                        <Typography htmlTag='span' variant='body16'>
                                                            {'BambooAirway'}
                                                        </Typography>
                                                        <Typography
                                                            htmlTag='span'
                                                            variant='caption'
                                                            className='text-grey-500'
                                                        >
                                                            {'QH666'} • {'Boeing 777'}
                                                        </Typography>

                                                        <Typography
                                                            htmlTag='span'
                                                            variant='caption'
                                                            className='text-grey-500'
                                                        >
                                                            Loại vé: {'ECONOMY'}
                                                        </Typography>
                                                    </div>
                                                </div>
                                                <div className='flex justify-between gap-9'>
                                                    <div className='flex items-center flex-1 gap-3'>
                                                        {/* Flight Schedule  */}
                                                        <div className='flex justify-center items-center flex-col gap-1'>
                                                            <Typography htmlTag='span' variant='subtitle20'>
                                                                {'HAN'}
                                                            </Typography>

                                                            <Typography htmlTag='span' variant='caption'>
                                                                {formatFlightTime('2021-12-31T12:45:00')}
                                                            </Typography>
                                                        </div>

                                                        <div className='flex flex-col flex-1 items-center w-[140px]'>
                                                            <span className='text-[13px] text-grey-500'>
                                                                {flightMinutesDurationFormat(3000)}
                                                            </span>
                                                            <div className='flex items-center w-full gap-0.5'>
                                                                <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                                {1 === 1 && (
                                                                    <>
                                                                        <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                        <Divider
                                                                            className='flex-1 h-[2px]'
                                                                            color='grey-500'
                                                                        />
                                                                    </>
                                                                )}
                                                                {1 > 1 && (
                                                                    <>
                                                                        <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                        <Divider
                                                                            className='flex-1 h-[2px]'
                                                                            color='grey-500'
                                                                        />
                                                                    </>
                                                                )}
                                                                <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                                            </div>
                                                            <span className='text-[13px] text-grey-500'>
                                                                {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                                            </span>
                                                        </div>

                                                        <div className='flex justify-center items-center flex-col gap-1'>
                                                            <Typography htmlTag='span' variant='subtitle20'>
                                                                {'CDG'}
                                                            </Typography>

                                                            <Typography htmlTag='span' variant='caption'>
                                                                {formatFlightTime('2021-12-31T12:45:00')} (+{1}d)
                                                            </Typography>
                                                        </div>
                                                        {/* Flight Schedule  */}
                                                    </div>
                                                    <div className=''>
                                                        <Button
                                                            variant='text'
                                                            size='sm'
                                                            endIcon={
                                                                false ? (
                                                                    <i className='icon icon-caret-up text-[16px]' />
                                                                ) : (
                                                                    <i className='icon icon-caret-down text-[16px]' />
                                                                )
                                                            }
                                                        >
                                                            Chính sách
                                                        </Button>
                                                        {/* <span className='text-primary text-[13px]'>Chính sách</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='flex flex-col gap-3 py-3 px-4'>
                                        <Typography variant='subtitle18'>Thông tin khách hàng</Typography>

                                        <div className='flex gap-2'>
                                            <div className='flex flex-col gap-4'>
                                                <Typography variant={'body14'}>Họ và tên:</Typography>
                                                <Typography variant={'body14'}>Số điện thoại:</Typography>
                                                <Typography variant={'body14'}>Email:</Typography>
                                            </div>
                                            <div className='flex flex-col gap-4'>
                                                <Typography variant={'body14'}>Nguyễn Hà Anh Tuấn</Typography>
                                                <Typography variant={'body14'}>09876545321</Typography>
                                                <Typography variant={'body14'}>anhtuan.nguyen82@gmail.com</Typography>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <Button size='lg' variant='outline' rounded='lg'>
                                                Danh sách hành khách
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <div className='col-span-4'>
                        <Card
                            variant='border'
                            rounded='rounded'
                            noPadding
                            body={
                                <div className='flex flex-col gap-4 p-4'>
                                    <div className='flex flex-col gap-2'>
                                        <Typography variant='subtitle20'>Bảo hiểm du lịch</Typography>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-3'>
                                                <Typography variant={'body16'}>Gói bảo hiểm</Typography>
                                                <Typography variant={'body16'}>Ngày bắt đầu</Typography>
                                                <Typography variant={'body16'}>Ngày kết thúc</Typography>
                                                <Typography variant={'body16'}>Đơn giá</Typography>
                                                <Typography variant={'body16'}>Thành tiền</Typography>
                                            </div>
                                            <div className='flex flex-col items-end gap-3'>
                                                <Typography variant={'body16'}>BIC</Typography>
                                                <Typography variant={'body16'}>12/04/2023</Typography>
                                                <Typography variant={'body16'}>16/04/2023</Typography>
                                                <Typography variant={'body16'}>6 x 200.000₫/người</Typography>
                                                <Typography variant={'body16'} className='!text-warning'>
                                                    1.200.000₫
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <Typography variant='subtitle20'>Chi tiết thanh toán</Typography>
                                        <div className='flex justify-between'>
                                            <div className='flex flex-col gap-3'>
                                                <Typography variant={'body16'}>Tổng tiền đơn hàng</Typography>
                                                <Typography variant={'body16'}>Mã giảm giá</Typography>
                                                <Typography variant={'body16'}>Tiền cần thanh toán</Typography>
                                                <Typography variant={'body16'}>Trạng thái thanh toán</Typography>
                                            </div>
                                            <div className='flex flex-col items-end gap-3'>
                                                <Typography variant={'body16'}>2.200.000₫</Typography>
                                                <Typography variant={'body16'}>200.000₫</Typography>
                                                <Typography variant={'subtitle16'} className='!text-warning'>
                                                    2.000.000₫
                                                </Typography>
                                                <Typography variant={'body16'} className='!text-danger'>
                                                    Chờ thanh toán
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <Button
                                            fullWidth
                                            size='lg'
                                            rounded='lg'
                                            customClasses={{
                                                root: '!h-[48px]',
                                            }}
                                        >
                                            Thanh toán ngay
                                        </Button>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
            {/* Detail */}
        </div>
    );
};

export default FlightBookingDetail;
