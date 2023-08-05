import { SessionModel } from 'models/Session/SessionModel';

// providers props
export interface CreateBookingProviderProps {
    children: React.ReactNode;
    sessionId: string;
}

// enums
export enum CreateBookingDispatchEnum {
    setLoading = 'setLoading',
    updateSessionData = 'updateSessionData',
}

export enum CreateBookingViewMode {
    Departure = 1,
    Return = 2,
}

// dispatch action
export interface Action {
    type: CreateBookingDispatchEnum;
    payload: any;
}

// aggregate

export interface CreateBookingContextType {
    // state
    sessionId: string;
    sessionData?: SessionModel;
    isLoading: boolean;
    // handlers
    updateLoading: (isLoading: boolean) => void;
    updateSessionData: (sessionData: SessionModel) => void;
}
