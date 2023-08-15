import React, { FC } from 'react';
import OriginalPage from '../views/booking';

interface IProps {}

const BookingHomePage: FC<IProps> = (props) => {
    const {} = props;

    return <OriginalPage />;
};

BookingHomePage.defaultProps = {};

export default BookingHomePage;
