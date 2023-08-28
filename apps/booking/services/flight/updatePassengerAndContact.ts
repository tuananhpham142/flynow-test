import { useMutation } from '@acme/api';
import { FlightUpdatePassengerAndContactRequest } from 'models/Flight/FlightRequest';
import { FlightUpdatePassengerAndContactResponse } from 'models/Flight/FlightResponse';

export const useUpdatePassengerAndContactMutation = () => {
    return useMutation<FlightUpdatePassengerAndContactRequest['body'], FlightUpdatePassengerAndContactResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-update-passenger-contact`,
    });
};
