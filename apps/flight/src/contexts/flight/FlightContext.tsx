import { createContext, useReducer } from 'react';

// types
import type { Action, AggregateData, FlightContextType, FlightProviderProps } from './FlightContext.type';

// enums
import { SessionModel } from '@/models/FlightSession/SessionModel';
import { FlightDispatchEnum } from './FlightContext.type';

// initial state
const initialState: FlightContextType = {
    sessionId: '',
    sessionData: null,
    departureAggregate: {
        AirlineCode: [],
        GroupClass: [],
        Stops: [],
    },
    flightViewMode: 1,
    updateFlightAggregate: () => {},
    updateSessionData: () => {},
    updateSessionId: () => {},
};

// create context
const FlightContext = createContext<FlightContextType>(initialState);

// handlers
const handlers: Record<FlightDispatchEnum, (state: FlightContextType, action: Action) => FlightContextType> = {
    updateSessionData: (state, action) => {
        const { sessionData } = action.payload;

        // update view mode
        const flightViewMode = sessionData?.FlightInfoSelected?.length === 1 ? 2 : 1;

        return { ...state, sessionData: sessionData, flightViewMode: flightViewMode };
    },
    updateSessionId: (state, action) => {
        const { sessionId } = action.payload;
        return { ...state, sessionId: sessionId };
    },
    updateFlightAggregate: (state, action) => {
        const { data } = action.payload;
        return { ...state, departureAggregate: data };
    },
};

// reducer
const reducer = (state: FlightContextType, action: Action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

// provider
const FlightProvider = (props: FlightProviderProps) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateFlightAggregate = (departureAggregate: AggregateData) => {
        dispatch({
            type: FlightDispatchEnum.updateFlightAggregate,
            payload: {
                data: departureAggregate,
            },
        });
    };

    const updateSessionId = (sessionId: string) => {
        dispatch({
            type: FlightDispatchEnum.updateSessionId,
            payload: {
                sessionId,
            },
        });
    };

    const updateSessionData = (sessionData: SessionModel) => {
        dispatch({
            type: FlightDispatchEnum.updateSessionData,
            payload: {
                sessionData,
            },
        });
    };

    return (
        <FlightContext.Provider
            value={{
                ...state,
                updateFlightAggregate,
                updateSessionData,
                updateSessionId,
            }}
        >
            {children}
        </FlightContext.Provider>
    );
};

// export
export { FlightProvider };

export default FlightContext;
