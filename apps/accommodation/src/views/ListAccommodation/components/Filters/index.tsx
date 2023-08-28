'use client';
import { FC, useState } from 'react';
import Accommodations from '../Accommodations';
import Amenities from './Amenities';
import Area from './Area';
import BoxMap from './BoxMap';
import PriceRange from './PriceRange';
import SortedAndShowBy from './SortedAndShowBy';
import StarRating from './StarRating';
import TypeOfAccommodation from './Types';
import MapView from '@/views/ListAccommodation/components/Maps';

interface IProps {
    children: React.ReactNode;
    onVisibleMaps: () => void;
}

const FiltersAccommodation: FC<IProps> = (props) => {
    const { children, onVisibleMaps } = props;

    return (
        <div className='flex gap-6'>
            <div className='basis-1/4'>
                <div className='flex flex-col gap-4'>
                    <BoxMap onClick={onVisibleMaps} />
                    <PriceRange />
                    <StarRating />
                    <Area />
                    <TypeOfAccommodation />
                    <Amenities />
                </div>
            </div>
            <div className='basis-3/4'>
                <SortedAndShowBy />
                {children}
            </div>
        </div>
    );
};

FiltersAccommodation.defaultProps = {};

export default FiltersAccommodation;
