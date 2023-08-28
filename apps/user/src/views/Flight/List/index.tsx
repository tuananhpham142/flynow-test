'use client';
import React from 'react';
import Filter from '@/views/Flight/List/components/Filter';
import { Breadcrumb, BreadcrumbItem, Button, Chip, Divider, ListRenderer, Typography } from '@acme/design-system';
import FlightBookingCard from './components/FlightBookingCard';

type Props = {};

const FlightBookingList = (props: Props) => {
    const [isCollapsedFilter, setIsCollapsedFilter] = React.useState<boolean>(true);

    const handleToggleCollapse = () => {
        setIsCollapsedFilter((prev) => !prev);
    };
    return (
        <div className='flex flex-col gap-4'>
            {/* Filter */}
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <Breadcrumb>
                        <BreadcrumbItem icon={<i className='icon icon-home-fill' />}>Tổng quan</BreadcrumbItem>
                        <BreadcrumbItem>Đơn hàng vé máy bay</BreadcrumbItem>
                    </Breadcrumb>
                    <div className={'flex justify-between items-end'}>
                        <Typography htmlTag={'h5'} variant={'h5'} className=''>
                            Đơn hàng vé máy bay
                        </Typography>
                        <Button
                            onClick={handleToggleCollapse}
                            variant={'text'}
                            endIcon={
                                <i
                                    className={`icon ${
                                        isCollapsedFilter ? 'icon-caret-down' : 'icon-caret-up'
                                    } text-[16px]`}
                                />
                            }
                        >
                            Lọc đơn hàng
                        </Button>
                    </div>

                    <Divider />

                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <Typography>Trạng thái đơn hàng</Typography>
                            </div>

                            <div className='flex gap-1'>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Tất cả
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Thành công
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Chờ đặt vé
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                    color='warning'
                                    checked
                                >
                                    Đang giữ chỗ
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Hết hạn giữ chỗ
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Đang xuất vé
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Thất bại
                                </Chip>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div>
                                <Typography>Trạng thái thanh toán</Typography>
                            </div>

                            <div className='flex gap-1'>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Tất cả
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Thành công
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                    color='warning'
                                    checked
                                >
                                    Chờ thanh toán
                                </Chip>
                                <Chip
                                    customClasses={{
                                        root: 'cursor-pointer',
                                    }}
                                >
                                    Thất bại
                                </Chip>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Filter isCollapsed={isCollapsedFilter} />
                </div>
            </div>

            {/* Filter */}

            {/* List */}
            <div className=''>
                <ListRenderer
                    items={Array.apply(null, Array(5))}
                    renderItem={(item) => <FlightBookingCard />}
                    customClasses={{
                        wrapper: 'flex flex-col gap-3 w-full',
                        itemWrapper: 'flex-1 flex-col',
                    }}
                />
            </div>
            {/* List */}
        </div>
    );
};

export default FlightBookingList;
