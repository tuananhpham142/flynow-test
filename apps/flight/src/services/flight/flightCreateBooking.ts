import { fetchAPI } from '@acme/api';

import { FlightCreateBookingRequest } from '@/models/Flight/FlightRequest';
import { FlightCreateBookingResponse } from '@/models/Flight/FlightResponse';

export const flightCreateBooking = async (data: FlightCreateBookingRequest) => {
    return fetchAPI.mutation<FlightCreateBookingRequest['body'], FlightCreateBookingResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-create-booking',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
