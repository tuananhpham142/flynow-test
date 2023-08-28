import { Button, Card, Checkbox, Drawer, Input, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const InvoiceIssuance = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setOpen(true);
                }}
                size='lg'
                variant='outline'
                rounded='lg'
                startIcon={
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M4 3H20V19.492C20 21.5484 17.6555 22.7254 16.0064 21.4968L15.3017 20.9718C15.124 20.8394 14.8803 20.8398 14.703 20.9727L14.4 21.2C12.9778 22.2667 11.0222 22.2667 9.6 21.2L9.297 20.9727C9.11969 20.8398 8.87601 20.8394 8.69828 20.9718L7.99358 21.4968C6.34449 22.7254 4 21.5484 4 19.492V3ZM6 5V19.492C6 19.9033 6.4689 20.1387 6.79872 19.8929L7.50342 19.3679C8.39206 18.7059 9.61048 18.7079 10.497 19.3727L10.8 19.6C11.5111 20.1333 12.4889 20.1333 13.2 19.6L13.503 19.3727C14.3895 18.7079 15.6079 18.7059 16.4966 19.3679L17.2013 19.893C17.5311 20.1387 18 19.9033 18 19.492V5H6Z'
                            fill='#4469AF'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M8 9C8 8.44772 8.44772 8 9 8H11C11.5523 8 12 8.44772 12 9C12 9.55228 11.5523 10 11 10H9C8.44772 10 8 9.55228 8 9ZM8 13C8 12.4477 8.44772 12 9 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H9C8.44772 14 8 13.5523 8 13Z'
                            fill='#212B36'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3C2.44772 5 2 4.55228 2 4Z'
                            fill='#212B36'
                        />
                        <path
                            d='M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z'
                            fill='#4469AF'
                        />
                        <path
                            d='M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z'
                            fill='#4469AF'
                        />
                    </svg>
                }
            >
                Xuất hoá đơn
            </Button>
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                        <div className='max-w-[1200px] pt-8 mx-auto'>
                            <Typography variant='h5'>Xuất hoá đơn</Typography>
                            <div className='flex gap-6 items-center pt-8'>
                                <div className='flex-1 flex flex-col gap-6'>
                                    <Typography variant='subtitle16'>Thông tin nhận hoá đơn</Typography>
                                    <div className='flex flex-col gap-4'>
                                        <Checkbox size='lg' label='Sử dụng thông tin mặc định' />
                                        <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                                            <Input fullWidth size='lg' label='Tên khách hàng' />
                                            <Input fullWidth size='lg' label='Mã số thuế' />
                                            <Input fullWidth required size='lg' label='Mã số thuế' />
                                            <Input fullWidth required size='lg' label='Mã số thuế' />
                                        </div>

                                        <div className='flex gap-1'>
                                            <div>
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
                                                        d='M8.42112 5.21021C9.89432 2.25869 14.1059 2.25871 15.579 5.21024L20.5719 15.2135C21.8992 17.8729 19.9652 20.9998 16.9929 20.9998H7.0071C4.03478 20.9998 2.10074 17.8729 3.42816 15.2135L8.42112 5.21021ZM12 6.99982C12.5522 6.99982 13 7.44753 13 7.99982V11.9998C13 12.5521 12.5522 12.9998 12 12.9998C11.4477 12.9998 11 12.5521 11 11.9998V7.99982C11 7.44753 11.4477 6.99982 12 6.99982ZM11 15.9998C11 15.4475 11.4477 14.9998 12 14.9998C12.5522 14.9998 13 15.4475 13 15.9998C13 16.5521 12.5522 16.9998 12 16.9998C11.4477 16.9998 11 16.5521 11 15.9998Z'
                                                        fill='#FF0000'
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <Typography variant='body14' className='!text-grey-600'>
                                                    Tên khách hàng: là thông tin Họ tên khách hàng hiển thị trên hoá
                                                    đơn, nếu quý khách không cần hiển thị vui lòng bỏ qua mục này.
                                                </Typography>
                                                <Typography variant='body14' className='!text-grey-600'>
                                                    Mã số thuế: Đây là trường không bắt buộc, đơn vị không có mã số thuế
                                                    vui lòng bỏ qua.
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className='!h-14 !px-6' rounded='lg' size='lg'>
                                            Gửi yêu cầu
                                        </Button>
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <Card
                                        border
                                        rounded='lg'
                                        customClasses={{
                                            root: '!bg-grey-100',
                                        }}
                                        variant='border'
                                        body={
                                            <div className='flex flex-col gap-4'>
                                                <Typography variant='subtitle16'>Thông tin người nhận</Typography>
                                                <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                                                    <Input fullWidth required size='lg' label='Họ tên' />
                                                    <Input fullWidth required size='lg' label='Địa chỉ' />
                                                    <Input fullWidth required size='lg' label='Số điện thoại' />
                                                    <Input fullWidth required size='lg' label='Email' />
                                                    <div className='col-span-2'>
                                                        <Input fullWidth size='lg' label='Ghi chú' />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                lockScroll={true}
                isOpen={open}
                outSideClick={true}
                onClose={(state) => {
                    setOpen(state);
                }}
            />
        </>
    );
};

export default InvoiceIssuance;
