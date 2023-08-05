import { FlightGetSessionRequest } from '@/models/Flight/FlightRequest';
import { FlightGetSessionResponse } from '@/models/Flight/FlightResponse';
import { useMutation } from '@acme/api';

export const useGetSessionMutation = () => {
    return useMutation<FlightGetSessionRequest['body'], FlightGetSessionResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-get-session`,
    });
};
