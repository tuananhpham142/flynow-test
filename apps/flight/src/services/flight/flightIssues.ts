import { fetchAPI } from '@acme/api';

import { FlightIssuesRequest } from '@/models/Flight/FlightRequest';
import { FlightIssuesResponse } from '@/models/Flight/FlightResponse';

export const flightIssues = async (data: FlightIssuesRequest) => {
    return fetchAPI.mutation<FlightIssuesRequest['body'], FlightIssuesResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-issues',
        method: 'POST',
        request: data.body,
        config: {},
    });
};
