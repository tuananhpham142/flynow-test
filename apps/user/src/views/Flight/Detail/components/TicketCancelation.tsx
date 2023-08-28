import { Button, Card, Checkbox, Divider, Drawer, Typography } from '@acme/design-system';
import { getAirlineLogo } from '@acme/pages/components/Logos';
import { flightMinutesDurationFormat, formatFlightTime } from '@acme/utils';
import React from 'react';

type Props = {};

enum TicketCancelationStatus {
    PENDING = 'PENDING',
    CANCELED = 'CANCELED',
    REJECTED = 'REJECTED',
}

enum TicketItinerary {
    DEPARTURE = 'DEPARTURE',
    RETURN = 'RETURN',
}

const TicketCancelation = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const [isCreatingCancelation, setIsCreatingCancelation] = React.useState(false);
    const [selectedTickets, setSelectedTickets] = React.useState<TicketItinerary[]>([]);

    const handleSelectTicket = (id: TicketItinerary) => {
        if (isSelected(id)) {
            setSelectedTickets(selectedTickets.filter((item) => item !== id));
        } else {
            setSelectedTickets([...selectedTickets, id]);
        }
    };

    const isSelected = (id: TicketItinerary) => {
        return selectedTickets.includes(id);
    };

    return (
        <>
            <Button
                onClick={() => {
                    setOpen(true);
                }}
                size='lg'
                variant='outline'
                rounded='lg'
                startIcon={
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M17.9493 11.5478C17.8667 11.2997 17.6889 11.0945 17.455 10.9775C17.2212 10.8604 16.9504 10.8411 16.7022 10.9237L13.9625 11.8375L9.06251 10L7.8375 10.6125L11.5125 13.0625L9.06251 14.2875L6.6125 13.0625L6 13.675L8.45001 16.125L17.3601 12.7838C17.5991 12.6941 17.7941 12.5151 17.904 12.2846C18.0139 12.0541 18.0301 11.79 17.9493 11.5478Z'
                            fill='#4469AF'
                        />
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M9.01913 4.57351C9.93984 4.20357 10.9455 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 11.0746 4.1567 10.188 4.4442 9.36389C4.62611 8.84242 4.35085 8.27222 3.82938 8.09031C3.30792 7.9084 2.73772 8.18366 2.5558 8.70512C2.19544 9.73814 2 10.8473 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C9.95687 2 8.05406 2.6138 6.46963 3.66727C6.18707 3.85514 6.01906 4.17348 6.02339 4.51277C6.02772 4.85206 6.20381 5.16601 6.49108 5.3466L10.4678 7.8466C10.9353 8.14054 11.5527 7.99979 11.8466 7.53223C12.1405 7.06466 11.9998 6.44734 11.5322 6.1534L9.01913 4.57351Z'
                            fill='#212B36'
                        />
                    </svg>
                }
            >
                Hoàn huỷ
            </Button>
            <Drawer
                position='bottom'
                openDuration={300}
                body={
                    <div className='bg-white h-[90vh] rounded-t-[32px] relative'>
                        <div className='flex flex-col gap-4 max-w-[1200px] pt-8 mx-auto'>
                            <Typography variant='h5'>Hoàn huỷ</Typography>
                            {!isCreatingCancelation && (
                                <CancelationEmpty
                                    onCreate={() => {
                                        setIsCreatingCancelation(true);
                                    }}
                                />
                            )}

                            {isCreatingCancelation && (
                                <div className='flex flex-col gap-6'>
                                    <Typography variant='body16'>Vui lòng chọn vé bạn muốn hoàn huỷ</Typography>

                                    <div className='flex gap-6'>
                                        <div className='flex-1'>
                                            <Card
                                                noPadding
                                                rounded='lg'
                                                variant='border'
                                                body={
                                                    <div
                                                        className={
                                                            isSelected(TicketItinerary.DEPARTURE)
                                                                ? 'bg-warning-lighter'
                                                                : ''
                                                        }
                                                    >
                                                        <div className='p-4 border-b border-grey-300'>
                                                            <Checkbox
                                                                checked={isSelected(TicketItinerary.DEPARTURE)}
                                                                label='Chọn chiều đi'
                                                                value={TicketItinerary.DEPARTURE}
                                                                onChange={(e) => {
                                                                    handleSelectTicket(TicketItinerary.DEPARTURE);
                                                                }}
                                                            />
                                                        </div>

                                                        <div className='flex flex-col gap-3 p-4'>
                                                            <div className='flex items-center justify-between gap-10 flex-1'>
                                                                <div className='flex items-center gap-2'>
                                                                    {/* logo */}
                                                                    <div>
                                                                        {getAirlineLogo('QH', {
                                                                            width: 48,
                                                                            height: 48,
                                                                        })}
                                                                    </div>
                                                                    {/* logo */}
                                                                    <div className='flex flex-col'>
                                                                        <Typography htmlTag='span' variant='body16'>
                                                                            {'BambooAirway'}
                                                                        </Typography>
                                                                        <Typography
                                                                            htmlTag='span'
                                                                            variant='caption'
                                                                            className='!text-grey-500'
                                                                        >
                                                                            {'QH666'} • {'Boeing 777'}
                                                                        </Typography>

                                                                        <Typography
                                                                            htmlTag='span'
                                                                            variant='caption'
                                                                            className='!text-grey-500'
                                                                        >
                                                                            Loại vé: {'ECONOMY'}
                                                                        </Typography>
                                                                    </div>
                                                                </div>

                                                                <div className='flex items-center flex-1 gap-3'>
                                                                    {/* Flight Schedule  */}
                                                                    <div className='flex justify-center items-center flex-col gap-1'>
                                                                        <Typography htmlTag='span' variant='subtitle20'>
                                                                            {'HAN'}
                                                                        </Typography>

                                                                        <Typography htmlTag='span' variant='caption'>
                                                                            {formatFlightTime('2021-12-31T12:45:00')}
                                                                        </Typography>
                                                                    </div>

                                                                    <div className='flex flex-col flex-1 items-center w-[140px]'>
                                                                        <span className='text-[13px] text-grey-500'>
                                                                            {flightMinutesDurationFormat(3000)}
                                                                        </span>
                                                                        <div className='flex items-center w-full gap-0.5'>
                                                                            <Divider
                                                                                className='flex-1 h-[2px]'
                                                                                color='grey-500'
                                                                            />
                                                                            {1 === 1 && (
                                                                                <>
                                                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                                    <Divider
                                                                                        className='flex-1 h-[2px]'
                                                                                        color='grey-500'
                                                                                    />
                                                                                </>
                                                                            )}
                                                                            {1 > 1 && (
                                                                                <>
                                                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                                    <Divider
                                                                                        className='flex-1 h-[2px]'
                                                                                        color='grey-500'
                                                                                    />
                                                                                </>
                                                                            )}
                                                                            <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                                                        </div>
                                                                        <span className='text-[13px] text-grey-500'>
                                                                            {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                                                        </span>
                                                                    </div>

                                                                    <div className='flex justify-center items-center flex-col gap-1'>
                                                                        <Typography htmlTag='span' variant='subtitle20'>
                                                                            {'CDG'}
                                                                        </Typography>

                                                                        <Typography htmlTag='span' variant='caption'>
                                                                            {formatFlightTime('2021-12-31T12:45:00')} (+
                                                                            {1}d)
                                                                        </Typography>
                                                                    </div>
                                                                    {/* Flight Schedule  */}
                                                                </div>
                                                            </div>

                                                            <Divider />

                                                            <div className='flex flex-col gap-1'>
                                                                <Typography>5 hành khách</Typography>
                                                                <div className='flex gap-1 items-center'>
                                                                    <Typography
                                                                        variant='caption'
                                                                        className='!text-primary'
                                                                    >
                                                                        Điều kiện hoàn huỷ
                                                                    </Typography>
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
                                                                            d='M8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337ZM7.3335 5.33337C7.3335 4.96518 7.63197 4.66671 8.00016 4.66671C8.36835 4.66671 8.66683 4.96518 8.66683 5.33337C8.66683 5.70156 8.36835 6.00004 8.00016 6.00004C7.63197 6.00004 7.3335 5.70156 7.3335 5.33337ZM8.00016 7.33337C8.36835 7.33337 8.66683 7.63185 8.66683 8.00004V10.6667C8.66683 11.0349 8.36835 11.3334 8.00016 11.3334C7.63197 11.3334 7.3335 11.0349 7.3335 10.6667V8.00004C7.3335 7.63185 7.63197 7.33337 8.00016 7.33337Z'
                                                                            fill='#4469AF'
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            />
                                        </div>
                                        <div className='flex-1'>
                                            <Card
                                                noPadding
                                                rounded='lg'
                                                variant='border'
                                                body={
                                                    <div
                                                        className={
                                                            isSelected(TicketItinerary.RETURN)
                                                                ? 'bg-warning-lighter'
                                                                : ''
                                                        }
                                                    >
                                                        <div className='p-4 border-b border-grey-300'>
                                                            <Checkbox
                                                                checked={isSelected(TicketItinerary.RETURN)}
                                                                label='Chọn chiều về'
                                                                value={TicketItinerary.RETURN}
                                                                onChange={(e) => {
                                                                    handleSelectTicket(TicketItinerary.RETURN);
                                                                }}
                                                            />
                                                        </div>

                                                        <div className='flex flex-col gap-3 p-4'>
                                                            <div className='flex items-center justify-between gap-10 flex-1'>
                                                                <div className='flex items-center gap-2'>
                                                                    {/* logo */}
                                                                    <div>
                                                                        {getAirlineLogo('QH', {
                                                                            width: 48,
                                                                            height: 48,
                                                                        })}
                                                                    </div>
                                                                    {/* logo */}
                                                                    <div className='flex flex-col'>
                                                                        <Typography htmlTag='span' variant='body16'>
                                                                            {'BambooAirway'}
                                                                        </Typography>
                                                                        <Typography
                                                                            htmlTag='span'
                                                                            variant='caption'
                                                                            className='!text-grey-500'
                                                                        >
                                                                            {'QH666'} • {'Boeing 777'}
                                                                        </Typography>

                                                                        <Typography
                                                                            htmlTag='span'
                                                                            variant='caption'
                                                                            className='!text-grey-500'
                                                                        >
                                                                            Loại vé: {'ECONOMY'}
                                                                        </Typography>
                                                                    </div>
                                                                </div>

                                                                <div className='flex items-center flex-1 gap-3'>
                                                                    {/* Flight Schedule  */}
                                                                    <div className='flex justify-center items-center flex-col gap-1'>
                                                                        <Typography htmlTag='span' variant='subtitle20'>
                                                                            {'HAN'}
                                                                        </Typography>

                                                                        <Typography htmlTag='span' variant='caption'>
                                                                            {formatFlightTime('2021-12-31T12:45:00')}
                                                                        </Typography>
                                                                    </div>

                                                                    <div className='flex flex-col flex-1 items-center w-[140px]'>
                                                                        <span className='text-[13px] text-grey-500'>
                                                                            {flightMinutesDurationFormat(3000)}
                                                                        </span>
                                                                        <div className='flex items-center w-full gap-0.5'>
                                                                            <Divider
                                                                                className='flex-1 h-[2px]'
                                                                                color='grey-500'
                                                                            />
                                                                            {1 === 1 && (
                                                                                <>
                                                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                                    <Divider
                                                                                        className='flex-1 h-[2px]'
                                                                                        color='grey-500'
                                                                                    />
                                                                                </>
                                                                            )}
                                                                            {1 > 1 && (
                                                                                <>
                                                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                                                    <Divider
                                                                                        className='flex-1 h-[2px]'
                                                                                        color='grey-500'
                                                                                    />
                                                                                </>
                                                                            )}
                                                                            <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                                                        </div>
                                                                        <span className='text-[13px] text-grey-500'>
                                                                            {1 > 0 ? `${1} điểm dừng` : 'Bay thẳng'}
                                                                        </span>
                                                                    </div>

                                                                    <div className='flex justify-center items-center flex-col gap-1'>
                                                                        <Typography htmlTag='span' variant='subtitle20'>
                                                                            {'CDG'}
                                                                        </Typography>

                                                                        <Typography htmlTag='span' variant='caption'>
                                                                            {formatFlightTime('2021-12-31T12:45:00')} (+
                                                                            {1}d)
                                                                        </Typography>
                                                                    </div>
                                                                    {/* Flight Schedule  */}
                                                                </div>
                                                            </div>

                                                            <Divider />

                                                            <div className='flex flex-col gap-1'>
                                                                <Typography>5 hành khách</Typography>
                                                                <div className='flex gap-1 items-center'>
                                                                    <Typography
                                                                        variant='caption'
                                                                        className='!text-primary'
                                                                    >
                                                                        Điều kiện hoàn huỷ
                                                                    </Typography>
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
                                                                            d='M8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337ZM7.3335 5.33337C7.3335 4.96518 7.63197 4.66671 8.00016 4.66671C8.36835 4.66671 8.66683 4.96518 8.66683 5.33337C8.66683 5.70156 8.36835 6.00004 8.00016 6.00004C7.63197 6.00004 7.3335 5.70156 7.3335 5.33337ZM8.00016 7.33337C8.36835 7.33337 8.66683 7.63185 8.66683 8.00004V10.6667C8.66683 11.0349 8.36835 11.3334 8.00016 11.3334C7.63197 11.3334 7.3335 11.0349 7.3335 10.6667V8.00004C7.3335 7.63185 7.63197 7.33337 8.00016 7.33337Z'
                                                                            fill='#4469AF'
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className=''>
                                        <Button
                                            disabled={selectedTickets.length === 0}
                                            onClick={() => {
                                                setIsCreatingCancelation(false);
                                            }}
                                            size='lg'
                                            rounded='lg'
                                            className='!h-12 !px-6'
                                        >
                                            Thực hiện hoàn huỷ
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                lockScroll={true}
                isOpen={open}
                outSideClick={true}
                onClose={(state) => {
                    setOpen(state);
                }}
            />
        </>
    );
};

export default TicketCancelation;

type CancelationProps = {
    onCreate: () => void;
};

const CancelationEmpty: React.FC<CancelationProps> = (props) => {
    const { onCreate } = props;
    return (
        <div className='flex items-center justify-center h-80'>
            <div className='flex flex-col gap-6 w-[500px] text-center'>
                <div className='flex flex-col gap-2'>
                    <Typography variant='subtitle16'>Không có yêu cầu hoàn vé nào</Typography>
                    <Typography variant='body16' className='!text-grey-600'>
                        Nhấn vào thêm mới yêu cầu hoàn hủy để thực hiện hoàn hủy vé máy bay nếu bạn có nhu cầu hoàn hủy
                    </Typography>
                </div>

                <div>
                    <Button onClick={onCreate} size='lg' rounded='lg'>
                        Thêm yêu cầu hoàn huỷ
                    </Button>
                </div>
            </div>
        </div>
    );
};
