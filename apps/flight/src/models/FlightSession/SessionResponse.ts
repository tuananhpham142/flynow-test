import { InitSessionRequest } from './SessionRequest';
import { ContactInfo, FlightData, FlightInfo } from '@/models/Flight/FlightResponse';
import { IATA_AirlineCodes } from '@/types/types';
import { FlightInfoSelected } from '../Flight/FlightModel';

export type InitSessionData = Omit<InitSessionRequest['body'], 'Aid'>;

export type InitSessionResponse = {
    SessionId: string;
    IsDomestic: true;
    InitSessionData: InitSessionData;
    Source: Array<IATA_AirlineCodes>;
    FlightData: FlightData;
    FlightInfoSelected: FlightInfoSelected;
    PassengerInfo: [];
    FlightInfo: FlightInfo;
    ContactInfo: ContactInfo;
    BookingCode: string;
    AId: string;
    CId: string;
};
