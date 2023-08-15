import { Popover, PopoverContent, PopoverTrigger, Typography } from '@acme/design-system';
import React, { Dispatch, SetStateAction } from 'react';

enum ItineraryEnum {
    OneWay = 1,
    RoundTrip = 2,
}

type Props = {
    value: ItineraryEnum;
    onChange: Dispatch<SetStateAction<any>>;
};

type ItineraryType = {
    label: string;
    icon: string;
    value: ItineraryEnum;
};

const itineraryTypes: Array<ItineraryType> = [
    {
        label: 'Một chiều',
        icon: 'icon-arrow-right',
        value: ItineraryEnum.OneWay,
    },
    {
        label: 'Khứ hồi',
        icon: 'icon-direction-right-left',
        value: ItineraryEnum.RoundTrip,
    },
];

const FlightSearchItineraryTypeDropdown = (props: Props) => {
    const { value, onChange } = props;
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [itineraryType, setItineraryType] = React.useState<ItineraryType>(
        itineraryTypes.find((type) => type.value === value)!,
    );

    const handleSelectItineraryType = (itineraryType: ItineraryType) => {
        setItineraryType(itineraryType);
        onChange(itineraryType.value);
        setIsPopoverOpen(false);
    };

    const isSelectedItineraryType = (type: ItineraryType) => {
        return type.value === itineraryType.value;
    };

    return (
        <Popover placement='bottom-start' open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger>
                <div className='flex items-center cursor-pointer group gap-1 w-28'>
                    <Typography
                        className={`group-hover:text-primary text-grey-800 me-2 ${isPopoverOpen && 'text-primary'}`}
                    >
                        {itineraryType.label}
                    </Typography>
                    <i
                        className={`group-hover:text-primary icon ${
                            isPopoverOpen ? 'icon-caret-up text-primary' : 'icon-caret-down'
                        } text-2xl`}
                    ></i>
                </div>
            </PopoverTrigger>
            <PopoverContent className='z-100 !w-[172px]'>
                <div className='flex flex-col gap-1 p-2 bg-white cursor-pointer rounded-lg shadow'>
                    {itineraryTypes.map((itineraryType) => {
                        const isSelected = isSelectedItineraryType(itineraryType);

                        return (
                            <div
                                onClick={() => handleSelectItineraryType(itineraryType)}
                                className={`flex gap-2 p-3 hover:bg-primary-light group rounded-md ${
                                    isSelected && 'bg-primary'
                                }`}
                            >
                                <i className={`icon ${itineraryType.icon} text-2xl`}></i>
                                <Typography
                                    variant='body16'
                                    className={`group-hover:!text-white ${isSelected && '!text-white'}`}
                                >
                                    {itineraryType.label}
                                </Typography>
                            </div>
                        );
                    })}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default FlightSearchItineraryTypeDropdown;
