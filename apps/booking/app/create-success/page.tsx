'use client';
import { Button, Typography } from '@acme/design-system';
import React from 'react';

type Props = {};

const CreateBookingSuccess = (props: Props) => {
    return (
        <div className='flex items-center justify-center pt-16 pb-[87px]'>
            <div className='w-[460px] h-[325px] flex flex-col gap-6 items-center text-center'>
                <svg width='170' height='165' viewBox='0 0 170 165' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle opacity='0.1' cx='87.9536' cy='82.0463' r='82.0463' fill='#36C70B' />
                    <circle opacity='0.1' cx='87.9541' cy='82.0463' r='68.9189' fill='#36C70B' />
                    <circle opacity='0.1' cx='87.9533' cy='82.0463' r='53.8224' fill='#36C70B' />
                    <path
                        d='M87.9535 121.429C109.704 121.429 127.336 103.797 127.336 82.0464C127.336 60.2961 109.704 42.6641 87.9535 42.6641C66.2033 42.6641 48.5713 60.2961 48.5713 82.0464C48.5713 103.797 66.2033 121.429 87.9535 121.429Z'
                        fill='url(#paint0_linear_642_4326)'
                    />
                    <path
                        d='M106.833 64.5833C104.766 62.4711 100.419 62.0831 98.4039 64.5833C94.9363 68.8863 91.4687 73.1904 88.0021 77.4934C86.3514 79.5431 84.6997 81.5919 83.0491 83.6416C82.4636 84.3692 81.7652 85.4606 81.0054 86.4733C80.8572 86.3201 80.7081 86.167 80.559 86.0148C79.4384 84.863 78.3178 83.7111 77.1972 82.5603C71.838 77.053 63.4134 85.4857 68.7685 90.989C71.5337 93.8298 74.3574 97.8023 78.1061 99.3008C82.2167 100.944 85.8637 98.9662 88.5059 95.7596C94.6975 88.2469 100.726 80.5932 106.834 73.013C108.868 70.4876 109.255 67.0593 106.834 64.5843L106.833 64.5833Z'
                        fill='white'
                    />
                    <path
                        d='M61.6209 29.1972C59.7476 29.6778 57.4323 30.3761 56.041 31.7834C54.3456 33.4973 53.7217 36.11 53.168 38.7147C53.1149 38.9657 52.7698 38.9657 52.7167 38.7147C52.2693 36.6278 51.6944 34.1213 50.485 32.5719C48.9463 30.6005 46.5765 29.7946 44.2506 29.1972C44.0076 29.1348 44.0076 28.8029 44.2506 28.7405C46.2858 28.2188 48.617 27.5271 50.0721 25.9273C51.5895 24.2585 52.1989 21.6432 52.7167 19.2229C52.7698 18.972 53.1149 18.972 53.168 19.2229C53.6513 21.4971 54.4771 24.0806 55.8525 25.7016C57.346 27.462 59.4569 28.1856 61.6209 28.7405C61.8638 28.8029 61.8638 29.1348 61.6209 29.1972Z'
                        fill='#89D81A'
                    />
                    <path
                        d='M25.0856 75.8344C22.4092 76.5208 19.0995 77.5191 17.1108 79.5304C14.6879 81.9812 13.7971 85.7144 13.0058 89.4357C12.9301 89.7941 12.4376 89.7954 12.3606 89.4357C11.722 86.4525 10.8989 82.8707 9.17039 80.6562C6.97188 77.8391 3.58518 76.6867 0.260873 75.8344C-0.0869577 75.7455 -0.0869577 75.2702 0.260873 75.1812C3.16831 74.4365 6.50059 73.4474 8.58093 71.1599C10.7489 68.7756 11.6198 65.0384 12.3606 61.5787C12.4376 61.2202 12.9301 61.2202 13.0058 61.5787C13.6975 64.8286 14.8764 68.5207 16.8426 70.8373C18.9774 73.3531 21.995 74.3873 25.0856 75.1799C25.4335 75.2689 25.4335 75.7441 25.0856 75.8331V75.8344Z'
                        fill='#89D81A'
                    />
                    <path
                        d='M162.303 48.8828C161.395 49.1151 160.272 49.455 159.596 50.1374C158.775 50.9685 158.472 52.2363 158.202 53.5002C158.176 53.6223 158.01 53.6223 157.983 53.5002C157.767 52.4872 157.487 51.2725 156.9 50.5197C156.154 49.5639 155.004 49.1722 153.876 48.8828C153.758 48.8523 153.758 48.6916 153.876 48.6611C154.862 48.4075 155.993 48.073 156.7 47.2963C157.435 46.4865 157.731 45.2186 157.982 44.0437C158.009 43.9216 158.174 43.9216 158.201 44.0437C158.436 45.147 158.836 46.4002 159.503 47.1861C160.228 48.0398 161.252 48.3916 162.302 48.6598C162.42 48.6903 162.42 48.851 162.302 48.8815L162.303 48.8828Z'
                        fill='#89D81A'
                    />
                    <path
                        d='M61.5152 128.45C60.6072 128.682 59.484 129.022 58.8083 129.704C57.9865 130.535 57.6838 131.803 57.4143 133.067C57.3877 133.189 57.2218 133.189 57.1952 133.067C56.9788 132.054 56.6987 130.839 56.1119 130.087C55.3658 129.131 54.2161 128.739 53.0876 128.45C52.9695 128.419 52.9695 128.259 53.0876 128.228C54.074 127.974 55.2052 127.64 55.9114 126.863C56.6469 126.053 56.943 124.786 57.1939 123.611C57.2205 123.489 57.3864 123.489 57.413 123.611C57.6479 124.714 58.0475 125.967 58.7153 126.753C59.4402 127.607 60.4638 127.959 61.5139 128.227C61.6321 128.257 61.6321 128.418 61.5139 128.448L61.5152 128.45Z'
                        fill='#89D81A'
                    />
                    <path
                        d='M93.7555 153.476C92.8474 153.709 91.7242 154.049 91.0485 154.731C90.2267 155.562 89.924 156.83 89.6545 158.094C89.628 158.216 89.462 158.216 89.4355 158.094C89.2191 157.081 88.9389 155.866 88.3521 155.113C87.606 154.157 86.4563 153.766 85.3279 153.476C85.2097 153.446 85.2097 153.285 85.3279 153.255C86.3143 153.001 87.4454 152.667 88.1517 151.89C88.8872 151.08 89.1832 149.812 89.4341 148.637C89.4607 148.515 89.6266 148.515 89.6532 148.637C89.8882 149.74 90.2878 150.994 90.9556 151.78C91.6804 152.633 92.704 152.985 93.7541 153.253C93.8723 153.284 93.8723 153.444 93.7541 153.475L93.7555 153.476Z'
                        fill='#89D81A'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_642_4326'
                            x1='59.7296'
                            y1='48.2432'
                            x2='106.988'
                            y2='111.911'
                            gradientUnits='userSpaceOnUse'
                        >
                            <stop stop-color='#35C40B' />
                            <stop offset='1' stop-color='#208801' />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='flex flex-col gap-2'>
                    <Typography variant='subtitle16'>Giữ đơn hàng thành công</Typography>
                    <div>
                        <Typography variant='body16'>Đơn hàng của bạn đã được xử lý thành công</Typography>
                        <Typography variant='body16'>
                            Bạn có thể xem lại nội dung đơn hàng trong mục Quản lý!
                        </Typography>
                    </div>
                </div>
                <div className='flex gap-2.5 justify-center'>
                    <Button>Xem lại đơn hàng</Button>
                    <Button variant='outline'>Về trang chủ</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateBookingSuccess;