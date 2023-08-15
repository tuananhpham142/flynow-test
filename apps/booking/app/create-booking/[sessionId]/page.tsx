'use client';
import React from 'react';
import dynamic from 'next/dynamic';

// providers
import { SWRConfig } from '@acme/api';
import { CreateBookingProvider } from 'contexts/create-booking-context/createBookingContext';
import Loading from 'app/components/Loading';

// components
const CreateBooking = dynamic(() => import('views/create-booking/index'), {
    ssr: false,
    loading: Loading,
});

// types
type Props = {
    params: { sessionId: string };
    searchParams: URLSearchParams;
};

// page
const CreateBookingPage = (props: Props) => {
    const { sessionId } = props.params;

    return (
        <SWRConfig>
            <CreateBookingProvider sessionId={sessionId}>
                <CreateBooking />
            </CreateBookingProvider>
        </SWRConfig>
    );
};

export default CreateBookingPage;
