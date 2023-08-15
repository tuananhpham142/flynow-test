import { useMutation } from '@acme/api';
import { FlightAddPassengerRequest } from 'models/Flight/FlightRequest';
import { FlightAddPassengerResponse } from 'models/Flight/FlightResponse';

export const useAddPassengerMutation = () => {
    return useMutation<FlightAddPassengerRequest['body'], FlightAddPassengerResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-add-passenger`,
    });
};
