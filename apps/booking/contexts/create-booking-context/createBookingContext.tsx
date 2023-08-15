import React, { createContext, useEffect, useReducer, useLayoutEffect, useState } from 'react';

// types
import type { InitSessionData, SessionModel } from 'models/Session/SessionModel';
import type { Action, CreateBookingProviderProps, CreateBookingContextType } from './createBookingContext.types';

// enums
import { CreateBookingDispatchEnum } from './createBookingContext.types';
import { useGetSessionMutation } from 'services/session';

// initial state
const initialState: CreateBookingContextType = {
    sessionId: '',
    sessionData: undefined,
    isLoading: true,
    updateLoading: () => {},
    updateSessionData: () => {},
    isClient: false,
};

// create context
const CreateBookingContext = createContext<CreateBookingContextType>(initialState);

// handlers
const handlers: Record<
    CreateBookingDispatchEnum,
    (state: CreateBookingContextType, action: Action) => CreateBookingContextType
> = {
    updateSessionData: (state, action) => {
        const { sessionData } = action.payload;
        return { ...state, sessionData: sessionData };
    },
    setLoading: (state, action) => {
        const { isLoading } = action.payload;
        return {
            ...state,
            isLoading: isLoading,
        };
    },
};

// reducer
const reducer = (state: CreateBookingContextType, action: Action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

// provider
const CreateBookingProvider = (props: CreateBookingProviderProps) => {
    const { children, sessionId } = props;

    const [state, dispatch] = useReducer(reducer, initialState);
    const [isClient, setIsClient] = useState(false);

    // services
    const { trigger: getSessionData } = useGetSessionMutation();

    // handler
    const updateLoading = (isLoading: boolean) => {
        dispatch({
            type: CreateBookingDispatchEnum.setLoading,
            payload: {
                isLoading,
            },
        });
    };

    const updateSessionData = (sessionData: SessionModel) => {
        dispatch({
            type: CreateBookingDispatchEnum.updateSessionData,
            payload: {
                sessionData,
            },
        });
    };

    useLayoutEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        (async () => {
            if (!isClient) {
                return;
            }

            const res = await getSessionData({
                AId: '3531',
                SessionId: sessionId,
            });

            if (res.status === 200 && res.data?.Code === 1) {
                updateSessionData(res.data.Data);
            }
        })();
    }, [isClient, sessionId]);

    return (
        <CreateBookingContext.Provider
            value={{
                ...state,
                sessionId: sessionId,
                isClient: isClient,
                updateLoading,
                updateSessionData,
            }}
        >
            {children}
        </CreateBookingContext.Provider>
    );
};

// export
export { CreateBookingProvider };

export default CreateBookingContext;
