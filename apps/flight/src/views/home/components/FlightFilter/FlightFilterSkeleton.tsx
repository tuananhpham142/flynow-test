import { Skeleton } from '@acme/design-system';
import React from 'react';

type Props = {};

const FlightFilterSkeleton = (props: Props) => {
    return (
        <div className='flex flex-col gap-3 py-14'>
            <div className='flex flex-col gap-3 bg-white p-2 rounded-lg border border-grey-300'>
                <Skeleton width={'100%'} height={24} variant='rounded' />
                <div className='flex flex-wrap gap-2'>
                    <Skeleton width={100} height={32} variant='circular' />
                    <Skeleton width={150} height={32} variant='circular' />
                    <Skeleton width={170} height={32} variant='circular' />
                    <Skeleton width={80} height={32} variant='circular' />
                </div>
            </div>
            <div className='flex flex-col gap-3 bg-white p-2 rounded-lg border border-grey-300'>
                <Skeleton width={'100%'} height={24} variant='rounded' />
                <div className='flex flex flex-col gap-3'>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 bg-white p-2 rounded-lg border border-grey-300'>
                <Skeleton width={'100%'} height={24} variant='rounded' />
                <div className='flex flex flex-col gap-3'>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 bg-white p-2 rounded-lg border border-grey-300'>
                <Skeleton width={'100%'} height={24} variant='rounded' />
                <div className='flex flex flex-col gap-3'>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                    <div className='flex gap-2 items-center justify-between'>
                        <Skeleton width={30} height={30} variant='circular' />
                        <Skeleton width={220} height={30} variant='rounded' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightFilterSkeleton;
