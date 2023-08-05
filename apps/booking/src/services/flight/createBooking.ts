import { FlightCreateBookingRequest } from '@/models/Flight/FlightRequest';
import { FlightCreateBookingResponse } from '@/models/Flight/FlightResponse';
import { useMutation } from '@acme/api';

export const useCreateBookingMutation = (request: FlightCreateBookingRequest) => {
    return useMutation<FlightCreateBookingRequest['body'], FlightCreateBookingResponse>({
        method: 'POST',
        url: `https://alphaapi.digipost.com.vn/api/publicbooking/flight-create-booking`,
        request: {},
    });
};
