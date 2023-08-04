import { fetchAPI } from '@acme/api';

import { FlightUpdateContactRequest } from '@/models/Flight/FlightRequest';
import { FlightUpdateContactResponse } from '@/models/Flight/FlightResponse';

export const flightUpdateContact = async (data: FlightUpdateContactRequest) => {
    return fetchAPI.mutation<FlightUpdateContactRequest['body'], FlightUpdateContactResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-update-contact',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
