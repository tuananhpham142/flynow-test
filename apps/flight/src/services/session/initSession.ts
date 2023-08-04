import { fetchAPI } from '@acme/api';
import { InitSessionRequest } from '@/models/FlightSession/SessionRequest';
import { InitSessionResponse } from '@/models/FlightSession/SessionResponse';

export const flightInitSession = async (data: InitSessionRequest) => {
    return fetchAPI.mutation<InitSessionRequest['body'], InitSessionResponse>({
        url: 'https://alphaapi.digipost.com.vn/api/publicbooking/flight-init-session',
        method: 'POST',
        request: data.body,
    });
};
