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
    icon: React.ReactNode;
    value: ItineraryEnum;
};

const itineraryTypes: Array<ItineraryType> = [
    {
        label: 'Một chiều',
        icon: (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.7929 5.79289C14.1834 5.40237 14.8166 5.40237 15.2071 5.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L15.2071 18.2071C14.8166 18.5976 14.1834 18.5976 13.7929 18.2071C13.4024 17.8166 13.4024 17.1834 13.7929 16.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L13.7929 7.20711C13.4024 6.81658 13.4024 6.18342 13.7929 5.79289Z'
                    fill='#212B36'
                />
            </svg>
        ),
        value: ItineraryEnum.OneWay,
    },
    {
        label: 'Khứ hồi',
        icon: (
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M13.7929 4.79289C14.1834 4.40237 14.8166 4.40237 15.2071 4.79289L19.7071 9.29289C19.9931 9.57889 20.0787 10.009 19.9239 10.3827C19.7691 10.7564 19.4045 11 19 11H5.00003C4.44774 11 4.00003 10.5523 4.00003 10C4.00003 9.44772 4.44774 9 5.00003 9H16.5858L13.7929 6.20711C13.4024 5.81658 13.4024 5.18342 13.7929 4.79289ZM4.07615 13.6173C4.23093 13.2436 4.59557 13 5.00003 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H7.41424L10.2071 17.7929C10.5977 18.1834 10.5977 18.8166 10.2071 19.2071C9.81661 19.5976 9.18345 19.5976 8.79292 19.2071L4.29292 14.7071C4.00692 14.4211 3.92137 13.991 4.07615 13.6173Z'
                    fill='#212B36'
                />
            </svg>
        ),
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
                                {itineraryType.icon}
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
