import { SessionModel } from '../FlightSession/SessionModel';
import { FlightInfoSelected, FlightModel } from './FlightModel';

export type ContactInfo = {
    FullName: string;
    Phone: string;
    Email: string;
    IdentityNo: string;
    Address: string;
    Note: string;
};

export type FlightInfo = {
    BookingItem: string;
    FlightGateOrderId: string;
    PNR: string;
    TimeLimit: string;
    FlightInfoSelected: Array<FlightInfoSelected>;
    PassengerFlightInfo: [];
};

export type FlightData = {
    DepartureFlights: Array<FlightModel>;
    ReturnFlights: Array<FlightModel>;
    ItineraryType: 0;
    DepartureDate: null;
    ReturnDate: null;
    StartPoint: null;
    StartPointName: null;
    StartPointCityName: null;
    EndPoint: null;
    EndPointName: null;
    EndPointCityName: null;
    Adult: number;
    Children: number;
    Infant: number;
    DataSession: null;
    IsDomestic: false;
    Source: null;
};

export interface FlightAvailabilitiesSearchResponse extends SessionModel {}

export interface FlightSelectResponse extends SessionModel {}

export interface FlightAddPassengerResponse {}

export interface FlightAncillaryResponse {}

export interface FlightCreateBookingResponse {}

export interface FlightFareRulesResponse {
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

export interface FlightIssuesResponse {}

export interface FlightPassengerDetailsResponse {}

export interface FlightUpdateContactResponse {}
