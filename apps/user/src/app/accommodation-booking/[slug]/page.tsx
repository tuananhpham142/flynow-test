import React, { FC } from 'react';
import AccommodationBookingDetail from '@/views/Accommodation/Detail';

interface IProps {}

const AccommodationBookingDetailPage: FC<IProps> = (props) => {
    const {} = props;

    return <AccommodationBookingDetail />;
};

AccommodationBookingDetailPage.defaultProps = {};

export default AccommodationBookingDetailPage;
