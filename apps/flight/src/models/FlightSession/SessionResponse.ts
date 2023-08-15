import { InitSessionRequest } from './SessionRequest';
import { ContactInfo, FlightData, FlightInfo } from '@/models/Flight/FlightResponse';
import { IATA_AirlineCodes } from '@/types/types';
import { FlightInfoSelected } from '../Flight/FlightModel';
import { SessionModel } from './SessionModel';

export type InitSessionData = Omit<InitSessionRequest['body'], 'Aid'>;

export type InitSessionResponse = SessionModel & {};
