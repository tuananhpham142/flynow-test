import { Typography } from '@acme/design-system';
import Logo from '@acme/pages/components/Logo';
import React from 'react';

type Props = {};

const EmptyResult = (props: Props) => {
    return (
        <div className='flex flex-col gap-4 items-center w-full h-full pt-16'>
            <Logo width={200} className='fill-grey-400' />
            <div className='text-center'>
                <Typography variant='subtitle20' className='text-grey-700'>
                    Không có chuyến bay phù hợp
                </Typography>
                <Typography variant='body16' className='text-grey-600'>
                    Vui lòng sửa bộ lọc hoặc thay đổi ưu tiên tìm kiếm
                </Typography>
            </div>
        </div>
    );
};

export default EmptyResult;
