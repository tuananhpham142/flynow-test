import { MediaItemModel } from '@/types/Media/MediaModel';

export type ReviewItemModel = {
    Id: string;
    Name: string;
    Avatar: string;
    Comment: string;
    Rating: string;
    CreateDate: string;
    Media: Array<MediaItemModel>;
};

export type OverallRatingModel = {
    AvgCleanliness: number;
    AvgValuable: number;
    AvgService: number;
};
