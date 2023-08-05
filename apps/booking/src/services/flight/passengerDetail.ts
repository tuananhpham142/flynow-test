import { FlightPassengerDetailsRequest } from '@/models/Flight/FlightRequest';
import { FlightPassengerDetailsResponse } from '@/models/Flight/FlightResponse';
import { useMutation } from '@acme/api';

export const usePassengerDetailMutation = (request: FlightPassengerDetailsRequest) => {
    return useMutation<FlightPassengerDetailsRequest['body'], FlightPassengerDetailsResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-passenger-detail`,
        request: {},
    });
};
