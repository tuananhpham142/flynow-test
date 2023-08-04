import React, { FC } from 'react';
import SlideShow from './components/SlideShow';
import AnchorTabs from './components/AnchorTabs';
import GeneralInfo from './components/GeneralInfo';
import DetailsInfo from './components/DetailsInfo';
import Reviews from './components/Reviews';
import Recommend from './components/Recommend';
import RoomTypesSelection from './components/RoomTypesSelection';

interface IProps {}

const AccommodationDetail: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <SlideShow />
            <AnchorTabs />

            <div className='container max-w-[1280px] mx-auto'>
                <GeneralInfo />
                <RoomTypesSelection />
                <DetailsInfo />
                <Reviews />
                <Recommend />
            </div>
        </div>
    );
};

AccommodationDetail.defaultProps = {};

export default AccommodationDetail;
