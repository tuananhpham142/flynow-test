import { Card, Checkbox, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const InsuranceCard = (props: Props) => {
    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='flex flex-col gap-4 p-4'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <Checkbox />

                                <Typography htmlTag='h5' variant='subtitle20'>
                                    Mua bảo hiểm
                                </Typography>
                            </div>
                            <div className='flex items-center gap-1'>
                                <Typography htmlTag='span' variant='caption'>
                                    Được cung cấp bởi Tổng công ty bảo hiểm
                                </Typography>
                                <svg
                                    width='40'
                                    height='14'
                                    viewBox='0 0 40 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M39.4435 8.34829L35.0296 12.7621C34.2877 13.504 33.075 13.504 32.3331 12.7621L27.9192 8.34829C27.1773 7.60639 27.1773 6.39362 27.9192 5.65172L32.3331 1.23789C33.075 0.495982 34.2877 0.495982 35.0296 1.23789L39.4435 5.65172C40.1854 6.39362 40.1854 7.60639 39.4435 8.34829Z'
                                        fill='#DA251C'
                                    />
                                    <path
                                        d='M35.5619 10.0002H31.8049C31.1876 10.0002 30.6831 9.49572 30.6831 8.87845V5.12145C30.6831 4.50419 31.1876 3.99969 31.8049 3.99969H35.5619C36.1791 3.99969 36.6836 4.50419 36.6836 5.12145V8.87845C36.6836 9.49572 36.1791 10.0002 35.5619 10.0002Z'
                                        fill='white'
                                    />
                                    <path
                                        d='M8.71292 7.00877C9.54187 6.65068 10.8021 5.73467 10.1354 4.46058C9.89996 4.01543 8.614 2.59296 5.31203 2.59296C2.01006 2.59296 0 2.60285 0 2.60285V11.4483H5.52372C5.52372 11.4483 9.34403 11.3731 10.2482 9.3334C10.4697 8.69042 10.2956 7.82387 8.71292 7.00877ZM5.13397 10.0496H3.10017V7.68934H5.14584C5.14584 7.68934 7.21724 7.71308 7.21724 8.86056C7.21724 10.008 5.13397 10.0496 5.13397 10.0496ZM5.13397 6.34007H3.10017V3.97982H5.14584C5.14584 3.97982 7.21724 4.00356 7.21724 5.15104C7.21724 6.29852 5.13397 6.34007 5.13397 6.34007Z'
                                        fill='#004F53'
                                    />
                                    <path d='M14.3653 2.59503H11.2117V11.4484H14.3653V2.59503Z' fill='#004F53' />
                                    <path
                                        d='M22.7358 10.0498C22.7358 10.0498 18.4486 10.3999 18.4486 7.07027C18.4486 3.7406 22.7516 3.99977 22.7516 3.99977H26.016V2.59906C26.016 2.59906 24.7795 2.59906 22.257 2.59906C18.1855 2.59906 15.2495 4.58143 15.2495 6.98915C15.2495 9.47799 18.1835 11.4524 22.257 11.4524C24.6806 11.4524 26.016 11.4524 26.016 11.4524V10.0517H22.7358V10.0498Z'
                                        fill='#004F53'
                                    />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <Typography
                                customClasses={{
                                    root: 'text-warning',
                                }}
                                variant='subtitle16'
                            >
                                86.762₫/Người
                            </Typography>
                        </div>
                    </div>

                    <div>
                        <Typography
                            htmlTag='p'
                            customClasses={{
                                root: '!text-sm',
                            }}
                        >
                            Mỗi hành trình, mỗi chuyến đi, BIC luôn đồng hành
                        </Typography>
                        <Typography
                            htmlTag='p'
                            customClasses={{
                                root: 'text-grey-500 !text-sm',
                            }}
                        >
                            (Độ tuổi đủ điều kiện tham gia bảo hiểm: từ 06 tháng đến 80 tuổi)
                        </Typography>

                        <div className='py-4'>
                            <Typography
                                htmlTag='p'
                                customClasses={{
                                    root: '!text-sm',
                                }}
                            >
                                ⬝ Lên tới 2 tỷ đồng cho quyền lợi tai nạn cá nhân
                            </Typography>
                            <Typography
                                htmlTag='p'
                                customClasses={{
                                    root: '!text-sm',
                                }}
                            >
                                ⬝ Lên tới 1 tỷ đồng cho quyền lợi chi phí y tế
                            </Typography>
                            <Typography
                                htmlTag='p'
                                customClasses={{
                                    root: '!text-sm',
                                }}
                            >
                                ⬝ Lên đến 51 triệu đồng cho quyền lợi Hủy chuyến bay và 6,3 triệu đồng cho quyền lợi
                                hoãn chuyến bay
                            </Typography>
                            <Typography
                                htmlTag='p'
                                customClasses={{
                                    root: '!text-sm',
                                }}
                            >
                                ⬝ Lên tới 2,1 triệu đồng cho quyền lợi mất giấy tờ thông hành mang theo
                            </Typography>
                            <Typography
                                htmlTag='p'
                                customClasses={{
                                    root: '!text-sm',
                                }}
                            >
                                ⬝ Và các quyền lợi khác
                            </Typography>
                        </div>
                        <Typography
                            htmlTag='p'
                            customClasses={{
                                root: '!text-sm',
                            }}
                        >
                            Với việc lựa chọn BIC, tôi đã hiểu và đồng ý với tất cả Quyền lợi, Quy tắc bảo hiểm do BIC
                            quy định.
                        </Typography>
                    </div>
                </div>
            }
        />
    );
};

export default InsuranceCard;
