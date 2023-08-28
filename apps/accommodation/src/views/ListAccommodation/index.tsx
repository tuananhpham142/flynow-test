'use client';
import AccommodationSearch from '@acme/pages/components/Search/Accommodation';
import { FC, useState } from 'react';
import FiltersAccommodation from './components/Filters';
import Accommodations from '@/views/ListAccommodation/components/Accommodations';
import MapView from '@/views/ListAccommodation/components/Maps';

interface IProps {}

const ListAccommodationView: FC<IProps> = (props) => {
    const {} = props;
    const [visibleMaps, setVisibleMaps] = useState<boolean>(false);

    return (
        <>
            <div className='bg-white w-full shadow-xs py-[24px] flex justify-center'>
                <div className='container max-w-[1200px] flex flex-col gap-4 xl:px-0'>
                    <AccommodationSearch />
                </div>
            </div>

            <div className='container max-w-[1200px] mx-auto min-h-screen mt-8'>
                {visibleMaps ? (
                    <MapView />
                ) : (
                    <FiltersAccommodation onVisibleMaps={() => setVisibleMaps(!visibleMaps)}>
                        <Accommodations />
                    </FiltersAccommodation>
                )}
            </div>
        </>
    );
};

ListAccommodationView.defaultProps = {};

export default ListAccommodationView;
