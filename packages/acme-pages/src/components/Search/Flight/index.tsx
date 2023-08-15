'use client';
import { useMutation } from '@acme/api';
import {
    Button,
    Datepicker,
    Divider,
    IconButton,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    StepperInput,
    Typography,
    dayjs,
} from '@acme/design-system';
import { useForm, FormProvider, set } from '@acme/design-system/ReactHookForm';
import { DateValueType } from '@acme/design-system/DatePicker/DatePicker.types';
import { FC, useEffect, useState } from 'react';
import FlightAutosuggestResult from './FlightAutosuggestResult';
import { domesticAirports } from './domesticAirports';
import FlightSearchItineraryTypeDropdown from './FlightSearchItineraryTypeDropdown';
import FlightSearchPassengerCount from './FlightSearchPassengerCount';

// types
export type AirPort = {
    CityId: string;
    CityName: string;
    CountryId: string;
    CountryName: string;
    Id: string;
    IsDomestic: boolean;
    Name: string;
    PlaceId: string | null;
    PlaceName: string | null;
};
interface IProps {
    onSubmit: (data: any) => void;
    initialData?: any;
    isLoading?: boolean;
}

const SEARCH_DEBOUNCE_TIME = 300;

const FlightSearch: FC<IProps> = (props) => {
    const today = dayjs().format('YYYY-MM-DD');
    const { onSubmit, initialData, isLoading } = props;
    // value state
    const [valueDatePicker, setValueDatePicker] = useState<DateValueType>({
        startDate: initialData?.DepartureDate || today,
        endDate: initialData?.ReturnDate || today,
    });
    const [selectedDepartureAirport, setSelectedDepartureAirport] = useState<AirPort | null>(domesticAirports[0]);
    const [selectedReturnAirport, setSelectedReturnAirport] = useState<AirPort | null>(domesticAirports[1]);

    const [passengerCount, setPassengerCount] = useState({
        Adult: initialData?.Adult || 1,
        Children: initialData?.Children || 0,
        Infant: initialData?.Infant || 0,
    });

    const [itineraryType, setItineraryType] = useState<1 | 2>(initialData?.ItineraryType || 2);

    const [isShowDepartureSearchResult, setIsShowDepartureSearchResult] = useState<boolean>(false);
    const [isShowReturnSearchResult, setIsShowReturnSearchResult] = useState<boolean>(false);
    const [isForcusCalendar, showIsForcusCalendar] = useState<boolean>(false);

    const [departureInputValue, setDepartureInputValue] = useState<string>(
        `${domesticAirports[0].CityName} (${domesticAirports[0].Id})`,
    );
    const [returnInputValue, setReturnInputValue] = useState<string>(
        `${domesticAirports[1].CityName} (${domesticAirports[1].Id})`,
    );

    // services
    const {
        trigger: searchDepartureAirport,
        data: departureAirports,
        isMutating: isSearchDeparture,
    } = useMutation<any, Array<AirPort>>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/airport/autosuggest/${departureInputValue}`,
        // request: {},
    });
    const {
        trigger: searchReturnAirport,
        data: returnAirports,
        isMutating: isSearchReturn,
    } = useMutation<any, Array<AirPort>>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/airport/autosuggest/${returnInputValue}`,
        // request: {},
    });

    // handlers
    const handleSelectDepartureAirport = (airport: AirPort) => {
        setSelectedDepartureAirport(airport);
        setDepartureInputValue(`${airport.CityName} (${airport.Id})`);
        setIsShowDepartureSearchResult(false);
    };
    const handleSelectReturnAirport = (airport: AirPort) => {
        setSelectedReturnAirport(airport);
        setReturnInputValue(`${airport.CityName} (${airport.Id})`);
        setIsShowReturnSearchResult(false);
    };
    const handleSwapAirports = () => {
        if (!selectedDepartureAirport || !selectedReturnAirport) return;
        handleSelectDepartureAirport(selectedReturnAirport);
        handleSelectReturnAirport(selectedDepartureAirport);
    };

    const handleSearchFlights = () => {
        if (!selectedDepartureAirport) {
            setIsShowDepartureSearchResult(true);
            return;
        }
        if (!selectedReturnAirport) {
            setIsShowReturnSearchResult(true);
            return;
        }
        if (!valueDatePicker?.startDate) {
            showIsForcusCalendar(true);
            return;
        }

        onSubmit({
            selectedDepartureAirport,
            selectedReturnAirport,
            valueDatePicker,
            ...passengerCount,
            ItineraryType: itineraryType,
        });
    };

    // useEffects
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (isShowDepartureSearchResult) searchDepartureAirport();
        }, SEARCH_DEBOUNCE_TIME);

        return () => clearTimeout(delayDebounceFn);
    }, [departureInputValue]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (isShowReturnSearchResult) searchReturnAirport();
        }, SEARCH_DEBOUNCE_TIME);

        return () => clearTimeout(delayDebounceFn);
    }, [returnInputValue]);

    // helpers
    const getDepartureInputValue = () => {
        return departureInputValue;
    };
    const getReturnInputValue = () => {
        return returnInputValue;
    };
    const getDepartureAirports = () => {
        const data =
            departureAirports?.data?.Data && departureAirports.data.Data.length > 0
                ? departureAirports.data.Data
                : domesticAirports;

        return data.filter((item) => item.Id !== selectedReturnAirport?.Id);
    };
    const getReturnAirports = () => {
        const data =
            returnAirports?.data?.Data && returnAirports.data.Data.length > 0
                ? returnAirports.data.Data
                : domesticAirports;

        if (selectedDepartureAirport) {
            return data.filter((item) => item.Id !== selectedDepartureAirport.Id);
        }
        return data;
    };

    return (
        <>
            <div className='rounded w-full flex items-center gap-8'>
                <FlightSearchItineraryTypeDropdown value={itineraryType} onChange={setItineraryType} />
                <FlightSearchPassengerCount value={passengerCount} onChange={setPassengerCount} />
            </div>
            <div className='flex gap-2'>
                <div className='flex gap-2 grow'>
                    <div className='flex-[5] flex flex-wrap gap-1 items-center'>
                        <div className='flex-1'>
                            <Popover
                                placement='bottom-start'
                                open={isShowDepartureSearchResult}
                                onOpenChange={setIsShowDepartureSearchResult}
                            >
                                <PopoverTrigger>
                                    <Input
                                        customClasses={{
                                            inputContainer: `!h-[56px] !rounded-lg ${
                                                isShowDepartureSearchResult && '!border-warning'
                                            }`,
                                            clearIcon: '!w-5 !h-5',
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
                                        value={getDepartureInputValue()}
                                        onChange={(e) => {
                                            setDepartureInputValue(e.target.value);
                                        }}
                                        onClear={() => {
                                            setDepartureInputValue('');
                                            setSelectedDepartureAirport(null);
                                        }}
                                        // onBlur={() => {}}
                                        onFocus={(e) => {
                                            e.target.select();
                                        }}
                                        fullWidth
                                        size='lg'
                                        placeholder='Điểm đi'
                                    />
                                </PopoverTrigger>
                                <PopoverContent className='z-100 !w-[650px]'>
                                    <FlightAutosuggestResult
                                        keyword={departureInputValue}
                                        onSelectHistory={(keyword) => {
                                            setDepartureInputValue(keyword);
                                            setSelectedDepartureAirport(null);
                                        }}
                                        onSelectedAirport={handleSelectDepartureAirport}
                                        result={getDepartureAirports()}
                                        isLoading={isSearchDeparture}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <IconButton
                            onClick={handleSwapAirports}
                            customClasses={{
                                root: '!bg-grey-300 hover:!bg-grey-400 text-grey-800 !h-[48px] !w-[48px]',
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
                            <Popover
                                placement='bottom-end'
                                open={isShowReturnSearchResult}
                                onOpenChange={setIsShowReturnSearchResult}
                            >
                                <PopoverTrigger>
                                    <Input
                                        customClasses={{
                                            inputContainer: `!h-[56px] !rounded-lg ${
                                                isShowReturnSearchResult && '!border-warning'
                                            }`,
                                            clearIcon: '!w-5 !h-5',
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
                                        onChange={(e) => {
                                            setReturnInputValue(e.target.value);
                                        }}
                                        onClear={() => {
                                            setReturnInputValue('');
                                            setSelectedReturnAirport(null);
                                        }}
                                        // onBlur={() => {}}
                                        onFocus={(e) => {
                                            e.target.select();
                                        }}
                                        value={getReturnInputValue()}
                                        placeholder='Điểm đến'
                                    />
                                </PopoverTrigger>
                                <PopoverContent className='z-100 !w-[650px]'>
                                    <FlightAutosuggestResult
                                        isLoading={isSearchReturn}
                                        keyword={returnInputValue}
                                        onSelectHistory={(keyword) => {
                                            setReturnInputValue(keyword);
                                            setSelectedReturnAirport(null);
                                        }}
                                        onSelectedAirport={handleSelectReturnAirport}
                                        result={getReturnAirports()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div
                        onFocus={() => {
                            showIsForcusCalendar(true);
                        }}
                        onBlur={() => {
                            showIsForcusCalendar(false);
                        }}
                        className={`flex-[4] flex items-center border rounded-lg h-[56px] ${
                            isForcusCalendar ? 'border-warning' : 'border-grey-400'
                        }`}
                    >
                        <div className='grow'>
                            <Datepicker
                                hasToggle
                                primaryColor='warning'
                                placeholder='Ngày đi'
                                useRange
                                minDate={new Date(today)}
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
                                primaryColor='warning'
                                hasToggle
                                clearable
                                minDate={new Date(today)}
                                placeholder='Ngày về'
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
                    <Button
                        onClick={handleSearchFlights}
                        size='lg'
                        variant='contained'
                        color='primary'
                        className='h-full w-full !rounded-lg'
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        {isLoading ? '' : 'Tìm kiếm'}
                    </Button>
                </div>
            </div>
        </>
    );
};
export default FlightSearch;
