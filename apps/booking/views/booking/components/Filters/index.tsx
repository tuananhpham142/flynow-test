'use client';
import React, { FC } from 'react';
import BoxMap from './BoxMap';
import PriceRange from './PriceRange';
import StarRating from './StarRating';
import Area from './Area';
import TypeOfAccommodation from './Types';
import Amenities from './Amenities';
import SortedAndShowBy from './SortedAndShowBy';
import AccommodationList from '../AccommodationList';

interface IProps {}

const FiltersAccommodation: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='flex flex-row gap-6'>
            <div className='basis-1/4'>
                <div className='flex flex-col gap-4'>
                    <BoxMap />
                    <PriceRange />
                    <StarRating />
                    <Area />
                    <TypeOfAccommodation />
                    <Amenities />
                </div>
            </div>
            <div className='basis-3/4'>
                <SortedAndShowBy />
                <AccommodationList />
            </div>
        </div>
    );
};

FiltersAccommodation.defaultProps = {};

export default FiltersAccommodation;
