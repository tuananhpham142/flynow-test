import { MediaClassifyEnum, MediaDirectionEnum, MediaTypeEnum } from '@/types/Media/MediaEnum';

export type MediaItemModel<T = MediaClassifyEnum> = {
    Id?: string;
    Alt: string;
    Name: string;
    Thumbnail: string;
    Type: MediaTypeEnum;
    Url: string;
    Width?: string | number;
    Height?: string | number;
    Direction?: MediaDirectionEnum;
    Description?: string;
    Classify?: T; // Phân loại ảnh: Tag
};
