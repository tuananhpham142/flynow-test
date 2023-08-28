import { Card, Chip, Divider, ListRenderer, Typography } from '@acme/design-system';
import { FC } from 'react';
import ListItemHorizontal from '../../ListItemHorizontal';
import { domesticAirports } from './domesticAirports';
interface IProps {
    result: Array<any>;
    keyword: string;
    onSelectedAirport: (airport: any) => void;
    onSelectHistory: (keyword: any) => void;
    isLoading: boolean;
}

const FlightAutosuggestResult: FC<IProps> = (props) => {
    const { result, onSelectedAirport, onSelectHistory, keyword, isLoading } = props;
    return (
        <Card
            rounded='lg'
            customClasses={{
                root: 'px-3 pt-2 pb-4',
            }}
            body={
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-2'>
                        <Typography htmlTag='p' variant='subtitle16' className='text-grey-800'>
                            Tìm kiếm gần đây:
                        </Typography>
                        <ListRenderer
                            onClick={(keyword) => onSelectHistory(keyword)}
                            items={['Hà Nội', 'Hồ Chí Minh', 'Paris', 'London', 'New York']}
                            renderItem={(item: string) => (
                                <Chip
                                    variant='contained'
                                    size='sm'
                                    customClasses={{
                                        root: 'cursor-pointer text-secondary',
                                    }}
                                >
                                    {item}
                                </Chip>
                            )}
                            customClasses={{
                                wrapper: 'flex gap-1 flex-wrap',
                            }}
                        />
                    </div>
                    <Divider />
                    {/* <div className='flex px-2'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <Typography variant='subtitle16' className='!text-primary'>
                                Miền Bắc
                            </Typography>
                            <ListRenderer
                                customClasses={{
                                    wrapper: 'flex flex-col gap-2 pl-0.5',
                                }}
                                items={domesticAirports.Northern}
                                renderItem={(airport) => (
                                    <div>
                                        <Typography variant='subtitle14' className='!text-grey-700'>
                                            {airport.CityName}{' '}
                                            <Typography htmlTag='span' variant='body14'>
                                                ({airport.Id})
                                            </Typography>
                                        </Typography>
                                    </div>
                                )}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <Typography variant='subtitle16' className='!text-primary'>
                                Miền Trung
                            </Typography>
                            <ListRenderer
                                customClasses={{
                                    wrapper: 'flex flex-col gap-2 pl-0.5',
                                }}
                                items={domesticAirports.CentralRegion}
                                renderItem={(airport) => (
                                    <div>
                                        <Typography variant='subtitle14' className='!text-grey-700'>
                                            {airport.CityName}{' '}
                                            <Typography htmlTag='span' variant='body14'>
                                                ({airport.Id})
                                            </Typography>
                                        </Typography>
                                    </div>
                                )}
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-1'>
                            <Typography variant='subtitle16' className='!text-primary'>
                                Miền Nam
                            </Typography>
                            <ListRenderer
                                customClasses={{
                                    wrapper: 'flex flex-col gap-2 pl-0.5',
                                }}
                                items={domesticAirports.Southern}
                                renderItem={(airport) => (
                                    <div>
                                        <Typography variant='subtitle14' className='!text-grey-700'>
                                            {airport.CityName}{' '}
                                            <Typography htmlTag='span' variant='body14'>
                                                ({airport.Id})
                                            </Typography>
                                        </Typography>
                                    </div>
                                )}
                            />
                        </div>
                    </div> */}
                    <div className='flex flex-col'>
                        <Typography htmlTag='p' variant='subtitle16' className='text-grey-800'>
                            Kết quả tìm kiếm:{' '}
                        </Typography>
                        <div className='relative'>
                            {result && result.length > 0 && (
                                <ListRenderer
                                    items={result || domesticAirports}
                                    onClick={(airport) => onSelectedAirport(airport)}
                                    renderItem={(airport: {
                                        CityId: string;
                                        CityName: string;
                                        CountryId: string;
                                        CountryName: string;
                                        Id: string;
                                        IsDomestic: boolean;
                                        Name: string;
                                        PlaceId: string | null;
                                        PlaceName: string | null;
                                    }) => (
                                        <ListItemHorizontal
                                            label={`${airport.CityName}, ${airport.CountryName}`}
                                            description={`${airport.Id} - ${airport.Name}`}
                                        />
                                    )}
                                    customClasses={{
                                        wrapper: 'h-64 overflow-y-scroll',
                                        itemWrapper: 'hover:bg-grey-200 rounded-lg p-2 cursor-pointer',
                                    }}
                                />
                            )}
                            {isLoading && (
                                <div className='absolute inset-0 flex items-center justify-center backdrop-blur-[1px] rounded'>
                                    <div role='status'>
                                        <svg
                                            aria-hidden='true'
                                            className='w-10 h-10 mr-2 text-grey-300 animate-spin dark:text-grey-600 fill-primary'
                                            viewBox='0 0 100 101'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                                fill='currentFill'
                                            />
                                        </svg>
                                        <span className='sr-only'>Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            }
        />
    );
};
export default FlightAutosuggestResult;
