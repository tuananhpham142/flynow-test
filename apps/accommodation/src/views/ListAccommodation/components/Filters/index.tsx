'use client';
import { FC } from 'react';
import AccommodationList from '../AccommodationList';
import Amenities from './Amenities';
import Area from './Area';
import BoxMap from './BoxMap';
import PriceRange from './PriceRange';
import SortedAndShowBy from './SortedAndShowBy';
import StarRating from './StarRating';
import TypeOfAccommodation from './Types';

interface IProps {}

const FiltersAccommodation: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='flex gap-6'>
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
