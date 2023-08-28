import React, { createContext, useReducer } from 'react';

// types
import type { Action, FlightProviderProps, FlightContextType, AggregateData } from './FlightContext.type';

// enums
import { FlightDispatchEnum } from './FlightContext.type';
import { SessionModel } from '@/models/FlightSession/SessionModel';
import { useCookie } from '@/hooks/useCookie';

// initial state
const initialState: FlightContextType = {
    sessionId: '',
    sessionData: undefined,
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
        const { sessionData } = action.payload as { sessionData: SessionModel };

        // update view mode
        let flightViewMode = state.flightViewMode;
        if (sessionData.InitSessionData.ItineraryType === 2) {
            flightViewMode = sessionData?.FlightInfoSelected?.length === 1 ? 2 : 1;
        }

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
    // const { cookie: sessionId, setCookieValue, removeCookie } = useCookie('flight-session-id');

    // console.log(sessionId);

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
