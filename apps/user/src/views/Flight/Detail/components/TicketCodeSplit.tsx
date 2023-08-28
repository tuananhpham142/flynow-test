import { Button, Card, Checkbox, Divider, Drawer, Input, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const TicketCodeSplit = (props: Props) => {
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
                            d='M14 4H10V8H14V4ZM10 2C8.89543 2 8 2.89543 8 4V8C8 9.10457 8.89543 10 10 10H14C15.1046 10 16 9.10457 16 8V4C16 2.89543 15.1046 2 14 2H10Z'
                            fill='#212B36'
                        />
                        <path
                            d='M2 17C2 15.8954 2.89543 15 4 15H7C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17Z'
                            fill='#4469AF'
                        />
                        <path
                            d='M15 17C15 15.8954 15.8954 15 17 15H20C21.1046 15 22 15.8954 22 17V20C22 21.1046 21.1046 22 20 22H17C15.8954 22 15 21.1046 15 20V17Z'
                            fill='#4469AF'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M12 8.58578L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L12 8.58578Z'
                            fill='#212B36'
                        />
                    </svg>
                }
            >
                Tách code
            </Button>
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                        <div className='max-w-[1200px] pt-8 mx-auto'>
                            <Typography variant='h5'>Tách code</Typography>
                            <div className='grid grid-cols-10 gap-6 pt-8'>
                                <div className='col-span-4'>
                                    <Card
                                        border
                                        rounded='lg'
                                        customClasses={{
                                            root: '!bg-grey-100',
                                        }}
                                        noPadding
                                        variant='border'
                                        body={
                                            <div className='flex flex-col gap-4 p-3'>
                                                <Typography variant='subtitle16'>Chọn khách hàng</Typography>
                                                <div>
                                                    {Array.from({ length: 7 }).map((_, index) => {
                                                        return (
                                                            <>
                                                                {index !== 0 && <Divider />}
                                                                <div className='p-2 flex gap-3'>
                                                                    <Checkbox />
                                                                    <div className='flex-1 flex justify-between'>
                                                                        <div className='flex flex-col gap-1'>
                                                                            <Typography variant='body16'>
                                                                                Nguyễn Đình Nam
                                                                            </Typography>
                                                                            <Typography
                                                                                variant='body14'
                                                                                className='!text-grey-500'
                                                                            >
                                                                                20/04/1997
                                                                            </Typography>
                                                                        </div>
                                                                        <Typography
                                                                            variant='body14'
                                                                            className='!text-grey-500'
                                                                        >
                                                                            Người lớn {index + 1}
                                                                        </Typography>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                                <div className='col-span-6'>
                                    <div className='flex flex-col gap-8'>
                                        <div className='flex flex-col gap-3'>
                                            <Typography variant='subtitle16'>Quy định tách code</Typography>
                                            <Typography variant='body14'>Thu phí:</Typography>
                                            <div className='pl-2'>
                                                <div className='flex gap-1'>
                                                    <Typography variant='body14'>•</Typography>
                                                    <Typography variant='body14'>
                                                        Trước ngày khởi hành chặng bay ghi trên vé: 300,000₫
                                                    </Typography>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <Typography variant='body14'>•</Typography>
                                                    <Typography variant='body14'>
                                                        Từ ngày khởi hành chặng bay ghi trên vé: 300,000₫ (riêng giai
                                                        đoạn Tết nguyên đán: 600,000₫)
                                                    </Typography>
                                                </div>
                                            </div>
                                            <Typography variant='body14'>
                                                Còn đối với hoàn vé Vietnam Airlines đã sử dụng một phần, hành khách
                                                được nhận lại phần chênh lệch giữa giá vé đã mua mới với vé của chặng
                                                bay đã sử dụng, Phí hoàn vé do khách hàng trả. Vietnam Airlines cho phép
                                                khách hàng nâng lên hạng còn chỗ và phải trả phí thay đổi + chênh lệch
                                                giá vé.
                                            </Typography>
                                        </div>

                                        <div className='flex flex-col gap-4 w-96'>
                                            <div className='flex flex-col gap-1'>
                                                <Typography variant='subtitle16'>Chi phí cần thanh toán</Typography>
                                                <div className='flex justify-between items-center h-12'>
                                                    <Typography variant='body16'>Phí tách code</Typography>
                                                    <Typography variant='subtitle16' className='!text-warning'>
                                                        300,000₫
                                                    </Typography>
                                                </div>

                                                <Divider />
                                            </div>
                                            <div>
                                                <Button size='lg' rounded='lg' className='h-12 !px-6'>
                                                    Tiếp tục
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
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

export default TicketCodeSplit;
