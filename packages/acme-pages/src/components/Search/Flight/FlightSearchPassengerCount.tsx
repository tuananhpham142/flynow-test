import React, { Dispatch, SetStateAction } from 'react';
import { Divider, Popover, PopoverContent, PopoverTrigger, StepperInput, Typography } from '@acme/design-system';

type Props = {
    value: any;
    onChange: Dispatch<SetStateAction<any>>;
};

const FlightSearchPassengerCount: React.FC<Props> = (props) => {
    const { value, onChange } = props;
    const { Adult, Children, Infant } = value;

    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

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
                    <i
                        className={`group-hover:text-primary icon ${
                            isPopoverOpen ? 'icon-caret-up text-primary' : 'icon-caret-down'
                        } text-2xl`}
                    ></i>
                </div>
            </PopoverTrigger>
            <PopoverContent className='z-100 !w-[334px]'>
                <div className='flex flex-col p-2 bg-white cursor-pointer rounded-lg shadow'>
                    <div className='flex gap-2 p-3'>
                        <div className='flex-1 flex gap-2'>
                            <i className='icon icon-passenger-adult text-2xl'></i>
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
                                max={9}
                                onChange={(val) => {
                                    onChange((prev: any) => ({ ...prev, Adult: Number(val) }));
                                }}
                            />
                        </div>
                    </div>
                    <Divider />
                    <div className='flex gap-2 p-3'>
                        <div className='flex-1 flex gap-2'>
                            <i className='icon icon-passenger-kid text-2xl'></i>
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
                                    onChange((prev: any) => ({ ...prev, Children: Number(val) }));
                                }}
                                value={value.Children}
                                min={0}
                                max={9}
                            />
                        </div>
                    </div>
                    <Divider />
                    <div className='flex gap-2 p-3'>
                        <div className='flex-1 flex gap-2'>
                            <i className='icon icon-passenger-baby text-2xl'></i>
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
                                    onChange((prev: any) => ({ ...prev, Infant: Number(val) }));
                                }}
                                value={value.Infant}
                                min={0}
                                max={9}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default FlightSearchPassengerCount;
