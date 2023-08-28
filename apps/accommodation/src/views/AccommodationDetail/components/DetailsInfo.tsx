'use client';
import { Typography, IconButton } from '@acme/design-system';
import React, { FC } from 'react';
import { TagModel } from '@/types/Tag/TagModel';

interface IProps {
    isPreviewPage?: boolean;
    amenities: Array<TagModel>;
    extraInformation: string;
    checkIn: string;
    checkOut: string;
    rules: Array<TagModel>;
    policies: Array<TagModel>;
}

const DetailsInfo: FC<IProps> = (props) => {
    const { isPreviewPage, amenities, extraInformation, checkIn, checkOut, policies, rules } = props;

    const renderAmenitiesItem = () => {
        return (
            <div className='flex items-center gap-1'>
                <i>icon</i>
                <Typography variant={'body16'}>Wifi</Typography>
            </div>
        );
    };

    return (
        <div className='flex flex-col mt-10 gap-10'>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Tiện ích chỗ ở
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <div className='grid grid-rows-4 grid-flow-col gap-x-8 gap-y-4'>
                    {amenities.length ? amenities.map(() => renderAmenitiesItem()) : 'Chưa có thông tin'}
                </div>
            </div>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Thông tin thêm
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <Typography className='whitespace-pre-wrap'>{extraInformation || 'Chưa có thông tin'}</Typography>
            </div>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Chính sách
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <div className='flex items-center gap-8 mb-3'>
                    <div className='flex items-center gap-2'>
                        <IconButton size='lg' variant='contained'>
                            icon
                        </IconButton>
                        <div>
                            <Typography variant={'body14'}>Giờ nhận phòng</Typography>
                            <Typography variant={'subtitle14'}>{checkIn}</Typography>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconButton size='lg' variant='contained'>
                            icon
                        </IconButton>
                        <div>
                            <Typography variant={'body14'}>Giờ trả phòng</Typography>
                            <Typography variant={'subtitle14'}>{checkOut}</Typography>
                        </div>
                    </div>
                </div>
                <div className={'mb-3'}>
                    <Typography variant={'subtitle16'} className='mb-2'>
                        Nội quy
                    </Typography>
                    <Typography className='whitespace-pre-wrap'>
                        {rules.length ? rules.map(() => renderAmenitiesItem()) : 'Chưa có thông tin'}
                    </Typography>
                </div>
                <div>
                    <Typography variant={'subtitle16'} className='mb-2'>
                        Chính sách
                    </Typography>
                    <Typography className='whitespace-pre-wrap'>
                        {policies.length ? policies.map(() => renderAmenitiesItem()) : 'Chưa có thông tin'}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

DetailsInfo.defaultProps = {};

export default DetailsInfo;
