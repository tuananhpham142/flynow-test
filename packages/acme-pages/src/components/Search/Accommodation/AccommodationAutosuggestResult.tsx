import { Card, Chip, ListRenderer, Typography } from '@acme/design-system';
import { FC } from 'react';
import ListItemHorizontal from '../../ListItemHorizontal';
// import ListItemHorizontal from '@acme/pages/components/ListItemHorizontal';
interface IProps {
    result: Array<any>;
}

const AccommodationAutosuggestResult: FC<IProps> = (props) => {
    const { result } = props;
    return (
        <Card
            customClasses={{
                root: 'rounded-lg overflow-y-scroll max-h-80 p-0',
            }}
            body={
                <div className='flex flex-col'>
                    <div className='flex flex-col mb-5'>
                        <Typography htmlTag='p' variant='body16' className='text-grey-800 mb-2'>
                            Lịch sử tìm kiếm
                        </Typography>
                        <ListRenderer
                            items={['Vinpearl', 'Vin wonder nha trang', 'Sunworld hạ long', 'ZOodoo']}
                            renderItem={(p: string) => (
                                <Chip variant='contained' size='md'>
                                    Hà nội
                                </Chip>
                            )}
                            customClasses={{
                                wrapper: 'flex gap-1',
                            }}
                        />
                    </div>
                    <div className='flex flex-col mb-5'>
                        <Typography htmlTag='p' variant='body16' className='text-grey-800 mb-2'>
                            Kết quả tìm kiếm
                        </Typography>
                        {result && result.length > 0 && (
                            <ListRenderer
                                items={result}
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
                                        label={`${airport.Name}, ${airport.CityName}, ${airport.CountryName}`}
                                        description={airport.Id}
                                    />
                                )}
                                customClasses={{
                                    wrapper: '',
                                    itemWrapper: 'hover:bg-grey-200 rounded-lg p-2 cursor-pointer',
                                }}
                            />
                        )}
                    </div>
                </div>
            }
        />
    );
};
export default AccommodationAutosuggestResult;
