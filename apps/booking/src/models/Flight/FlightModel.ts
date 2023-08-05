import { PassengerFlightInfoModel } from '@/models/Passenger/PassengerModel';
import { AirlinesEnum, FlightItinerary } from './FlightEnum';

export type FareOption = {
    BaseAdult: number;
    BaseChild: number;
    BaseInf: number;
    FeeAdult: number;
    FeeChild: number;
    FeeInf: number;
    AirporFeetAdult: number;
    AirportFeeChild: number;
    AirportFeeInf: number;
    TaxAdult: number;
    TaxChild: number;
    TaxInf: number;
    TotalPrice: number;
    IssueFee: number;
    SeatRemaining: number;
    LastTkDate: null;
    IsCanHold: boolean;
    Class: string;
    GroupClass: string;
    FareOptionSession: string;
    FlightSession: string;
    Baggages: {
        HandBaggage: string;
        BaggageAllowance: string;
    };
};

export type FlightSegment = {
    AirlineCode: string;
    AirlineName: string;
    AirlineImage: string;
    StartDate: string;
    EndDate: string;
    StartPoint: string;
    StartPointName: string;
    StartPointCityName: string;
    EndPoint: string;
    EndPointName: string;
    EndPointCityName: string;
    FlightNumber: string;
    Plane: string;
    FlightTime: number;
    Class: string;
    HandBaggage: string;
    BaggageAllowance: string;
};

export type FlightModel = {
    ProductId: string;
    ServicePriceId: string;
    GroupServiceId: string;
    DataSrcSessionId: string;
    FareOptions: Array<FareOption>;
    StartPoint: string;
    EndPoint: string;
    FlightNumber: string;
    AirlineCode: AirlinesEnum;
    AirlineName: string;
    AirlineImage: string;
    StartDate: string;
    EndDate: string;
    Stops: number;
    Duration: number;
    ListSegment: Array<FlightSegment>;
};

export type SelectedFlight = FlightModel & { Index: FlightItinerary; ItineraryRelated: number };

export type FlightInfoSelected = [SelectedFlight, SelectedFlight] | [SelectedFlight] | [];

export type FlightInfoModel = {
    BookingItem: string;
    FlightGateOrderId: string;
    PNR: string;
    TimeLimit: string;
    FlightInfoSelected: FlightInfoSelected;
    PassengerFlightInfo: Array<PassengerFlightInfoModel>;
};

export type FlightData = {
    DepartureFlights: Array<FlightModel>;
    ReturnFlights: Array<FlightModel>;
    ItineraryType: number;
    DepartureDate: string | null;
    ReturnDate: string | null;
    StartPoint: string | null;
    StartPointName: string | null;
    StartPointCityName: string | null;
    EndPoint: string | null;
    EndPointName: string | null;
    EndPointCityName: string | null;
    Adult: number;
    Children: number;
    Infant: number;
    DataSession: null;
    IsDomestic: boolean;
    Source: null;
};
