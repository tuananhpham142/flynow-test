import { useMutation } from '@acme/api';
import { FlightUpdateContactRequest } from 'models/Flight/FlightRequest';
import { FlightUpdateContactResponse } from 'models/Flight/FlightResponse';

export const useUpdateContactMutation = () => {
    return useMutation<FlightUpdateContactRequest['body'], FlightUpdateContactResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-update-contact`,
    });
};
