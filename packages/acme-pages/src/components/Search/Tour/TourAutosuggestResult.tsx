import { Card, Chip, ListRenderer, Typography } from '@acme/design-system';
import { FC } from 'react';
import ListItemHorizontal from '../../ListItemHorizontal';
// import ListItemHorizontal from '@acme/pages/components/ListItemHorizontal';
interface IProps {
    result: Array<any>;
}

const TourAutosuggestResult: FC<IProps> = (props) => {
    const { result } = props;
    return (
        <Card
            customClasses={{
                root: 'rounded-lg',
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
                            Điểm đến phổ biến
                        </Typography>
                        <ListRenderer
                            items={[
                                'Vinpearl',
                                'Vin wonder nha trang',
                                'Sunworld hạ long',
                                'ZOodoo',
                                'Đà lạt',
                                'Hạ long',
                                'Hà Nội',
                                'Phú quốc',
                                'sunworld hòn thơm',
                                'fansipan',
                                'Bà nà hills',
                                'Vinpearl safari',
                                'Ký ức hội an',
                                'City bus hà nội',
                            ]}
                            renderItem={(p: string) => (
                                <Chip variant='contained' size='md'>
                                    {p}
                                </Chip>
                            )}
                            customClasses={{
                                wrapper: 'flex gap-2 flex-wrap',
                            }}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                        <div className='p-4 border rounded-lg border-grey-200'>
                            <div className='flex flex-col'>
                                <Typography htmlTag='p' variant='body16' className='text-grey-800 mb-2'>
                                    Đề xuất
                                </Typography>
                                <ListRenderer
                                    items={[1, 2, 3, 4, 5, 6]}
                                    renderItem={(p: number) => <ListItemHorizontal label={''} description={''} />}
                                    customClasses={{
                                        itemWrapper: 'mb-2',
                                    }}
                                />
                            </div>
                        </div>
                        <div className='p-4 border rounded-lg border-grey-200'>
                            <div className='flex flex-col'>
                                <Typography htmlTag='p' variant='body16' className='text-grey-800 mb-2'>
                                    Đề xuất
                                </Typography>
                                <ListRenderer
                                    items={[1, 2, 3, 4, 5, 6]}
                                    renderItem={(p: number) => <ListItemHorizontal label={''} description={''} />}
                                    customClasses={{
                                        itemWrapper: 'mb-2',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};
export default TourAutosuggestResult;
