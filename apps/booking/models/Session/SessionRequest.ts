export interface InitSessionRequest {
    body: {
        ItineraryType: number;
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
