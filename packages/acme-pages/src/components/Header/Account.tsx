import { Avatar, Divider, IconButton, Popover, PopoverContent, PopoverTrigger, Typography } from '@acme/design-system';
import { getCookieValue, removeCookie } from '@acme/utils';
import React, { useState } from 'react';
import { UserInfo } from '.';
import AuthModal from './AuthModal';

type Props = {};

const fallbackAvatar =
    'data:image/png;base64,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';

const Account: React.FC<Props> = (props) => {
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(
        getCookieValue('fly-user-info') as UserInfo | undefined,
    );

    const handleLogout = () => {
        removeCookie('fly-token');
        removeCookie('fly-refresh-token');
        removeCookie('fly-user-info');
        setUserInfo(undefined);
    };

    return (
        <>
            <AuthModal
                visible={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLoginSuccess={(userInfo) => {
                    setUserInfo(userInfo);
                    setShowLoginModal(false);
                }}
            />
            <Popover placement='bottom-end'>
                <div className='flex gap-2.5'>
                    {userInfo ? (
                        <div className='h-[40px] flex gap-4 items-center'>
                            <div className='flex gap-2 items-center'>
                                <IconButton
                                    size='lg'
                                    variant='contained'
                                    customClasses={{
                                        root: '!bg-white !text-grey-800',
                                    }}
                                >
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
                                            d='M7.7587 4H16.2413C17.0463 3.99999 17.7106 3.99998 18.2518 4.04419C18.8139 4.09012 19.3306 4.18868 19.816 4.43597C20.5686 4.81947 21.1805 5.43139 21.564 6.18404C21.8113 6.66937 21.9099 7.18608 21.9558 7.74817C22 8.28936 22 8.95372 22 9.75868V14.2413C22 15.0463 22 15.7106 21.9558 16.2518C21.9099 16.8139 21.8113 17.3306 21.564 17.816C21.1805 18.5686 20.5686 19.1805 19.816 19.564C19.3306 19.8113 18.8139 19.9099 18.2518 19.9558C17.7106 20 17.0463 20 16.2413 20H7.75872C6.95374 20 6.28938 20 5.74817 19.9558C5.18608 19.9099 4.66937 19.8113 4.18404 19.564C3.43139 19.1805 2.81947 18.5686 2.43597 17.816C2.18868 17.3306 2.09012 16.8139 2.04419 16.2518C1.99998 15.7106 1.99999 15.0463 2 14.2413V9.7587C1.99999 8.95373 1.99998 8.28937 2.04419 7.74818C2.09012 7.18608 2.18868 6.66937 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C4.66937 4.18868 5.18608 4.09012 5.74817 4.04419C6.28937 3.99998 6.95373 3.99999 7.7587 4ZM5.91104 6.03755C5.47262 6.07337 5.24842 6.1383 5.09202 6.21799C4.7157 6.40973 4.40973 6.7157 4.21799 7.09202C4.1383 7.24842 4.07337 7.47262 4.03755 7.91104C4.00078 8.36113 4 8.94342 4 9.8V14.2C4 15.0566 4.00078 15.6389 4.03755 16.089C4.07337 16.5274 4.1383 16.7516 4.21799 16.908C4.40973 17.2843 4.7157 17.5903 5.09202 17.782C5.24842 17.8617 5.47262 17.9266 5.91104 17.9624C6.36113 17.9992 6.94342 18 7.8 18H16.2C17.0566 18 17.6389 17.9992 18.089 17.9624C18.5274 17.9266 18.7516 17.8617 18.908 17.782C19.2843 17.5903 19.5903 17.2843 19.782 16.908C19.8617 16.7516 19.9266 16.5274 19.9624 16.089C19.9992 15.6389 20 15.0566 20 14.2V9.8C20 8.94342 19.9992 8.36113 19.9624 7.91104C19.9266 7.47262 19.8617 7.24842 19.782 7.09202C19.5903 6.7157 19.2843 6.40973 18.908 6.21799C18.7516 6.1383 18.5274 6.07337 18.089 6.03755C17.6389 6.00078 17.0566 6 16.2 6H7.8C6.94342 6 6.36113 6.00078 5.91104 6.03755Z'
                                            fill='#212B36'
                                        />
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M6.17548 8.43431C6.4879 7.97889 7.11036 7.86296 7.56578 8.17538L11.4344 10.8293C11.7753 11.0631 12.2249 11.0631 12.5658 10.8293L16.4344 8.17538C16.8898 7.86296 17.5123 7.97889 17.8247 8.43431C18.1371 8.88974 18.0212 9.5122 17.5658 9.82462L13.6972 12.4785C12.6745 13.18 11.3257 13.18 10.303 12.4785L6.43441 9.82462C5.97898 9.5122 5.86305 8.88974 6.17548 8.43431Z'
                                            fill='#212B36'
                                        />
                                    </svg>
                                </IconButton>
                                <IconButton
                                    size='lg'
                                    variant='contained'
                                    customClasses={{
                                        root: '!bg-white !text-grey-800',
                                    }}
                                >
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
                                            d='M16 11.7889V10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10V11.7889C8 12.9734 7.64937 14.1315 6.9923 15.1171L6.43257 15.9567C6.15051 16.3798 6 16.8769 6 17.3854C6 17.7248 6.27518 18 6.61462 18H17.3854C17.7248 18 18 17.7248 18 17.3854C18 16.8769 17.8495 16.3798 17.5674 15.9567L17.0077 15.1171C16.3506 14.1315 16 12.9734 16 11.7889ZM18 10V11.7889C18 12.5786 18.2338 13.3506 18.6718 14.0077L19.2315 14.8473C19.7326 15.5989 20 16.482 20 17.3854C20 18.8294 18.8294 20 17.3854 20H6.61462C5.17061 20 4 18.8294 4 17.3854C4 16.482 4.26739 15.5989 4.76847 14.8473L5.3282 14.0077C5.76625 13.3506 6 12.5786 6 11.7889V10C6 6.68629 8.68629 4 12 4C15.3137 4 18 6.68629 18 10Z'
                                            fill='#212B36'
                                        />
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z'
                                            fill='#212B36'
                                        />
                                        <circle cx='12' cy='20' r='2' fill='#212B36' />
                                    </svg>
                                </IconButton>
                            </div>
                            <PopoverTrigger>
                                <Avatar
                                    src={userInfo.avatar || fallbackAvatar}
                                    showBadge
                                    customClasses={{
                                        root: 'cursor-pointer',
                                        badge: '!ring-1',
                                    }}
                                />
                            </PopoverTrigger>
                            <PopoverContent className='z-[100] !min-w-[298px]'>
                                <div className='py-6 rounded-lg shadow bg-white'>
                                    <div className='flex gap-4 pb-6 pl-4'>
                                        <div>
                                            <Avatar
                                                src={userInfo.avatar || fallbackAvatar}
                                                size='72'
                                                showBadge
                                                customClasses={{
                                                    badge: '!bg-white !ring-1 !ring-primary-light cursor-pointer',
                                                    root: 'ring-1 ring-primary-light p-[1px] !bg-white',
                                                }}
                                                badgeContent={
                                                    <svg
                                                        width='16'
                                                        height='16'
                                                        viewBox='0 0 16 16'
                                                        fill='none'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                        <path
                                                            fill-rule='evenodd'
                                                            clip-rule='evenodd'
                                                            d='M5.21937 2.07039C5.44523 1.61868 5.90691 1.33334 6.41194 1.33334H9.5879C10.0929 1.33334 10.5546 1.61868 10.7805 2.07039L11.0786 2.66668H11.3333C13.1742 2.66668 14.6666 4.15906 14.6666 6.00001V11.3333C14.6666 13.1743 13.1742 14.6667 11.3333 14.6667H4.66659C2.82564 14.6667 1.33325 13.1743 1.33325 11.3333V6.00001C1.33325 4.15906 2.82564 2.66668 4.66659 2.66668H4.92123L5.21937 2.07039ZM9.5879 2.66668L6.41194 2.66668L5.74527 4.00001H4.66659C3.56202 4.00001 2.66659 4.89544 2.66659 6.00001V11.3333C2.66659 12.4379 3.56202 13.3333 4.66659 13.3333H11.3333C12.4378 13.3333 13.3333 12.4379 13.3333 11.3333V6.00001C13.3333 4.89544 12.4378 4.00001 11.3333 4.00001H10.2546L9.5879 2.66668Z'
                                                            fill='#212B36'
                                                        />
                                                        <path
                                                            fill-rule='evenodd'
                                                            clip-rule='evenodd'
                                                            d='M8.00008 6.66668C6.89551 6.66668 6.00008 7.56211 6.00008 8.66668C6.00008 9.77125 6.89551 10.6667 8.00008 10.6667C9.10465 10.6667 10.0001 9.77125 10.0001 8.66668C10.0001 7.56211 9.10465 6.66668 8.00008 6.66668ZM4.66675 8.66668C4.66675 6.82573 6.15913 5.33334 8.00008 5.33334C9.84103 5.33334 11.3334 6.82573 11.3334 8.66668C11.3334 10.5076 9.84103 12 8.00008 12C6.15913 12 4.66675 10.5076 4.66675 8.66668Z'
                                                            fill='#212B36'
                                                        />
                                                    </svg>
                                                }
                                            />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <Typography variant='subtitle16'>{userInfo.displayname}</Typography>
                                            <Typography
                                                variant='caption'
                                                customClasses={{
                                                    root: '!text-grey-600',
                                                }}
                                            >
                                                {userInfo.unique_name}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div className='flex flex-col px-3 pt-3'>
                                        <div className='flex gap-2 py-3 pr-3 pl-7 cursor-pointer hover:bg-grey-300 rounded-lg group'>
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
                                                    d='M4 3H20V19.492C20 21.5484 17.6555 22.7254 16.0064 21.4968L15.3017 20.9718C15.124 20.8394 14.8803 20.8398 14.703 20.9727L14.4 21.2C12.9778 22.2667 11.0222 22.2667 9.6 21.2L9.297 20.9727C9.11969 20.8398 8.87601 20.8394 8.69828 20.9718L7.99358 21.4968C6.34449 22.7254 4 21.5484 4 19.492V3ZM6 5V19.492C6 19.9033 6.4689 20.1387 6.79872 19.8929L7.50342 19.3679C8.39206 18.7059 9.61048 18.7079 10.497 19.3727L10.8 19.6C11.5111 20.1333 12.4889 20.1333 13.2 19.6L13.503 19.3727C14.3895 18.7079 15.6079 18.7059 16.4966 19.3679L17.2013 19.893C17.5311 20.1387 18 19.9033 18 19.492V5H6Z'
                                                    fill='#212B36'
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
                                                    fill='#212B36'
                                                />
                                                <path
                                                    d='M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z'
                                                    fill='#212B36'
                                                />
                                            </svg>

                                            <Typography variant='body16' className='group-hover:!text-primary'>
                                                Quản lý đơn hàng
                                            </Typography>
                                        </div>

                                        <div className='flex gap-2 py-3 pr-3 pl-7 cursor-pointer hover:bg-grey-300 rounded-lg group'>
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
                                                    d='M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                                                    fill='#212B36'
                                                />
                                                <path
                                                    fill-rule='evenodd'
                                                    clip-rule='evenodd'
                                                    d='M15 16H9C7.34315 16 6 17.3431 6 19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19C18 17.3431 16.6569 16 15 16ZM9 14C6.23858 14 4 16.2386 4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19C20 16.2386 17.7614 14 15 14H9Z'
                                                    fill='#212B36'
                                                />
                                            </svg>

                                            <Typography variant='body16' className='group-hover:!text-primary'>
                                                Thông tin cá nhân
                                            </Typography>
                                        </div>

                                        <div
                                            onClick={handleLogout}
                                            className='flex gap-2 py-3 pr-3 pl-7 cursor-pointer hover:bg-grey-300 rounded-lg group'
                                        >
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
                                                    d='M7.70711 7.79289C8.09763 8.18342 8.09763 8.81658 7.70711 9.20711L5.91421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H5.91421L7.70711 14.7929C8.09763 15.1834 8.09763 15.8166 7.70711 16.2071C7.31658 16.5976 6.68342 16.5976 6.29289 16.2071L2.79289 12.7071C2.40237 12.3166 2.40237 11.6834 2.79289 11.2929L6.29289 7.79289C6.68342 7.40237 7.31658 7.40237 7.70711 7.79289Z'
                                                    fill='#212B36'
                                                />
                                                <path
                                                    fill-rule='evenodd'
                                                    clip-rule='evenodd'
                                                    d='M10 4C10 3.44772 10.4477 3 11 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H11C10.4477 21 10 20.5523 10 20C10 19.4477 10.4477 19 11 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H11C10.4477 5 10 4.55228 10 4Z'
                                                    fill='#212B36'
                                                />
                                            </svg>

                                            <Typography variant='body16' className='group-hover:!text-primary'>
                                                Đăng xuất
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </div>
                    ) : (
                        <div className='h-[40px] flex gap-2 items-center'>
                            <Typography
                                onClick={() => setShowLoginModal(true)}
                                variant='body14'
                                className='text-[13px] py-2 cursor-pointer hover:text-primary'
                            >
                                Đăng nhập/Đăng ký
                            </Typography>
                            <Avatar
                                customClasses={{
                                    badge: 'invisible',
                                }}
                                src={fallbackAvatar}
                            />
                        </div>
                    )}
                </div>
            </Popover>
        </>
    );
};

export default Account;
