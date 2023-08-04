import { fetchAPI } from '@acme/api';

import { FlightFareRulesRequest } from '@/models/Flight/FlightRequest';
import { FlightFareRulesResponse } from '@/models/Flight/FlightResponse';

export const FlightFareRules = async (data: FlightFareRulesRequest) => {
    return fetchAPI.query<FlightFareRulesRequest, FlightFareRulesResponse>({
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-fare-rule`,
        method: 'GET',
    });
};
