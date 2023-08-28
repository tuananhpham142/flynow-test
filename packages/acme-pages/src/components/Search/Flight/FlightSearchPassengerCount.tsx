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

type Props = {
    value: any;
    onChange: Dispatch<SetStateAction<any>>;
};

const FlightSearchPassengerCount: React.FC<Props> = (props) => {
    const { value, onChange } = props;
    const { Adult, Children, Infant } = value;

    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [showValidateTooltip, setShowValidateTooltip] = React.useState(false);
    const [validateTitle, setValidateTitle] = React.useState<string>('');

    // useEffect(() => {
    //     if (Adult + Children + Infant > 7) {
    //         setShowValidateTooltip(true);
    //     } else {
    //         setShowValidateTooltip(false);
    //     }
    // }, [Adult, Children, Infant]);

    return (
        <Popover placement='bottom-start' open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger>
                <div className='flex items-center cursor-pointer group gap-1'>
                    <Typography
                        className={`group-hover:text-primary text-grey-800 me-2 ${isPopoverOpen && 'text-primary'}`}
                    >
                        {`${Adult > 0 ? `${Adult} Người lớn` : ''} ${Children > 0 ? `, ${Children} Trẻ em` : ''} ${
                            Infant > 0 ? `, ${Infant} Em bé` : ''
                        }`}
                    </Typography>
                    {isPopoverOpen ? (
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M4.29289 16.7071C4.68342 17.0976 5.31658 17.0976 5.70711 16.7071L12 10.4142L18.2929 16.7071C18.6834 17.0976 19.3166 17.0976 19.7071 16.7071C20.0976 16.3166 20.0976 15.6834 19.7071 15.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L4.29289 15.2929C3.90237 15.6834 3.90237 16.3166 4.29289 16.7071Z'
                                fill='#212B36'
                            />
                        </svg>
                    ) : (
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z'
                                fill='#212B36'
                            />
                        </svg>
                    )}
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
                                    value={value.Adult}
                                    min={1}
                                    max={7}
                                    onChange={(val) => {
                                        const value = Number(val);
                                        onChange((prev: any) => {
                                            const { Children, Infant } = prev;
                                            if (value + Children + Infant > 7) {
                                                setValidateTitle(
                                                    'Số người lớn và trẻ em không vướt quá 7 trong 1 lần đặt chỗ',
                                                );
                                                setShowValidateTooltip(true);
                                                return { ...prev };
                                            } else {
                                                setShowValidateTooltip(false);
                                                return { ...prev, Adult: value };
                                            }
                                        });
                                    }}
                                />
                            </div>
                        </div>
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
                                    <Typography variant='body14' className='text-grey-400'>
                                        Từ 2 đến 12 tuổi
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <StepperInput
                                    onChange={(val) => {
                                        const value = Number(val);
                                        onChange((prev: any) => {
                                            const { Adult, Infant } = prev;
                                            if (value + Adult + Infant > 7) {
                                                setValidateTitle(
                                                    'Số người lớn và trẻ em không vướt quá 7 trong 1 lần đặt chỗ',
                                                );
                                                setShowValidateTooltip(true);
                                                return { ...prev };
                                            } else {
                                                setShowValidateTooltip(false);
                                                return { ...prev, Children: value };
                                            }
                                        });
                                    }}
                                    value={value.Children}
                                    min={0}
                                    max={7}
                                />
                            </div>
                        </div>
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
                                        d='M15.6669 16L13.39 18.4519L15.0621 20.2489L13.3494 22.0931C13.2441 22.191 13.1587 22.3113 13.0987 22.4464C13.0386 22.5816 13.0052 22.7286 13.0006 22.8784C12.9959 23.0281 13.0201 23.1772 13.0716 23.3164C13.123 23.4556 13.2007 23.5818 13.2997 23.687C13.3987 23.7923 13.5169 23.8743 13.6468 23.928C13.7766 23.9816 13.9154 24.0058 14.0544 23.9988C14.1934 23.9919 14.3295 23.9541 14.4542 23.8877C14.5789 23.8213 14.6895 23.7278 14.7791 23.6132L17.4873 20.5805C17.7935 20.2572 17.9757 19.8217 17.9977 19.3605C18.0198 18.8993 17.8801 18.446 17.6064 18.0905L15.6669 16Z'
                                        fill='#212B36'
                                    />
                                    <path
                                        d='M9.33006 16L11.6044 18.4502L9.9342 20.2459L11.6449 22.0889C11.7513 22.1862 11.8378 22.3063 11.8988 22.4416C11.9598 22.5768 11.994 22.7243 11.9993 22.8745C12.0046 23.0248 11.9808 23.1746 11.9294 23.3144C11.8781 23.4543 11.8003 23.5811 11.701 23.6868C11.6018 23.7925 11.4832 23.8748 11.3528 23.9285C11.2224 23.9822 11.0831 24.0061 10.9437 23.9987C10.8043 23.9913 10.6679 23.9527 10.543 23.8854C10.4182 23.8181 10.3077 23.7236 10.2186 23.6079L7.5116 20.5774C7.2059 20.2541 7.0241 19.8189 7.00223 19.358C6.98036 18.8971 7.12002 18.4442 7.39353 18.0891L9.33006 16Z'
                                        fill='#212B36'
                                    />
                                    <path
                                        fill-rule='evenodd'
                                        clip-rule='evenodd'
                                        d='M9 11.4142L6.70711 13.7071C6.31658 14.0976 5.68342 14.0976 5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929L9.79289 7.79289C10.061 7.52475 10.4436 7.44072 10.7834 7.5408C10.874 7.51407 10.9691 7.5 11.0662 7.5H13.9338C14.0309 7.5 14.126 7.51407 14.2166 7.5408C14.5564 7.44072 14.939 7.52475 15.2071 7.79289L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L16 11.4142V15H9V11.4142Z'
                                        fill='#212B36'
                                    />
                                    <circle cx='12.5' cy='4' r='3' fill='#212B36' />
                                </svg>

                                <div className='flex flex-col'>
                                    <Typography variant='body16'>Em bé</Typography>
                                    <Typography variant='body14' className='text-grey-400'>
                                        Từ 0 đến 23 tháng
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <StepperInput
                                    onChange={(val) => {
                                        const value = Number(val);

                                        onChange((prev: any) => {
                                            const { Adult } = prev;
                                            if (value > Adult) {
                                                setValidateTitle('Số em bé không được nhiều hơn số người lớn');
                                                setShowValidateTooltip(true);
                                                return { ...prev };
                                            } else if (value > 4) {
                                                setValidateTitle('Số em bé không được nhiều hơn 4');
                                                setShowValidateTooltip(true);
                                                return { ...prev };
                                            } else {
                                                setShowValidateTooltip(false);
                                                return { ...prev, Infant: value };
                                            }
                                        });
                                    }}
                                    value={value.Infant}
                                    min={0}
                                    max={7}
                                />
                            </div>
                        </div>
                    </div>
                </Tooltip>
            </PopoverContent>
        </Popover>
    );
};

export default FlightSearchPassengerCount;
