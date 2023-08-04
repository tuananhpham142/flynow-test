'use client';
import React, { FC } from 'react';
import FiltersAccommodation from './components/Filters';
import AccommodationSearch from '@acme/pages/components/Search/Accommodation';

interface IProps {}

const OriginalPage: FC<IProps> = (props) => {
    const {} = props;

    return (
        <>
            <div className='shadow-md bg-white mb-8'>
                <div className='container max-w-[1280px] mx-auto'>
                    <AccommodationSearch />
                </div>
            </div>

            <div className='container max-w-[1280px] mx-auto mt-8'>
                <FiltersAccommodation />
            </div>
        </>
    );
};

OriginalPage.defaultProps = {};

export default OriginalPage;
