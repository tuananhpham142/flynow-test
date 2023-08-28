import React, { Dispatch, SetStateAction, useEffect } from 'react';
import {
    Divider,
    Popover,
    PopoverContent,
    PopoverTrigger,
    StepperInput,
    Typography,
    Tooltip,
} from '@acme/design-system';
import { OccupancyQuery } from '../../../types/Accommodation/AcdRequest';

type Props = {
    occupancyData: OccupancyQuery;
    onChange: Dispatch<SetStateAction<OccupancyQuery>>;
};

const OccupancyPopup: React.FC<Props> = (props) => {
    const { occupancyData, onChange } = props;

    console.log(occupancyData);

    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [showValidateTooltip, setShowValidateTooltip] = React.useState(false);
    const [validateTitle, setValidateTitle] = React.useState<string>('');

    const renderDataToString = () => {
        const textRooms = occupancyData.Rooms ? `${occupancyData.Rooms} Phòng` : '';
        const textAdult = occupancyData.Adult ? `${occupancyData.Adult} Người lớn` : '';
        const textChildren = occupancyData.Children ? `${occupancyData.Children} Trẻ em` : '';

        return [textRooms, textAdult, textChildren].filter((i) => i).join(', ');
    };

    return (
        <Popover placement='bottom-start' open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger>
                <div className='flex items-center cursor-pointer group gap-1'>
                    <Typography
                        className={`group-hover:text-primary text-grey-800 me-2 ${isPopoverOpen && 'text-primary'}`}
                    >
                        {renderDataToString()}
                    </Typography>
                    <i className={`icon icon-arrow-up ${isPopoverOpen ? 'rotate-0' : 'rotate-180'}`} />
                </div>
            </PopoverTrigger>
            <PopoverContent className='z-100 !w-[334px]'>
                <Tooltip
                    title={validateTitle}
                    placement='top'
                    effect='dark'
                    triggerOnClick={false}
                    open={showValidateTooltip}
                    // onOpenChange={setShowValidateTooltip}
                >
                    <div className='flex flex-col p-2 bg-white cursor-pointer rounded-lg shadow'>
                        {/*Rooms*/}
                        <div className='flex gap-2 p-3'>
                            <div className='flex-1 flex gap-2'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M17.3505 15.7296C14.8763 14.9045 14.0722 14.1384 14.0722 12.6061C14.0722 12.4293 14.0722 12.3114 14.134 12.1936C14.3196 11.7221 14.8763 11.6632 15.1237 10.3077C15.2474 9.60051 15.9278 10.3077 16.0515 8.71652C16.0515 8.06825 15.6804 7.89145 15.6804 7.89145C15.6804 7.89145 15.866 6.94852 15.9278 6.24132C16.1134 5.35733 15.4948 3 12.0309 3C12.0309 3 12.0309 3 11.9691 3C11.9691 3 11.9691 3 11.9072 3C8.50515 3 7.8866 5.35733 7.94845 6.24132C8.01031 6.94852 8.19588 7.89145 8.19588 7.89145C8.19588 7.89145 7.82474 8.06825 7.82474 8.71652C7.94845 10.3077 8.62887 9.60051 8.75258 10.3077C9 11.6632 9.5567 11.7221 9.74227 12.1936C9.80412 12.3114 9.80412 12.4293 9.80412 12.6061C9.80412 14.1384 9 14.8456 6.52577 15.7296C4.1134 16.5546 3 17.4386 3 18.028V21H20.9213L21 18.028C21 17.4386 19.8247 16.5546 17.3505 15.7296Z'
                                        fill='#212B36'
                                    />
                                </svg>

                                <div className='flex flex-col'>
                                    <Typography variant='body16'>Phòng</Typography>
                                </div>
                            </div>
                            <div>
                                <StepperInput
                                    value={occupancyData.Rooms}
                                    min={1}
                                    max={10}
                                    onChange={(val) => {
                                        const value = Number(val);
                                        // onChange((prev: any) => {});
                                    }}
                                />
                            </div>
                        </div>

                        {/*Adult*/}
                        <Divider />
                        <div className='flex gap-2 p-3'>
                            <div className='flex-1 flex gap-2'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M17.3505 15.7296C14.8763 14.9045 14.0722 14.1384 14.0722 12.6061C14.0722 12.4293 14.0722 12.3114 14.134 12.1936C14.3196 11.7221 14.8763 11.6632 15.1237 10.3077C15.2474 9.60051 15.9278 10.3077 16.0515 8.71652C16.0515 8.06825 15.6804 7.89145 15.6804 7.89145C15.6804 7.89145 15.866 6.94852 15.9278 6.24132C16.1134 5.35733 15.4948 3 12.0309 3C12.0309 3 12.0309 3 11.9691 3C11.9691 3 11.9691 3 11.9072 3C8.50515 3 7.8866 5.35733 7.94845 6.24132C8.01031 6.94852 8.19588 7.89145 8.19588 7.89145C8.19588 7.89145 7.82474 8.06825 7.82474 8.71652C7.94845 10.3077 8.62887 9.60051 8.75258 10.3077C9 11.6632 9.5567 11.7221 9.74227 12.1936C9.80412 12.3114 9.80412 12.4293 9.80412 12.6061C9.80412 14.1384 9 14.8456 6.52577 15.7296C4.1134 16.5546 3 17.4386 3 18.028V21H20.9213L21 18.028C21 17.4386 19.8247 16.5546 17.3505 15.7296Z'
                                        fill='#212B36'
                                    />
                                </svg>

                                <div className='flex flex-col'>
                                    <Typography variant='body16'>Người lớn</Typography>
                                    <Typography variant='body14' className='text-grey-400'>
                                        Từ 12 tuổi trở lên
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <StepperInput
                                    value={occupancyData.Adult}
                                    min={1}
                                    max={7}
                                    onChange={(val) => {
                                        const value = Number(val);
                                        // onChange((prev: any) => {});
                                    }}
                                />
                            </div>
                        </div>

                        {/*Child*/}
                        <Divider />
                        <div className='flex gap-2 p-3'>
                            <div className='flex-1 flex gap-2'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <circle cx='12' cy='4' r='3' fill='#212B36' />
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M5.20711 3.29289C4.81658 2.90237 4.18342 2.90237 3.79289 3.29289C3.40237 3.68342 3.40237 4.31658 3.79289 4.70711L8 8.91421V15V17V21.5C8 22.3284 8.67157 23 9.5 23C10.3284 23 11 22.3284 11 21.5V17H13V21.5C13 22.3284 13.6716 23 14.5 23C15.3284 23 16 22.3284 16 21.5V17V15V8.91421L20.2071 4.70711C20.5976 4.31658 20.5976 3.68342 20.2071 3.29289C19.8166 2.90237 19.1834 2.90237 18.7929 3.29289L14.0858 8H9.91421L5.20711 3.29289Z'
                                        fill='#212B36'
                                    />
                                </svg>

                                <div className='flex flex-col'>
                                    <Typography variant='body16'>Trẻ em</Typography>
                                </div>
                            </div>
                            <div>
                                <StepperInput
                                    value={occupancyData.Children}
                                    min={0}
                                    max={7}
                                    onChange={(val) => {
                                        const value = Number(val);
                                        // onChange((prev: any) => {});
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Tooltip>
            </PopoverContent>
        </Popover>
    );
};

export default OccupancyPopup;
