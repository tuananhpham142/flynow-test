import React, { FC } from 'react';
import ListBookingPage from '@/views/Accommodation/List';

interface IProps {}

const AccommodationBookings: FC<IProps> = (props) => {
    const {} = props;

    return <ListBookingPage />;
};

AccommodationBookings.defaultProps = {};

export default AccommodationBookings;
