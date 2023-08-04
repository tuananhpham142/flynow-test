import { fetchAPI } from '@acme/api';

import { FlightSelectRequest } from '@/models/Flight/FlightRequest';
import { FlightSelectResponse } from '@/models/Flight/FlightResponse';

export const flightSelect = async (data: FlightSelectRequest) => {
    return fetchAPI.mutation<FlightSelectRequest['body'], FlightSelectResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-select',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
