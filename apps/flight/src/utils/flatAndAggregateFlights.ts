import { AggregateData, AggregateKeys } from '@/contexts/flight/FlightContext.type';
import { FlattedFlight, FlightModel } from '@/models/Flight/FlightModel';

type FlattedAndAggregateFlights = {
    flattedFlights: Array<FlattedFlight>;
    aggregate: AggregateData;
};

export const flatAndAggregateFlights = (flights: Array<FlightModel>) => {
    const aggregateKeys: Array<AggregateKeys> = ['GroupClass', 'Stops', 'AirlineCode'];

    return flights.reduce(
        (aggregateData: FlattedAndAggregateFlights, flightItem) => {
            const { FareOptions, ...rest } = flightItem;

            const { aggregate, flattedFlights } = aggregateData;

            FareOptions.forEach((option) => {
                const flatted = { ...rest, ...option };
                flattedFlights.push(flatted);
                // aggregate data
                aggregateKeys.forEach((key) => {
                    const dataIndex = aggregate[key].findIndex((v) => v.value === flatted[key]);
                    if (dataIndex !== -1) {
                        aggregate[key][dataIndex].count++;
                    } else {
                        aggregate[key].push({
                            label: flatted[key].toString(),
                            value: flatted[key],
                            count: 1,
                        });
                    }
                });
            });

            return aggregateData;
        },
        {
            flattedFlights: [],
            aggregate: {
                GroupClass: [],
                Stops: [],
                AirlineCode: [],
            },
        },
    );
};
