import { useQuery } from '@acme/api';
import { queryString } from '@acme/utils';
import { FlightGetFareRuleRequest } from 'models/Flight/FlightRequest';
import { FlightGetFareRuleResponse } from 'models/Flight/FlightResponse';

export const useGetFareRuleQuery = (request: FlightGetFareRuleRequest) => {
    const query = queryString.stringify(request);
    return useQuery<FlightGetFareRuleRequest, FlightGetFareRuleResponse>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-fare-rule?${query}`,
        request: {} as FlightGetFareRuleRequest,
    });
};
