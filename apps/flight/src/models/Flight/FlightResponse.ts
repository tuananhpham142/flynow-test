import { FlightInfoSelected, FlightModel } from './FlightModel';
import { IATA_AirlineCodes } from '@/types/types';
import { InitSessionData } from '../FlightSession/SessionResponse';

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

export interface FlightAvailabilitiesSearchResponse {
    SessionId: string;
    IsDomestic: true;
    InitSessionData: InitSessionData;
    Source: IATA_AirlineCodes;
    FlightData: FlightData;
    FlightInfoSelected: Array<FlightInfoSelected>;
    PassengerInfo: [];
    FlightInfo: [];
    ContactInfo: ContactInfo;
    BookingCode: string;
    AId: string;
    CId: string;
}

export interface FlightSelectResponse {
    SessionId: string;
    IsDomestic: true;
    InitSessionData: InitSessionData;
    Source: IATA_AirlineCodes;
    FlightData: FlightData;
    FlightInfoSelected: FlightInfoSelected;
    PassengerInfo: [];
    FlightInfo: Array<FlightInfo>;
    ContactInfo: ContactInfo;
    BookingCode: string;
    AId: string;
    CId: string;
}

export interface FlightAddPassengerResponse {}

export interface FlightAncillaryResponse {}

export interface FlightCreateBookingResponse {}

export interface FlightFareRulesResponse {}

export interface FlightIssuesResponse {}

export interface FlightPassengerDetailsResponse {}

export interface FlightUpdateContactResponse {}
