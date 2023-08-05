import { FC } from 'react';
import AnchorTabs from './components/AnchorTabs';
import DetailsInfo from './components/DetailsInfo';
import GeneralInfo from './components/GeneralInfo';
import Recommend from './components/Recommend';
import Reviews from './components/Reviews';
import SlideShow from './components/SlideShow';

interface IProps {}

const AccommodationDetail: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <SlideShow />
            <AnchorTabs />

            <div className='container max-w-[1200px] mx-auto'>
                <GeneralInfo />
                <DetailsInfo />
                <Reviews />
                <Recommend />
            </div>
        </div>
    );
};

AccommodationDetail.defaultProps = {};

export default AccommodationDetail;
