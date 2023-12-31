'use client';
import {
    Button,
    Datepicker,
    IconButton,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Typography,
    dayjs,
} from '@acme/design-system';
import { DateValueType } from '@acme/design-system/DatePicker/DatePicker.types';
import { FC, useState } from 'react';
import { default as FlightAutosuggestResult, default as TourAutosuggestResult } from './TourAutosuggestResult';

interface IProps {}

const TourSearch: FC<IProps> = (props) => {
    const [valueDatePicker, setValueDatePicker] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });
    const [keyword, setKeyword] = useState<string>('');

    return (
        <>
            <div className='rounded w-full mb-4 flex items-center gap-2'>
                <div className='flex items-center hover:text-primary'>
                    <Typography className='text-grey-800 me-2'>Khứ hồi</Typography>

                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z'
                            fill='#212B36'
                        />
                    </svg>
                </div>
                <div className='flex items-center'>
                    <Typography className='text-grey-800 me-2'>1 Người lớn, 2 Trẻ em, 1 Em bé</Typography>

                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z'
                            fill='#212B36'
                        />
                    </svg>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 grow'>
                    <div className='rounded flex-[5] flex flex-wrap items-center'>
                        <div className='flex-1'>
                            <Popover placement='bottom-end'>
                                <PopoverTrigger>
                                    <Input
                                        customClasses={{
                                            inputContainer: '!h-[56px] !rounded-lg',
                                        }}
                                        startAdornment={
                                            <span className='text-grey-800 me-2'>
                                                <svg
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M21.509 8.527C21.3741 8.1219 21.0838 7.78696 20.702 7.59586C20.3202 7.40477 19.8781 7.37316 19.473 7.508L15 9L7 6L5 7L11 11L7 13L3 11L2 12L6 16L20.547 10.545C20.9373 10.3985 21.2556 10.1063 21.435 9.73002C21.6144 9.35369 21.6409 8.92248 21.509 8.527Z'
                                                        fill='currentColor'
                                                    />
                                                    <path
                                                        fill-rule='evenodd'
                                                        clip-rule='evenodd'
                                                        d='M2 19C2 18.4477 2.44772 18 3 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19Z'
                                                        fill='currentColor'
                                                    />
                                                </svg>
                                            </span>
                                        }
                                        value={keyword}
                                        onChange={(e) => {
                                            setKeyword(e.target.value);
                                        }}
                                        fullWidth
                                        size='lg'
                                        placeholder='Điểm đi'
                                    />
                                </PopoverTrigger>
                                <PopoverContent className='z-100 !w-96'>
                                    <TourAutosuggestResult result={[]} />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <IconButton
                            customClasses={{
                                root: '!bg-grey-300 hover:!bg-grey-400 text-grey-800 h-[56px] w-[56px] mx-2',
                            }}
                            size='md'
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
                                    d='M13.7929 4.79289C14.1834 4.40237 14.8166 4.40237 15.2071 4.79289L19.7071 9.29289C19.9931 9.57889 20.0787 10.009 19.9239 10.3827C19.7691 10.7564 19.4045 11 19 11H5.00003C4.44774 11 4.00003 10.5523 4.00003 10C4.00003 9.44772 4.44774 9 5.00003 9H16.5858L13.7929 6.20711C13.4024 5.81658 13.4024 5.18342 13.7929 4.79289ZM4.07615 13.6173C4.23093 13.2436 4.59557 13 5.00003 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H7.41424L10.2071 17.7929C10.5977 18.1834 10.5977 18.8166 10.2071 19.2071C9.81661 19.5976 9.18345 19.5976 8.79292 19.2071L4.29292 14.7071C4.00692 14.4211 3.92137 13.991 4.07615 13.6173Z'
                                    fill='#212B36'
                                />
                            </svg>
                        </IconButton>
                        <div className='flex-1'>
                            <Popover placement='bottom-end'>
                                <PopoverTrigger>
                                    <Input
                                        customClasses={{
                                            inputContainer: '!h-[56px] !rounded-lg',
                                        }}
                                        startAdornment={
                                            <span className='text-grey-800 me-2'>
                                                <svg
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M18.842 15.296C19.2499 15.3812 19.675 15.3049 20.0279 15.0832C20.3807 14.8614 20.6338 14.5115 20.734 14.107V14.106C20.7848 13.9007 20.7947 13.6875 20.763 13.4784C20.7314 13.2693 20.6588 13.0685 20.5495 12.8875C20.4402 12.7065 20.2962 12.5488 20.1259 12.4235C19.9556 12.2981 19.7623 12.2076 19.557 12.157L14.981 11.024L9.82499 4.20999L7.60099 3.98499L10.532 10.574L6.08299 10.125L3.77099 6.29599L2.39099 6.60599L3.63099 12.126L18.842 15.296Z'
                                                        fill='currentColor'
                                                    />
                                                    <path
                                                        fill-rule='evenodd'
                                                        clip-rule='evenodd'
                                                        d='M2 19C2 18.4477 2.44772 18 3 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H3C2.44772 20 2 19.5523 2 19Z'
                                                        fill='currentColor'
                                                    />
                                                </svg>
                                            </span>
                                        }
                                        fullWidth
                                        size='lg'
                                        value='Hồ Chí Minh  (SGN)'
                                        placeholder='Điểm đến'
                                    />
                                </PopoverTrigger>
                                <PopoverContent className='z-100 !w-96'>
                                    <FlightAutosuggestResult result={[]} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='rounded flex-[4] flex items-center border border-grey-400 rounded-lg'>
                        <div className='grow'>
                            <Datepicker
                                hasToggle
                                placeholder='Ngày đi'
                                containerClassName={'h-[56px] rounded-lg'}
                                useRange
                                startAdornment={
                                    <span className='text-grey-800 me-2'>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M19 6H5L5 20H19V6ZM5 4C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H5Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z'
                                                fill='currentColor'
                                            />
                                            <rect x='4' y='5' width='16' height='3' fill='currentColor' />
                                        </svg>
                                    </span>
                                }
                                value={valueDatePicker}
                                formatInputValueDisplay={(val: DateValueType) =>
                                    `Ngày đi: ${dayjs(val?.startDate?.toString()).format('DD-MM-YYYY') || ''}`
                                }
                                displayFormat={'DD-MM-YYYY'}
                                onChange={(value: DateValueType, e?: HTMLInputElement | null | undefined) => {
                                    setValueDatePicker(value);
                                }}
                            />
                        </div>
                        <div className=''>|</div>
                        <div className='grow'>
                            <Datepicker
                                hasToggle
                                clearable
                                placeholder='Ngày về'
                                containerClassName={'h-[56px] rounded-lg'}
                                useRange
                                startAdornment={
                                    <span className='text-grey-800 me-2'>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M19 6H5L5 20H19V6ZM5 4C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H5Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                fill-rule='evenodd'
                                                clip-rule='evenodd'
                                                d='M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z'
                                                fill='currentColor'
                                            />
                                            <rect x='4' y='5' width='16' height='3' fill='currentColor' />
                                        </svg>
                                    </span>
                                }
                                value={valueDatePicker}
                                formatInputValueDisplay={(val: DateValueType) =>
                                    `Ngày về: ${dayjs(val?.endDate?.toString()).format('DD-MM-YYYY') || ''}`
                                }
                                displayFormat={'DD-MM-YYYY'}
                                onChange={(value: DateValueType, e?: HTMLInputElement | null | undefined) => {
                                    setValueDatePicker(value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='rounded w-[120px]'>
                    <Button variant='contained' color='primary' className='h-full w-full'>
                        Tìm kiếm
                    </Button>
                </div>
            </div>
        </>
    );
};
export default TourSearch;
