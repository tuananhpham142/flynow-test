import React, { useState } from 'react';
import { Button, Checkbox, Input, Modal, TabPane, Tabs, Tooltip } from '@acme/design-system';
type Props = {
    visible: boolean;
    onClose: (booleanValue: boolean) => void;
};

enum AuthTabs {
    Login = 1,
    Register = 2,
}

const AuthModal = (props: Props) => {
    const { visible, onClose } = props;

    const [value, setValue] = useState<AuthTabs>(AuthTabs.Login);
    const handleChangeTab = (val: AuthTabs, event: React.SyntheticEvent) => {
        setValue(val);
    };
    return (
        <Modal
            outSideClick={true}
            lockScroll={true}
            isOpen={visible}
            body={
                <div className='w-[800px] h-[580px] flex bg-white rounded-2xl overflow-hidden'>
                    <div className='relative w-[350px] flex-shrink-0'>
                        <img
                            className='absolute h-full w-full object-cover'
                            src='https://flypensacola.com/wp-content/uploads/2020/06/morning-sunrise-with-wing-of-an-airplane-PNLGCK4.jpg'
                        />
                    </div>
                    <div className='w-[450px]  flex-shrink-0 py-10 pl-10 pr-[50px] flex flex-col gap-6'>
                        <div className='flex items-center gap-6 text-[20px]'>
                            <Tabs
                                onChange={handleChangeTab}
                                value={value}
                                lineSize={0}
                                customClasses={{
                                    active: '!text-grey-800 font-bold',
                                    tab: 'text-primary-light',
                                }}
                            >
                                <TabPane value={value} id={AuthTabs.Login} label={'Đăng nhập'} />
                                <TabPane value={value} id={AuthTabs.Register} label={'Đăng ký mới'} />
                            </Tabs>
                        </div>
                        <TabPane value={value} id={AuthTabs.Login}>
                            <div className='flex flex-col gap-4'>
                                <Input
                                    startAdornment={<i className='icon icon-user text-[24px]' />}
                                    size='lg'
                                    label='Tên đăng nhập'
                                    placeholder='Tên đăng nhập'
                                    fullWidth
                                />
                                <Input
                                    size='lg'
                                    fullWidth
                                    type='password'
                                    label='Mật khẩu'
                                    placeholder='Mật khẩu'
                                    aria-autocomplete='none'
                                    inputProps={{
                                        type: 'password',
                                    }}
                                    startAdornment={<i className='icon icon-keychain text-[24px]' />}
                                />
                                <Checkbox
                                    customClasses={{
                                        label: 'text-base',
                                    }}
                                    defaultChecked
                                    size='md'
                                    label='Ghi nhớ đăng nhập'
                                />
                                <Button
                                    fullWidth
                                    size='lg'
                                    customClasses={{
                                        root: 'h-[48px] !rounded-lg',
                                    }}
                                >
                                    Đăng nhập
                                </Button>
                            </div>
                        </TabPane>
                        <TabPane value={value} id={AuthTabs.Register}>
                            <div className='flex flex-col gap-4'>
                                <Input
                                    startAdornment={<i className='icon icon-mail text-[24px]' />}
                                    size='lg'
                                    label='Email'
                                    placeholder='Địa chỉ email'
                                    fullWidth
                                />
                                <Input
                                    size='lg'
                                    fullWidth
                                    label='Mật khẩu'
                                    placeholder='Mật khẩu'
                                    type='password'
                                    aria-autocomplete='none'
                                    inputProps={{
                                        type: 'password',
                                    }}
                                    startAdornment={<i className='icon icon-keychain text-[24px]' />}
                                />
                                <Input
                                    size='lg'
                                    fullWidth
                                    label='Nhập lại mật khẩu'
                                    placeholder='Nhập lại mật khẩu'
                                    type='password'
                                    aria-autocomplete='none'
                                    inputProps={{
                                        type: 'password',
                                    }}
                                    startAdornment={<i className='icon icon-keychain text-[24px]' />}
                                />
                                <Checkbox
                                    customClasses={{
                                        label: 'text-base',
                                    }}
                                    defaultChecked
                                    size='md'
                                    label='Gửi cho tôi tin khuyến mại và các giảm giá đặc biệt của Flynow'
                                />
                                <Button
                                    customClasses={{
                                        root: 'h-[48px] !rounded-lg',
                                    }}
                                    fullWidth
                                    size='lg'
                                >
                                    Đăng ký
                                </Button>
                            </div>
                        </TabPane>
                        <div className='flex flex-col text-center'>
                            <Tooltip title='Đăng nhập bằng tài khoản mạng xã hội' placement='top'>
                                <span className='text-grey-500'>Đăng nhập bằng tài khoản</span>
                            </Tooltip>
                            <div className='flex gap-1 justify-center'>
                                <Tooltip
                                    title='Đăng nhập bằng tài khoản mạng xã hội'
                                    placement='left'
                                    triggerOnClick
                                    showArrow={false}
                                >
                                    <svg
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M20.0002 3.33333C10.7864 3.33333 3.3335 10.7862 3.3335 20C3.3335 29.2138 10.7864 36.6667 20.0002 36.6667C29.2139 36.6667 36.6668 29.2138 36.6668 20C36.6668 10.7862 29.173 3.33333 20.0002 3.33333ZM16.4785 26.9615C12.2606 26.9615 8.86175 23.5627 8.86175 19.3448C8.86175 15.1269 12.2606 11.7281 16.4785 11.7281C18.5669 11.7281 20.4506 12.5471 21.8429 13.9394L20.2868 15.2907C19.304 14.3489 17.9527 13.8165 16.5194 13.8165C13.4482 13.8165 10.9502 16.3145 10.9502 19.3857C10.9502 22.457 13.4482 24.955 16.5194 24.955C18.8536 24.955 20.6144 23.4398 21.1877 20.9828H16.3556V18.9353H23.44V19.7133C23.4809 23.8903 20.5325 26.9615 16.4785 26.9615ZM30.7291 20.86V23.8084H28.8454V20.86H25.897V18.9762H28.8454V16.0278H30.7291V18.9762H33.6365V20.86H30.7291Z'
                                            fill='#DF4B38'
                                        />
                                    </svg>
                                </Tooltip>
                                <Tooltip title='Đăng nhập bằng tài khoản mạng xã hội' placement='right' effect='dark'>
                                    <svg
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <circle cx='20.0002' cy='20' r='16.6667' fill='#1877F2' />
                                        <path
                                            d='M17.2613 30H21.6332V19.9307H24.6985L25 16.5589H21.6332C21.6332 16.5589 21.6332 15.3118 21.6332 14.6189C21.6332 13.8337 21.7839 13.5104 22.6382 13.5104C23.2915 13.5104 25 13.5104 25 13.5104V10C25 10 22.4874 10 21.9849 10C18.7186 10 17.2613 11.3395 17.2613 13.8337C17.2613 16.0508 17.2613 16.5127 17.2613 16.5127H15V19.9307H17.2613V30Z'
                                            fill='white'
                                        />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                        {value === AuthTabs.Login && <div className='text-center text-primary'>Bạn quên mật khẩu?</div>}
                    </div>
                </div>
            }
            setIsOpen={(booleanValue) => {
                onClose(booleanValue);
            }}
        />
    );
};

export default AuthModal;
