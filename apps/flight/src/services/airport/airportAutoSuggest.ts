import { fetchAPI } from '@acme/api';

import { AirportAutosuggestRequest } from '@/models/Airport/AirportRequest';
import { AirportAutosuggestResponse } from '@/models/Airport/AirportResponse';

export const airportAutoSuggest = async (data: AirportAutosuggestRequest) => {
    return fetchAPI.query<AirportAutosuggestRequest, AirportAutosuggestResponse>({
        url: `https://alphaapi.digipost.com.vn/api/airport/search/${data.keyword}`,
        method: 'GET',
    });
};
