import { fetchAPI } from '@acme/api';

import { FlightPassengerDetailsRequest } from '@/models/Flight/FlightRequest';
import { FlightPassengerDetailsResponse } from '@/models/Flight/FlightResponse';

export const flightPassengerDetails = async (data: FlightPassengerDetailsRequest) => {
    return fetchAPI.mutation<FlightPassengerDetailsRequest['body'], FlightPassengerDetailsResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-passenger-detail',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
