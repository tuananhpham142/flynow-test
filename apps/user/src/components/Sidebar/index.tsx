'use client';
import React, { useEffect, useState } from 'react';
import { Divider, IconButton } from '@acme/design-system';
import { clsx } from '@acme/design-system';
import SidebarItem from './SidebarItem';
import { useRouter } from 'next/navigation';

type Props = {};

const getActivePath = () => {
    const path = window.location.pathname;
    const pathArr = path.split('/');
    const activePath = pathArr[pathArr.length - 1];
    return `/${activePath}`;
};

const Sidebar = (props: Props) => {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activePath, setActivePath] = useState('');

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const sidebarClasses = clsx(
        isCollapsed ? 'w-[64px]' : 'w-[300px]',
        'relative min-h-screen bg-white border-r border-grey-300 transition-all duration-300 -mb-10',
    );

    const sidebarStickyClasses = clsx(isCollapsed ? 'w-[64px]' : 'w-[300px]', 'fixed top-0 left-0 h-fit py-3 px-2');

    const isActivePath = (path: string) => {
        return activePath === path;
    };

    const handleNavigate = (path: string) => {
        setActivePath(path);
        router.push(path);
    };

    useEffect(() => {
        const path = window.location.pathname;
        const pathArr = path.split('/');
        const activePath = pathArr[pathArr.length - 1];
        setActivePath(`/${activePath}`);
    }, []);

    return (
        <aside className={sidebarClasses}>
            <div className={sidebarStickyClasses}>
                <div className='flex justify-start'>
                    <IconButton
                        size='lg'
                        variant='text'
                        customClasses={{
                            root: '!rounded-lg !w-12 !h-12',
                        }}
                        onClick={handleCollapse}
                    >
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z'
                                fill='#212B36'
                            />
                        </svg>
                    </IconButton>
                </div>

                <div className='flex flex-col gap-3 h-full mt-12'>
                    <SidebarItem
                        icon={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M10.5837 2.40577C11.3652 1.62194 12.6348 1.62194 13.4163 2.40577L15.59 4.58585C16.369 5.36724 16.3681 6.63196 15.5879 7.41219L13.4142 9.58585C12.6332 10.3669 11.3668 10.3669 10.5858 9.58585L8.41213 7.41219C7.63189 6.63196 7.63096 5.36723 8.41004 4.58585L10.5837 2.40577Z' />
                                <path d='M16.5837 8.4205C17.3652 7.63667 18.6348 7.63667 19.4163 8.4205L21.59 10.6006C22.369 11.382 22.3681 12.6467 21.5879 13.4269L19.4142 15.6006C18.6332 16.3816 17.3668 16.3816 16.5858 15.6006L14.4121 13.4269C13.6319 12.6467 13.631 11.382 14.41 10.6006L16.5837 8.4205Z' />
                                <path d='M4.5837 8.4205C5.36523 7.63666 6.63478 7.63666 7.4163 8.4205L9.58995 10.6006C10.369 11.382 10.3681 12.6467 9.58787 13.4269L7.41421 15.6006C6.63316 16.3816 5.36684 16.3816 4.58579 15.6006L2.41213 13.4269C1.6319 12.6467 1.63096 11.382 2.41005 10.6006L4.5837 8.4205Z' />
                                <path d='M10.5689 14.4057C11.3505 13.6219 12.62 13.6219 13.4015 14.4057L15.5752 16.5858C16.3543 17.3672 16.3533 18.6319 15.5731 19.4121L13.3994 21.5858C12.6184 22.3669 11.3521 22.3669 10.571 21.5858L8.39736 19.4121C7.61712 18.6319 7.61619 17.3672 8.39527 16.5858L10.5689 14.4057Z' />
                            </svg>
                        }
                        label='Tổng quan'
                        isCollapsed={isCollapsed}
                        isActive={isActivePath('/booking-dashboard')}
                        onClick={() => handleNavigate('/booking-dashboard')}
                    />
                    <Divider />

                    <div className='flex flex-col gap-2'>
                        <SidebarItem
                            icon={
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M3.39169 13.6489L2 15.0406L6.87091 17.1281L8.95943 22L10.3511 20.6083L9.65527 17.1281L12.916 13.8674L16.469 21.4498L17.7869 20.1319L16.6157 10.1687L19.3991 7.38432C19.5871 7.20274 19.737 6.98553 19.8402 6.74537C19.9434 6.50521 19.9977 6.24691 19.9999 5.98555C20.0022 5.72418 19.9524 5.46497 19.8534 5.22306C19.7544 4.98115 19.6083 4.76137 19.4235 4.57654C19.2386 4.39172 19.0189 4.24556 18.7769 4.14658C18.535 4.04761 18.2758 3.9978 18.0145 4.00007C17.7531 4.00235 17.4948 4.05665 17.2546 4.15981C17.0145 4.26298 16.7973 4.41294 16.6157 4.60094L13.7585 7.45814L3.79522 6.28593L2.55018 7.53195L10.0736 11.144L6.87189 14.3457L3.39169 13.6489Z' />
                                </svg>
                            }
                            label='Đơn hàng vé máy bay'
                            isCollapsed={isCollapsed}
                            isActive={isActivePath('/flight-booking')}
                            onClick={() => handleNavigate('/flight-booking')}
                        />

                        <SidebarItem
                            icon={
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M21 12V16H12V9C12 8.44772 12.4477 8 13 8H17C19.2091 8 21 9.79086 21 12Z' />
                                    <path
                                        d='M3 7V16M3 19V16M3 16H12M21 16V19M21 16V12C21 9.79086 19.2091 8 17 8H13C12.4477 8 12 8.44772 12 9V16M21 16H12'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                    />
                                    <circle cx='7.5' cy='11.5' r='2.5' />
                                </svg>
                            }
                            label='Quản lý đơn phòng'
                            isCollapsed={isCollapsed}
                            isActive={isActivePath('/accommodation-booking')}
                            onClick={() => handleNavigate('/accommodation-booking')}
                        />

                        <SidebarItem
                            icon={
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
                                        d='M11 4H17.4913C19.4765 4 20.6698 6.20247 19.5855 7.86541L18.1938 10L19.5855 12.1346C20.6698 13.7975 19.4765 16 17.4913 16H14C12.3431 16 11 14.6569 11 13V4Z'
                                    />
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M5 2C4.44772 2 4 2.44772 4 3V14H13V5C13 3.34315 11.6569 2 10 2H5Z'
                                    />
                                    <path d='M4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3V21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21V3Z' />
                                </svg>
                            }
                            label='Tour đã đặt'
                            isCollapsed={isCollapsed}
                            isActive={isActivePath('/tour-booking')}
                            onClick={() => handleNavigate('/tour-booking')}
                        />
                    </div>

                    <Divider />
                    <div className='flex flex-col gap-2'>
                        <SidebarItem
                            icon={
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
                                        d='M12 4.52779C10.9385 3.57771 9.53671 3 8 3C4.68629 3 2 5.68629 2 9C2 16.3511 8.67146 19.8061 11.116 20.8254C11.6855 21.0628 12.3145 21.0628 12.884 20.8254C15.3285 19.8061 22 16.3512 22 9.00005C22 5.68634 19.3137 3 16 3C14.4633 3 13.0615 3.57771 12 4.52779Z'
                                    />
                                </svg>
                            }
                            label='Danh sách yêu thích'
                            isCollapsed={isCollapsed}
                            isActive={isActivePath('/wishlist')}
                            onClick={() => handleNavigate('/wishlist')}
                        />
                        <SidebarItem
                            icon={
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path d='M12 12C8.81933 12 6.13414 14.1214 5.28208 17.0264C4.9712 18.0863 5.89543 19 7 19H17C18.1046 19 19.0288 18.0863 18.7179 17.0264C17.8659 14.1214 15.1807 12 12 12Z' />
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M18.4852 19H22C23.1046 19 24.0327 18.08 23.6713 17.0362C22.8579 14.6869 20.626 13 18 13C17.5488 13 17.1093 13.0498 16.6865 13.1442C17.8701 14.0928 18.7598 15.3927 19.1977 16.8857C19.4073 17.6001 19.1948 18.2716 18.7586 18.7482C18.6752 18.8394 18.5836 18.9236 18.4852 19Z'
                                    />
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M7.31349 13.1442C6.12991 14.0928 5.24018 15.3927 4.80229 16.8857C4.59274 17.6001 4.80522 18.2716 5.24138 18.7482C5.32483 18.8394 5.41638 18.9236 5.5148 19H1.99998C0.895415 19 -0.0326477 18.08 0.328728 17.0362C1.14209 14.6869 3.37403 13 5.99998 13C6.45119 13 6.89075 13.0498 7.31349 13.1442Z'
                                    />
                                    <circle cx='6' cy='10' r='2' />
                                    <circle cx='18' cy='10' r='2' />
                                    <circle cx='12' cy='8' r='3' />
                                </svg>
                            }
                            label='Danh sách khách hàng'
                            isCollapsed={isCollapsed}
                            isActive={isActivePath('/customer-list')}
                            onClick={() => handleNavigate('/customer-list')}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
