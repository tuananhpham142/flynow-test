'use client';
import React from 'react';
import Booking from 'views/create-booking/index';
import { SWRConfig } from '@acme/api';
import { CreateBookingProvider } from 'contexts/create-booking-context/createBookingContext';
import dynamic from 'next/dynamic';

// const CreateBooking = dynamic(() => import('views/create-booking/index'), { ssr: false });

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
