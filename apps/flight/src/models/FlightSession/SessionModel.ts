import { AirlinesEnum } from '../Flight/FlightEnum';
import { FlightData, FlightInfoModel, FlightInfoSelected } from '../Flight/FlightModel';
import { ContactInfo } from '../Flight/FlightResponse';
import { PassengerInfo } from '../Passenger/PassengerModel';

export type InitSessionData = {
    ItineraryType: number;
    StartPoint: string;
    EndPoint: string;
    DepartureDate: string;
    ReturnDate: string;
    Adult: number;
    Children: number;
    Infant: number;
    IsCheapest: boolean;
};

export type SessionModel = {
    SessionId: string;
    IsDomestic: boolean;
    InitSessionData: InitSessionData;
    Source: Array<AirlinesEnum>;
    FlightData: FlightData;
    FlightInfoSelected: FlightInfoSelected;
    PassengerInfo: Array<PassengerInfo>;
    FlightInfo: Array<FlightInfoModel>;
    ContactInfo: ContactInfo;
    BookingCode: string;
    AId: string;
    CId: string;
};
