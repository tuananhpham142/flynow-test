import { fetchAPI } from '@acme/api';

import { FlightAddPassengerRequest } from '@/models/Flight/FlightRequest';
import { FlightAddPassengerResponse } from '@/models/Flight/FlightResponse';

export const flightAddPassenger = async (data: FlightAddPassengerRequest) => {
    return fetchAPI.mutation<FlightAddPassengerRequest['body'], FlightAddPassengerResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-add-passenger',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
