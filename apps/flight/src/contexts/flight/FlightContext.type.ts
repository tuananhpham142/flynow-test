import { FlattedFlight } from '@/models/Flight/FlightModel';
import { SessionModel } from '@/models/FlightSession/SessionModel';

// providers props
export interface FlightProviderProps {
    children: React.ReactNode;
}

// enums
export enum FlightDispatchEnum {
    updateSessionId = 'updateSessionId',
    updateSessionData = 'updateSessionData',
    updateFlightAggregate = 'updateFlightAggregate',
}

export enum FlightViewMode {
    Departure = 1,
    Return = 2,
}

// dispatch action
export interface Action {
    type: FlightDispatchEnum;
    payload: any;
}

// aggregate
export type AggregateKeys = keyof Pick<FlattedFlight, 'GroupClass' | 'Stops' | 'AirlineCode'>;

export type AggregateValue = {
    label?: string;
    value: string | number;
    count: number;
};
export type AggregateData = Record<AggregateKeys, Array<AggregateValue>>;

export interface FlightContextType {
    // state
    sessionId: string;
    sessionData: SessionModel;
    departureAggregate: AggregateData;
    flightViewMode: FlightViewMode;

    // handlers
    updateSessionId: (sessionId: string) => void;
    updateSessionData: (sessionData: SessionModel) => void;
    updateFlightAggregate: (departureAggregate: AggregateData) => void;
}
