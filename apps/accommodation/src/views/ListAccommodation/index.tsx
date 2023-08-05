'use client';
import AccommodationSearch from '@acme/pages/components/Search/Accommodation';
import { FC } from 'react';
import FiltersAccommodation from './components/Filters';

interface IProps {}

const ListAccommodation: FC<IProps> = (props) => {
    const {} = props;

    return (
        <>
            <div className='bg-white shadow-xs py-[24px] flex justify-center'>
                <div className='container max-w-[1200px] max-w-[1200px] flex flex-col gap-4 xl:px-0'>
                    <AccommodationSearch />
                </div>
            </div>

            <div className='container max-w-[1200px] mx-auto mt-8'>
                <FiltersAccommodation />
            </div>
        </>
    );
};

ListAccommodation.defaultProps = {};

export default ListAccommodation;
