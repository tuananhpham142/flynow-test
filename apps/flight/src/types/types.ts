import { FlattedFlight } from '@/models/Flight/FlightModel';
import { FlightFilterType } from '@acme/utils';

export type OptionItem<T> = {
    label: string;
    value: T;
};

export namespace FlightSort {
    export type SortOptionValue = {
        field: keyof FlattedFlight;
        sort: 'asc' | 'desc';
    };
    export type SortOption = OptionItem<SortOptionValue>;
}

export namespace FlightFilter {
    export type FilterKeys = keyof Pick<FlattedFlight, 'GroupClass' | 'Stops' | 'AirlineCode'>;
    export type FilterType = FlightFilterType<FilterKeys>;
}

export namespace FlightSearch {}

export enum IATA_AirlineCodes {
    VietNamAirlines = 'VN',
    VietJetAir = 'VJ',
    BambooAirways = 'QH',
    // QuatarAirways = 'QR',
    // SingaporeAirlines = 'SQ',
    // AirAsia = 'AK',
    // VietTravelAirlines = 'VU',
    // CathayPacificAirways = 'CX',
}
