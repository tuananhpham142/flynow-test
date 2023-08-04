import { fetchAPI } from '@acme/api';

import { FlightAvailabilitiesSearchRequest } from '@/models/Flight/FlightRequest';
import { FlightAvailabilitiesSearchResponse } from '@/models/Flight/FlightResponse';

export const searchAvailabilitiesFlight = async (data: FlightAvailabilitiesSearchRequest) => {
    return fetchAPI.mutation<FlightAvailabilitiesSearchRequest['body'], FlightAvailabilitiesSearchResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-availabilities-search',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
