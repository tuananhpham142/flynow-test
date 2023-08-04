import { FlightItinerary } from '../Flight/FlightEnum';

export interface InitSessionRequest {
    body: {
        ItineraryType: FlightItinerary;
        StartPoint: string;
        EndPoint: string;
        DepartureDate: string;
        ReturnDate: string;
        Adult: number;
        Children: number;
        Infant: number;
        IsCheapest: boolean;
        AId: string;
    };
}
