import { FC } from 'react';
import RoomTypesSelection from '@/views/AccommodationDetail/components/RoomTypesSelection';
import GeneralInfo from '@/views/AccommodationDetail/components/GeneralInfo';
import AnchorTabs from '@/views/AccommodationDetail/components/AnchorTabs';
import Reviews from '@/views/AccommodationDetail/components/Reviews';
import Recommend from '@/views/AccommodationDetail/components/Recommend';
import SlideShow from '@/views/AccommodationDetail/components/SlideShow';
import DetailsInfo from '@/views/AccommodationDetail/components/DetailsInfo';
import { AcdDetailResponse } from '@/types/Accommodation/AcdModel';

interface IProps {
    isPreviewPage?: boolean;
}

const AccommodationDetail: FC<IProps> = (props) => {
    const { isPreviewPage } = props;

    const fakeData: AcdDetailResponse = {
        Amenities: [],
        Avatar: '',
        CheckIn: '00 : 00',
        CheckOut: '00 : 00',
        Code: '',
        Description: '',
        ExtraInformation: '',
        Features: [],
        Id: '',
        Media: [],
        Name: '',
        OverallRating: { AvgCleanliness: 0, AvgService: 0, AvgValuable: 0 },
        Place: { Latitude: 0, Longitude: 0, PlaceId: '', PlaceName: '' },
        Policies: [],
        Price: 0,
        Reviews: [],
        RoomClasses: [],
        Rules: [],
        SpecialAmenities: [],
        TotalRating: 0,
        TotalReview: 0,
        TotalRatingText: '',
        UnitPrice: 0,
    };

    return (
        <div>
            <SlideShow media={fakeData.Media} isPreviewPage={isPreviewPage} />
            <AnchorTabs />
            <div className='container max-w-[1200px] px-6 lg:px-0 mx-auto'>
                <GeneralInfo
                    isPreviewPage={isPreviewPage}
                    name={fakeData.Name}
                    description={fakeData.Description}
                    totalRating={fakeData.TotalRating}
                    totalReview={fakeData.TotalReview}
                    unitPrice={fakeData.UnitPrice}
                    price={fakeData.Price}
                    features={fakeData.Features}
                    specialAmenities={fakeData.SpecialAmenities}
                    overallRating={fakeData.OverallRating}
                />
                <RoomTypesSelection isPreviewPage={isPreviewPage} roomClasses={fakeData.RoomClasses} />
                <DetailsInfo
                    isPreviewPage={isPreviewPage}
                    amenities={fakeData.Amenities}
                    extraInformation={fakeData.ExtraInformation}
                    rules={fakeData.Rules}
                    policies={fakeData.Policies}
                    checkIn={fakeData.CheckIn}
                    checkOut={fakeData.CheckOut}
                />
                <Reviews
                    totalRating={fakeData.TotalRating}
                    totalReview={fakeData.TotalReview}
                    totalRatingText={fakeData.TotalRatingText}
                    reviews={fakeData.Reviews}
                />
                <Recommend isPreviewPage={isPreviewPage} />
            </div>
        </div>
    );
};

AccommodationDetail.defaultProps = {};

export default AccommodationDetail;
