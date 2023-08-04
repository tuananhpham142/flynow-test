import React, { createContext, useReducer } from 'react';

// types
import type { InitSessionData } from '@/models/FlightSession/SessionResponse';
import type { FlattedFlight, FlightInfoSelected } from '@/models/Flight/FlightModel';
import type { Action, FlightProviderProps, FlightContextType, AggregateData } from './FlightContext.type';

// enums
import { FlightDispatchEnum } from './FlightContext.type';

// initial state
const initialState: FlightContextType = {
    sessionId: '',
    sessionData: undefined,
    returnFlights: [],
    departureFlights: [],
    isLoading: true,
    departureAggregate: {
        AirlineCode: [],
        GroupClass: [],
        Stops: [],
    },
    flightInfoSelected: [],
    flightViewMode: 1,
    updateDepartureFlights: () => {},
    updateReturnFlights: () => {},
    updateLoading: () => {},
    updateDepartureAggregate: () => {},
    updateSessionData: () => {},
    updateSessionId: () => {},
    updateFlightInfoSelected: () => {},
};

// create context
const FlightContext = createContext<FlightContextType>(initialState);

// handlers
const handlers: Record<FlightDispatchEnum, (state: FlightContextType, action: Action) => FlightContextType> = {
    updateSessionData: (state, action) => {
        const { sessionData } = action.payload;
        return { ...state, sessionData: sessionData };
    },
    updateSessionId: (state, action) => {
        const { sessionId } = action.payload;
        return { ...state, sessionId: sessionId };
    },
    updateDepartureFlights: (state, action) => {
        const { departureFlights } = action.payload;
        return {
            ...state,
            departureFlights: departureFlights,
            isLoading: false,
        };
    },
    updateReturnFlights: (state, action) => {
        const { returnFlights } = action.payload;
        return {
            ...state,
            returnFlights: returnFlights,
            isLoading: false,
        };
    },
    updateDepartureAggregate: (state, action) => {
        const { data } = action.payload;
        return { ...state, departureAggregate: data };
    },
    setLoading: (state, action) => {
        const { isLoading } = action.payload;
        return {
            ...state,
            isLoading: isLoading,
        };
    },
    updateFlightInfoSelected: (state, action) => {
        const { flightInfoSelected } = action.payload;
        let viewMode;
        if (state.sessionData?.ItineraryType === 1) {
            viewMode = 1;
        } else {
            viewMode = flightInfoSelected.length === 0 ? 1 : 2;
        }

        return {
            ...state,
            flightInfoSelected: flightInfoSelected,
            flightViewMode: viewMode,
        };
    },
};

// reducer
const reducer = (state: FlightContextType, action: Action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

// provider
const FlightProvider = (props: FlightProviderProps) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    // handler
    const updateDepartureFlights = (newFlights: Array<FlattedFlight>) => {
        dispatch({
            type: FlightDispatchEnum.updateDepartureFlights,
            payload: {
                departureFlights: newFlights,
            },
        });
    };

    const updateReturnFlights = (newFlights: Array<FlattedFlight>) => {
        dispatch({
            type: FlightDispatchEnum.updateReturnFlights,
            payload: {
                returnFlights: newFlights,
            },
        });
    };

    const updateLoading = (isLoading: boolean) => {
        dispatch({
            type: FlightDispatchEnum.setLoading,
            payload: {
                isLoading,
            },
        });
    };

    const updateDepartureAggregate = (departureAggregate: AggregateData) => {
        dispatch({
            type: FlightDispatchEnum.updateDepartureAggregate,
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

    const updateSessionData = (sessionData: InitSessionData) => {
        dispatch({
            type: FlightDispatchEnum.updateSessionData,
            payload: {
                sessionData,
            },
        });
    };

    const updateFlightInfoSelected = (flightInfoSelected: FlightInfoSelected) => {
        dispatch({
            type: FlightDispatchEnum.updateFlightInfoSelected,
            payload: {
                flightInfoSelected,
            },
        });
    };

    return (
        <FlightContext.Provider
            value={{
                ...state,
                updateDepartureFlights,
                updateReturnFlights,
                updateLoading,
                updateDepartureAggregate,
                updateSessionData,
                updateSessionId,
                updateFlightInfoSelected,
            }}
        >
            {children}
        </FlightContext.Provider>
    );
};

// export
export { FlightProvider };

export default FlightContext;
