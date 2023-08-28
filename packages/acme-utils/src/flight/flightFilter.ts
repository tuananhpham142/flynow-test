import { dayjs } from '@acme/design-system';
import { log } from 'console';
type FilterKey = string;

type FilterEqual = Array<string | number | boolean>;

enum GreaterAndLessKeyEnum {
    Min = 'min',
    Max = 'max',
}
type FilterGreaterAndLess = Record<GreaterAndLessKeyEnum, number | string | null>;

type FilterValue = FilterEqual | FilterGreaterAndLess;

type FlightFilterType<T extends string> = Record<T | FilterKey, FilterValue>;

export const buildFilter = <FilterKeyType extends string>(filter: FlightFilterType<FilterKeyType>) => {
    let builtFilter: Record<string, FilterValue> = {};
    for (let keys in filter) {
        //@ts-ignore
        if (filter[keys].constructor === Object || (filter[keys].constructor === Array && filter[keys].length > 0)) {
            builtFilter[keys] = filter[keys];
        }
    }
    return builtFilter as FlightFilterType<FilterKeyType>;
};

export const flightFilter = <FilterKeyType extends string>(
    data: Array<Record<string, any>>,
    filter: FlightFilterType<FilterKeyType>,
) => {
    const keysWithMinMax: Array<keyof any> = ['TotalPrice', 'StartDate', 'EndDate'];
    const filteredData = data.filter((item) => {
        for (let key in filter) {
            let itemValue = item[key];

            if (itemValue === undefined) {
                return false;
            } else if (keysWithMinMax.includes(key)) {
                // greater and less filter
                const filterValue = filter[key] as FilterGreaterAndLess;
                const minValue = filterValue['min'];
                const maxValue = filterValue['max'];

                if (['StartDate', 'EndDate'].includes(key)) {
                    const hoursToCompare = dayjs(itemValue).hour();
                    const minutesToCompare = dayjs(itemValue).minute();

                    if (minValue !== null) {
                        if (
                            hoursToCompare < Number(minValue) ||
                            (hoursToCompare === minValue && minutesToCompare < 0)
                        ) {
                            return false;
                        }
                    }

                    if (maxValue !== null) {
                        if (
                            hoursToCompare > Number(maxValue) ||
                            (hoursToCompare === maxValue && minutesToCompare > 0)
                        ) {
                            return false;
                        }
                    }
                }

                if (minValue !== null && itemValue < minValue) {
                    return false;
                }
                if (maxValue !== null && itemValue > maxValue) {
                    return false;
                }
            } else {
                const filterValue = filter[key] as FilterEqual;
                if (Array.isArray(filterValue) && !filterValue.includes(itemValue)) return false;
            }
        }
        return true;
    });
    return filteredData;
};

export type { FilterKey, FilterEqual, FilterGreaterAndLess, FilterValue, FlightFilterType };
