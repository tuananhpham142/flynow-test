import { Button, Card, Divider, Drawer, IconButton, Input, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const PromotionCard = (props: Props) => {
    const [showDrawer, setShowDrawer] = React.useState(false);

    const PromotionCode: React.FC<any> = () => {
        return (
            <div className='flex gap-2 rounded-lg border border-grey-300 p-3'>
                <div>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M3.39169 13.6489L2 15.0406L6.87091 17.1281L8.95943 22L10.3511 20.6083L9.65527 17.1281L12.916 13.8674L16.469 21.4498L17.7869 20.1319L16.6157 10.1687L19.3991 7.38432C19.5871 7.20274 19.737 6.98553 19.8402 6.74537C19.9434 6.50521 19.9977 6.24691 19.9999 5.98555C20.0022 5.72418 19.9524 5.46497 19.8534 5.22306C19.7544 4.98115 19.6083 4.76137 19.4235 4.57654C19.2386 4.39172 19.0189 4.24556 18.7769 4.14658C18.535 4.04761 18.2758 3.9978 18.0145 4.00007C17.7531 4.00235 17.4948 4.05665 17.2546 4.15981C17.0145 4.26298 16.7973 4.41294 16.6157 4.60094L13.7585 7.45814L3.79522 6.28593L2.55018 7.53195L10.0736 11.144L6.87189 14.3457L3.39169 13.6489Z'
                            fill='#007864'
                        />
                    </svg>
                </div>
                <div className='flex-1 flex flex-col gap-2'>
                    <Typography variant='subtitle14'>Giảm 100.000đ x 20 vé máy bay quốc tế</Typography>
                    <div className='flex'>
                        <div className='pr-6'>
                            <Typography
                                variant='body14'
                                customClasses={{
                                    root: '!text-grey-500',
                                }}
                            >
                                Mã khuyến mãi
                            </Typography>
                            <Typography variant='body14'>GJKH58756DFF</Typography>
                        </div>
                        <Divider vertical />
                        <div className='pl-2'>
                            <Typography
                                variant='body14'
                                customClasses={{
                                    root: '!text-grey-500',
                                }}
                            >
                                Hạn dùng
                            </Typography>
                            <Typography
                                variant='body14'
                                customClasses={{
                                    root: '!text-danger',
                                }}
                            >
                                1 ngày
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='flex flex-col gap-4 p-4 card-animation'>
                        <div
                            onClick={(e) => {
                                e?.preventDefault();
                                e?.stopPropagation();
                                setShowDrawer(true);
                            }}
                            className='flex items-center gap-1 cursor-pointer w-fit'
                        >
                            <Typography htmlTag='h5' variant='subtitle20'>
                                Ưu đãi
                            </Typography>
                            <IconButton
                                size='md'
                                variant='text'
                                customClasses={{
                                    root: 'rounded-xl !bg-white',
                                }}
                            >
                                <i className='icon icon-list text-2xl text-grey-900' />
                            </IconButton>
                        </div>

                        <div className='flex items-end gap-6'>
                            <div className='flex-1'>
                                <Input label='Mã ưu đãi' placeholder='Nhập' fullWidth size='lg' />
                            </div>
                            <div className='flex-1'>
                                <Button size='lg' disabled>
                                    Áp dụng
                                </Button>
                            </div>
                        </div>
                    </div>
                }
            />
            <Drawer
                position='right'
                openDuration={300}
                body={
                    <div className='bg-white h-screen w-[340px] p-6'>
                        <div className='pb-3 pt-2 flex justify-between'>
                            <Typography htmlTag='h5' variant='subtitle16'>
                                Chọn ưu đãi
                            </Typography>
                            <IconButton
                                onClick={() => {
                                    setShowDrawer(false);
                                }}
                                size='md'
                                variant='text'
                                customClasses={{
                                    root: 'rounded-xl !bg-white',
                                }}
                            >
                                <i className='icon icon-close text-2xl text-grey-900' />
                            </IconButton>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Input
                                size='lg'
                                fullWidth
                                startAdornment={<i className='icon icon-search text-2xl text-grey-900' />}
                                placeholder='VD: NHYUT20%'
                            />

                            {Array.apply(null, Array(7)).map((item) => (
                                <PromotionCode />
                            ))}
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

export default PromotionCard;
