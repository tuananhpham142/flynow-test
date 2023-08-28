import { TagTypeEnum } from '@/types/Tag/TagEnum';

export type TagModel = {
    Id: string;
    Code: string;
    Name: string;
    Color: string;
    Icon: string;
    IsDisplay: boolean;
    Value: string;
    LanguageCode: 'vi-VN' | 'en-US';
    Type: TagTypeEnum;
    Status: 0 | 1;
};
