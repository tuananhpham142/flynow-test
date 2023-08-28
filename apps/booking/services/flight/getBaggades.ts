import { useQuery } from '@acme/api';
import { FlightGetBaggagesRequest } from 'models/Flight/FlightRequest';
import { FlightGetBaggagesResponse } from 'models/Flight/FlightResponse';

import { queryString } from '@acme/utils';

export const useGetBaggadeQuery = (request: FlightGetBaggagesRequest) => {
    const query = queryString.stringify(request);

    return useQuery<FlightGetBaggagesRequest, FlightGetBaggagesResponse>({
        method: 'GET',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-ancillary?${query}`,
        request: {} as FlightGetBaggagesRequest,
    });
};
