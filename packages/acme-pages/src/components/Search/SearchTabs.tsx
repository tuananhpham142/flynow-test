import { TabPane, Tabs, Typography } from '@acme/design-system';
import { Dispatch, FC, Fragment, SetStateAction } from 'react';

interface IProps {
    focus: number;
    setFocus: Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
}

const SearchTabs: FC<IProps> = (props) => {
    const { focus, setFocus } = props;
    return (
        <Fragment>
            <Tabs
                value={focus}
                onChange={(val) => setFocus(val)}
                lineSize={3}
                customClasses={{
                    root: 'border-0',
                    active: '!text-primary',
                    hover: 'hover:border-grey-300 hover:text-primary',
                }}
            >
                <TabPane
                    label={
                        <div className='bg-white flex items-center'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M3.39169 13.6489L2 15.0406L6.87091 17.1281L8.95943 22L10.3511 20.6083L9.65527 17.1281L12.916 13.8674L16.469 21.4498L17.7869 20.1319L16.6157 10.1687L19.3991 7.38432C19.5871 7.20274 19.737 6.98553 19.8402 6.74537C19.9434 6.50521 19.9977 6.24691 19.9999 5.98555C20.0022 5.72418 19.9524 5.46497 19.8534 5.22306C19.7544 4.98115 19.6083 4.76137 19.4235 4.57654C19.2386 4.39172 19.0189 4.24556 18.7769 4.14658C18.535 4.04761 18.2758 3.9978 18.0145 4.00007C17.7531 4.00235 17.4948 4.05665 17.2546 4.15981C17.0145 4.26298 16.7973 4.41294 16.6157 4.60094L13.7585 7.45814L3.79522 6.28593L2.55018 7.53195L10.0736 11.144L6.87189 14.3457L3.39169 13.6489Z'
                                    fill='currentColor'
                                />
                            </svg>
                            <Typography variant='body16' className='ms-1'>
                                Vé máy bay
                            </Typography>
                        </div>
                    }
                    value={focus}
                    id={1}
                />
                <TabPane
                    label={
                        <div className='bg-white flex items-center'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M21 12V16H12V9C12 8.44772 12.4477 8 13 8H17C19.2091 8 21 9.79086 21 12Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M3 7V16M3 19V16M3 16H12M21 16V19M21 16V12C21 9.79086 19.2091 8 17 8H13C12.4477 8 12 8.44772 12 9V16M21 16H12'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                                <circle cx='7.5' cy='11.5' r='2.5' fill='currentColor' />
                            </svg>
                            <Typography variant='body16' className='ms-1'>
                                Phòng khách sạn
                            </Typography>
                        </div>
                    }
                    value={focus}
                    id={2}
                />
                <TabPane
                    label={
                        <div className='bg-white flex items-center'>
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
                                    fill='currentColor'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M5 2C4.44772 2 4 2.44772 4 3V14H13V5C13 3.34315 11.6569 2 10 2H5Z'
                                    fill='currentColor'
                                />
                                <path
                                    d='M4 3C4 2.44772 4.44772 2 5 2C5.55228 2 6 2.44772 6 3V21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21V3Z'
                                    fill='currentColor'
                                />
                            </svg>
                            <Typography variant='body16' className='ms-1'>
                                Tour
                            </Typography>
                        </div>
                    }
                    value={focus}
                    id={3}
                />
                <TabPane
                    label={
                        <div className='bg-white flex items-center'>
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
                                    d='M12.7574 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C18.1792 22 18.3528 21.9764 18.518 21.9323L14.032 17.4462C13.4365 17.7981 12.7418 18 12 18C9.79086 18 8 16.2091 8 14C8 11.7909 9.79086 10 12 10C14.2091 10 16 11.7909 16 14C16 14.7418 15.7981 15.4365 15.4462 16.032L19.9323 20.518C19.9764 20.3528 20 20.1792 20 20V9.24264C20 8.44699 19.6839 7.68393 19.1213 7.12132L14.8787 2.87868C14.3161 2.31607 13.553 2 12.7574 2ZM14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z'
                                    fill='currentColor'
                                />
                            </svg>
                            <Typography variant='body16' className='ms-1'>
                                Kiểm tra đơn hàng
                            </Typography>
                        </div>
                    }
                    value={focus}
                    id={4}
                />
            </Tabs>
        </Fragment>
    );
};
export default SearchTabs;
