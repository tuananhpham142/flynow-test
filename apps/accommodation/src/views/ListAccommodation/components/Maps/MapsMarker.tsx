import AccommodationIntroOnMaps from '@/components/Cards/AccommodationIntroOnMaps';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@acme/design-system';
import { ChildComponentProps, Coords } from 'google-map-react';
import { FC } from 'react';
import { AcdDetailResponse } from '@/types/Accommodation/AcdModel';

interface IProps extends Coords, ChildComponentProps {
    isHover?: boolean;
    room: AcdDetailResponse;
}

const MapsMarker: FC<IProps> = (props) => {
    const { room, isHover } = props;

    return (
        <Popover placement='bottom-end'>
            <PopoverTrigger>
                <Button
                    size={'sm'}
                    rounded={'full'}
                    customClasses={{
                        root: `border border-white shadow-lg ${isHover && 'scale-110 animate-bounce absolute z-20'} `,
                    }}
                    color={isHover ? 'warning' : 'primary'}
                >
                    {room.Price}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='z-10 !w-96 bg-white shadow-xl'>
                <AccommodationIntroOnMaps />
            </PopoverContent>
        </Popover>
    );
};

MapsMarker.defaultProps = {};

export default MapsMarker;
