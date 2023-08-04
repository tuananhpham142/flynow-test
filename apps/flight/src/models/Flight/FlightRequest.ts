import { IATA_AirlineCodes } from '@/types/types';
import { FlightItinerary, ViewMode } from './FlightEnum';

export type FlightRequest = {};

export interface FlightAvailabilitiesSearchRequest {
    body: {
        source: IATA_AirlineCodes;
        viewMode: ViewMode;
        SessionId: string;
        AId: string;
    };
}

export interface FlightSelectRequest {
    body: {
        SessionId: string;
        AId: string;
        CId?: string;
        Itinerary: FlightItinerary;
        FlightSession: string;
        FareOptionSession: string;
    };
}

export interface FlightAddPassengerRequest {
    body: {};
}

export interface FlightAncillaryRequest {}

export interface FlightCreateBookingRequest {
    body: {};
}

export interface FlightFareRulesRequest {
    Aid: string;
    CId?: string;
    AirlineCode: string;
    ClassName: string;
    LanguageCode: string;
}

export interface FlightIssuesRequest {
    body: {};
}

export interface FlightPassengerDetailsRequest {
    body: {};
}

export interface FlightUpdateContactRequest {
    body: {};
}
