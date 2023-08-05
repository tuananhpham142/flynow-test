'use client';
import { SWRConfig } from '@acme/api';
import { CreateBookingProvider } from 'contexts/create-booking-context/createBookingContext';
import Booking from 'views/Booking/index';

type Props = {
    params: { sessionId: string };
    searchParams: URLSearchParams;
};

const CreateBookingPage = (props: Props) => {
    const { sessionId } = props.params;

    return (
        <SWRConfig>
            <CreateBookingProvider sessionId={sessionId}>
                <Booking />
            </CreateBookingProvider>
        </SWRConfig>
    );
};

export default CreateBookingPage;
