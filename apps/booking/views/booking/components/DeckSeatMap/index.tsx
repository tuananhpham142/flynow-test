import React from 'react';
import { Divider, Typography } from '@acme/design-system';
import { DeckSeatMapData } from './dummyData';
import MapCell from './MapCell';

type Props = {
    data: DeckSeatMapData;
};

const DeckSeatMap: React.FC<Props> = (props) => {
    const { deckName, deckLocation, lengthSize, widthSize, seatMapPlans } = props.data;
    const [selectedSeat, setSelectedSeat] = React.useState<string[]>([]);

    const handleSelectSeat = (seatId: string) => {
        if (selectedSeat.includes(seatId)) {
            setSelectedSeat(selectedSeat.filter((seat) => seat !== seatId));
        } else {
            setSelectedSeat([...selectedSeat, seatId]);
        }
    };

    const isSeatSelected = (seatId: string) => {
        return selectedSeat.includes(seatId);
    };

    return (
        <div className='rounded-lg bg-grey-200 px-3 py-6 flex flex-col gap-6 items-center border border-grey-300'>
            <div className='flex flex-col gap-4'>
                {/* Header */}
                <div className='flex gap-5'>
                    <div className='flex items-center gap-1'>
                        <svg
                            className='fill-white stroke-grey-400'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='8' cy='8' r='7.5' />
                        </svg>
                        <Typography variant='caption'>Ghế trống</Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg
                            className='fill-warning-darker'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='8' cy='8' r='8' />
                        </svg>

                        <Typography variant='caption'>Ghế cao cấp</Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg
                            className='fill-success'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='8' cy='8' r='8' />
                        </svg>

                        <Typography variant='caption'>Ghế đầu dãy</Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg
                            className='fill-primary-darker'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='8' cy='8' r='8' />
                        </svg>

                        <Typography variant='caption'>Đang chọn</Typography>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg
                            className='fill-grey-300'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle cx='8' cy='8' r='8' />
                        </svg>

                        <Typography variant='caption'>Đã được chọn</Typography>
                    </div>
                </div>
                {/* Header */}

                <Divider />
            </div>
            <div className='flex flex-col gap-6 w-fit'>
                <div className='grid grid-cols-12 gap-0'>
                    {seatMapPlans.map((seat) => {
                        return (
                            <MapCell
                                key={seat?.xCoordinate + seat?.yCoordinate}
                                onSelectedSeat={handleSelectSeat}
                                isSelected={isSeatSelected(seat?.seatInformation?.seatNumber || '')}
                                {...seat}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DeckSeatMap;
