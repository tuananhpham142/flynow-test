import { FC } from 'react';
import RoomTypesSelection from '@/views/AccommodationDetail/components/RoomTypesSelection';
import GeneralInfo from '@/views/AccommodationDetail/components/GeneralInfo';
import AnchorTabs from '@/views/AccommodationDetail/components/AnchorTabs';
import Reviews from '@/views/AccommodationDetail/components/Reviews';
import Recommend from '@/views/AccommodationDetail/components/Recommend';
import SlideShow from '@/views/AccommodationDetail/components/SlideShow';
import DetailsInfo from '@/views/AccommodationDetail/components/DetailsInfo';

interface IProps {}

const AccommodationDetail: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <SlideShow />
            <AnchorTabs />
            <div className='container max-w-[1200px] px-6 lg:px-0 mx-auto'>
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
