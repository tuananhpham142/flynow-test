import { FlightFareRulesRequest } from '@/models/Flight/FlightRequest';
import { FlightFareRulesResponse } from '@/models/Flight/FlightResponse';
import { useQuery } from '@acme/api';

import { queryString } from '@acme/utils';

export const useGetFareRuleQuery = (request: FlightFareRulesRequest) => {
    const query = queryString.stringify(request);

    return useQuery<FlightFareRulesRequest, FlightFareRulesResponse>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-fare-rule?${query}`,
        request: {} as FlightFareRulesRequest,
    });
};
