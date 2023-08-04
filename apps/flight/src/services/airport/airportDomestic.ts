import { fetchAPI } from '@acme/api';

import { AirportDetailByCodeRequest } from '@/models/Airport/AirportRequest';
import { AirportAutosuggestResponse } from '@/models/Airport/AirportResponse';

export const airportDomestic = async () => {
    return fetchAPI.query<AirportDetailByCodeRequest, AirportAutosuggestResponse>({
        url: `https://alphaapi.digipost.com.vn/api/airport/domestic`,
        method: 'GET',
    });
};
