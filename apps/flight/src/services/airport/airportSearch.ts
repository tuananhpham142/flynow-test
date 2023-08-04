import { fetchAPI } from '@acme/api';

import { AirportSearchRequest } from '@/models/Airport/AirportRequest';
import { AirportSearchResponse } from '@/models/Airport/AirportResponse';

export const airportAutoSearch = async (data: AirportSearchRequest) => {
    return fetchAPI.query<AirportSearchRequest, AirportSearchResponse>({
        url: `https://alphaapi.digipost.com.vn/api/airport/search/${data.keyword}`,
        method: 'GET',
    });
};
