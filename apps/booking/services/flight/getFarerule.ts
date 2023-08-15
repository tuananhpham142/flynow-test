import { useQuery } from '@acme/api';
import { FlightGetFareRuleRequest } from 'models/Flight/FlightRequest';
import { FlightGetFareRuleResponse } from 'models/Flight/FlightResponse';

import { queryString } from '@acme/utils/common/query-string.utils';

export const useGetFareRuleQuery = (request: FlightGetFareRuleRequest) => {
    const query = queryString.stringify(request);

    console.log(query);

    return useQuery<FlightGetFareRuleRequest, FlightGetFareRuleResponse>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-fare-rule?${query}`,
        request: {} as FlightGetFareRuleRequest,
    });
};
