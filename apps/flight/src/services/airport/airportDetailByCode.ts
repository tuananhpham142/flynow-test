import { fetchAPI } from '@acme/api';

import { AirportDetailByCodeRequest } from '@/models/Airport/AirportRequest';
import { AirportDetailByCodeResponse } from '@/models/Airport/AirportResponse';

export const airportDetailByCode = async (data: AirportDetailByCodeRequest) => {
    return fetchAPI.query<AirportDetailByCodeRequest, AirportDetailByCodeResponse>({
        url: `https://alphaapi.digipost.com.vn/api/airport/${data.code}`,
        method: 'GET',
    });
};
