import { useMutation } from '@acme/api';
import { FlightUpdatePassengerBaggageRequest } from 'models/Flight/FlightRequest';
import { FlightUpdatePassengerBaggageResponse } from 'models/Flight/FlightResponse';

export const useUpdatePassengerBaggageMutation = () => {
    return useMutation<FlightUpdatePassengerBaggageRequest['body'], FlightUpdatePassengerBaggageResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-passenger-detail`,
    });
};
