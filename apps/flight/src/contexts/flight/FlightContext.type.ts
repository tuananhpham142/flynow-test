import { FlattedFlight, FlightInfoSelected } from '@/models/Flight/FlightModel';
import { InitSessionData } from '@/models/FlightSession/SessionResponse';

// providers props
export interface FlightProviderProps {
    children: React.ReactNode;
}

// enums
export enum FlightDispatchEnum {
    setLoading = 'setLoading',
    updateSessionId = 'updateSessionId',
    updateSessionData = 'updateSessionData',
    updateDepartureFlights = 'updateDepartureFlights',
    updateReturnFlights = 'updateReturnFlights',
    updateDepartureAggregate = 'updateDepartureAggregate',
    updateFlightInfoSelected = 'updateFlightInfoSelected',
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
    sessionData?: InitSessionData;
    departureFlights: Array<FlattedFlight>;
    returnFlights: Array<FlattedFlight>;
    flightInfoSelected: FlightInfoSelected;
    isLoading: boolean;
    departureAggregate: AggregateData;
    flightViewMode: FlightViewMode;

    // handlers
    updateLoading: (isLoading: boolean) => void;
    updateSessionId: (sessionId: string) => void;
    updateSessionData: (sessionData: InitSessionData) => void;
    updateDepartureFlights: (flights: Array<FlattedFlight>) => void;
    updateReturnFlights: (flights: Array<FlattedFlight>) => void;
    updateDepartureAggregate: (departureAggregate: AggregateData) => void;
    updateFlightInfoSelected: (flightInfoSelected: FlightInfoSelected) => void;
}
