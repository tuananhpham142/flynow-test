import { fetchAPI } from '@acme/api';

import { FlightAncillaryRequest } from '@/models/Flight/FlightRequest';
import { FlightAncillaryResponse } from '@/models/Flight/FlightResponse';

export const flightAncillary = async (data: FlightAncillaryRequest) => {
    return fetchAPI.mutation<FlightAncillaryRequest, FlightAncillaryResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-ancillary',
        method: 'GET',
        request: {},
        config: {},
    });
};
