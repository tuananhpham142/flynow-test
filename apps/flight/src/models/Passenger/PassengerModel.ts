export type PassengerInfo = {
    Index: number;
    Gender: Gender | null;
    Type: string;
    Group: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Birthday: string;
    PassportExpiryDate: string;
    PassportIssueCountry: string;
    PassportNumber: string;
};

export type PassengerFlightInfoModel = {
    PassengerIndex: number;
    PassengerFullName: string;
    FlightInfo: [
        {
            FlightNumber: string;
            PNR: string;
            TicketNumber: string;
            Baggage: string;
        },
    ];
};
