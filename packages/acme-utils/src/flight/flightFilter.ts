import { dayjs } from '@acme/design-system';
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
            const itemValue = item[key];

            if (itemValue === undefined) {
                return false;
            } else if (keysWithMinMax.includes(key)) {
                // greater and less filter
                const filterValue = filter[key] as FilterGreaterAndLess;
                const minValue = filterValue['min'];
                const maxValue = filterValue['max'];

                // datetime filter mix max
                if (typeof itemValue === 'string' && dayjs(itemValue).isValid()) {
                    const itemTime = dayjs(itemValue);
                    const minTime = dayjs(minValue);
                    const maxTime = dayjs(maxValue);

                    if (minTime.isValid() && maxTime.isValid()) {
                        if (itemTime.isBefore(minTime) || itemTime.isAfter(maxTime)) {
                            return false;
                        }
                    } else if (minTime.isValid()) {
                        if (itemTime.isBefore(minTime)) {
                            return false;
                        }
                    } else if (maxTime.isValid()) {
                        if (itemTime.isAfter(maxTime)) {
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

            // if (item[key] === undefined) {
            //     return false;
            // } else if (keysWithMinMax.includes(key)) {
            //     // greater and less filter
            //     const filterValue = filter[key] as FilterGreaterAndLess;
            //     const minValue = filterValue['min'];
            //     const maxValue = filterValue['max'];

            //     if (minValue !== null && item[key] < minValue) {
            //         return false;
            //     }
            //     if (maxValue !== null && item[key] > maxValue) {
            //         return false;
            //     }
            // } else {
            //     const filterValue = filter[key] as FilterEqual;
            //     if (Array.isArray(filterValue) && !filterValue.includes(item[key])) return false;
            // }
        }
        return true;
    });
    return filteredData;
};

export type { FilterKey, FilterEqual, FilterGreaterAndLess, FilterValue, FlightFilterType };
