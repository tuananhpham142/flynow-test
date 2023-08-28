import { MediaItemModel } from '@/types/Media/MediaModel';
import { TagModel } from '@/types/Tag/TagModel';
import { OverallRatingModel, ReviewItemModel } from '@/types/Review/ReviewModel';

export interface AcdDetailResponse {
    Id: string;
    Name: string;
    Avatar: string;
    Description: string;
    Code: string;
    CheckIn: string;
    CheckOut: string;
    ExtraInformation: string; // DOM html
    Place: {
        PlaceName: string;
        PlaceId: string;
        Longitude: number;
        Latitude: number;
    };
    Price: number;
    UnitPrice: number;
    TotalReview: number;
    TotalRating: number;
    TotalRatingText: string;
    OverallRating: OverallRatingModel;
    Amenities: Array<TagModel>;
    SpecialAmenities: Array<TagModel>;
    Features: Array<TagModel>;
    Rules: Array<TagModel>;
    Policies: Array<TagModel>;
    Media: Array<MediaItemModel>;
    Reviews: Array<ReviewItemModel>;
    RoomClasses: Array<AcdDetailResponse>;
}
