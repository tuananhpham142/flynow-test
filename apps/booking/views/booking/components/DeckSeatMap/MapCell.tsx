import React from 'react';
import { CellType, SeatTierId, SeatInfomation, MapCell } from './dummyData';
import { clsx, Tooltip } from '@acme/design-system';

type MapCellProps = {
    onSelectedSeat: (seatId: string) => void;
    isSelected: boolean;
} & MapCell;

const MapCell: React.FC<MapCellProps> = (props) => {
    const {
        xCoordinate,
        yCoordinate,
        cellType,
        displayText,
        notes,
        seatInformation,
        iconUrl,
        onSelectedSeat,
        isSelected,
    } = props;

    const seatTierId = seatInformation?.seatTierId;

    const cellClasses = clsx(
        'flex items-center justify-center w-11 rounded h-11 text-sm transition-all duration-200',
        cellType === 'EMPTY' && '!border-0 font-bold',
        cellType === 'AVAILABLE_SEAT' && 'bg-white cursor-pointer hover:opacity-80',
        cellType === 'UNAVAILABLE_SEAT' && '!bg-grey-300 border border-grey-400 !text-grey-900 cursor-not-allowed',
        seatTierId === '0' && 'bg-warning-darker text-white',
        seatTierId === '1' && 'bg-success text-white',
        seatTierId === '2' && 'border border-grey-300',
        seatTierId === '3' && 'bg-danger',
        isSelected && '!bg-primary-darker !opacity-100 !text-white',
        // cellType === 'LEFT_WALL' && 'bg-grey-400',
        // cellType === 'RIGHT_WALL' && 'bg-grey-400',
    );

    const renderCellText = () => {
        switch (cellType) {
            case 'EMPTY':
                return displayText;
            case 'AVAILABLE_SEAT':
                return seatInformation?.seatColumn;
            // return seatInformation?.seatNumber;
            case 'UNAVAILABLE_SEAT':
                return seatInformation?.seatColumn;
            // return seatInformation?.seatNumber;
            // case 'EMERGENCY_EXIT_LEFT':
            //     return 'Exit';
            // case 'EMERGENCY_EXIT_RIGHT':
            //     return 'Exit';
            // case 'LEFT_WALL':
            //     return 'Lw';
            // case 'RIGHT_WALL':
            //     return 'Rw';
            // case 'BOTTOM_LEFT_CORNER':
            //     return 'Blc';
            // case 'BOTTOM_RIGHT_CORNER':
            //     return 'Brc';
            // case 'TOP_LEFT_CORNER':
            //     return 'Tlc';
            // case 'TOP_RIGHT_CORNER':
            //     return 'Trc';

            default:
                return '';
        }
    };

    const handleSelectSeat = () => {
        if (cellType === 'AVAILABLE_SEAT') {
            onSelectedSeat(seatInformation?.seatNumber || '');
        }
    };

    return (
        <div className='p-0.5' onClick={handleSelectSeat}>
            <div className={cellClasses}>{renderCellText()}</div>
        </div>
    );
};

export default MapCell;
