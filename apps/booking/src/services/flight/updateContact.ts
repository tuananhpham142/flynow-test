import { FlightUpdateContactRequest } from '@/models/Flight/FlightRequest';
import { FlightUpdateContactResponse } from '@/models/Flight/FlightResponse';
import { useMutation } from '@acme/api';

export const useUpdateContactMutation = (request: FlightUpdateContactRequest) => {
    const { body } = request;
    return useMutation<FlightUpdateContactRequest['body'], FlightUpdateContactResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-update-contact`,
        request: body,
    });
};
