import { SessionModel } from 'models/Session/SessionModel';
import { BaggageItem } from './FlightModel';

export interface FlightAddPassengerResponse extends SessionModel {}

export interface FlightAncillaryResponse extends SessionModel {}

export interface FlightCreateBookingResponse extends SessionModel {}

export interface FlightIssuesResponse extends SessionModel {}

export interface FlightPassengerDetailsResponse extends SessionModel {}

export interface FlightUpdateContactResponse extends SessionModel {}

export interface FlightGetSessionResponse extends SessionModel {}

export interface FlightGetFareRuleResponse {
    AirlineCode: string;
    ClassCode: string;
    ClassName: string;
    Translations: [
        {
            CancellationRefund: string;
            TimeChange: string;
            ItineraryChange: string;
            PassengerInfoChange: string;
            Remarks: string;
        },
    ];
}

export interface FlightGetBaggagesResponse {
    DepartureBaggages: Array<BaggageItem> | null;
    ReturnBaggages: Array<BaggageItem> | null;
}
