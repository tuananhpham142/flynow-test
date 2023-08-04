import { AirlinesEnum } from 'models/Flight/FlightEnum';
import { InitSessionData } from './SessionModel';

type ContactInfo = {
    FullName: string;
    Phone: string;
    Email: string;
    IdentityNo: string;
    Address: string;
    Note: string;
};
type FlightData = {
    DepartureFlights: [];
    ReturnFlights: [];
    ItineraryType: number;
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

export type InitSessionResponse = {
    SessionId: string;
    IsDomestic: true;
    InitSessionData: InitSessionData;
    Source: Array<AirlinesEnum>;
    FlightData: FlightData;
    FlightInfoSelected: [];
    PassengerInfo: [];
    FlightInfo: [];
    ContactInfo: ContactInfo;
    BookingCode: string;
    AId: string;
    CId: string;
};
