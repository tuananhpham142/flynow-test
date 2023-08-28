import React, { FC } from 'react';
import AccommodationDetail from '@/views/AccommodationDetail';

interface IProps {}

const PreviewDetailPage: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='container max-w-[1400px] mx-auto'>
            <AccommodationDetail isPreviewPage />
        </div>
    );
};

PreviewDetailPage.defaultProps = {};

export default PreviewDetailPage;
