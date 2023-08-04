'use client';
// components
import FlightContext, { FlightProvider } from '@/contexts/flight/FlightContext';
import React, { useEffect, useMemo, useState } from 'react';
import DepartureFlightCard from './components/FlightCard/FlightDepartureCard';
import { default as Filter } from './components/FlightFilter';
import FlightList from './components/FlightList';
import FlightSorting from './components/FlightSort';

// utils
import { buildFilter, flightFilter, sortByKey } from '@acme/utils';

// services
import { flightInitSession, searchAvailabilitiesFlight } from '@/services';

// types
import type { AggregateData, AggregateKeys } from '@/contexts/flight/FlightContext.type';
import type { FlattedFlight } from '@/models/Flight/FlightModel';
import type { FlightFilter, FlightSort } from '@/types/types';
import type { FlightFilterType } from '@acme/utils';
// enums
import { FlightViewMode } from '@/contexts/flight/FlightContext.type';
import { FlightItinerary } from '@/models/Flight/FlightEnum';
import FlightSearch from './components/FlightSearch';

type Props = {};

const FlightHome: React.FC<Props> = (props) => {
    const {
        sessionData,
        flightViewMode,
        departureFlights,
        returnFlights,
        flightInfoSelected,
        updateReturnFlights,
        updateSessionId,
        updateDepartureAggregate,
        updateDepartureFlights,
        updateSessionData,
    } = React.useContext(FlightContext);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filter, setFilter] = useState<FlightFilterType<FlightFilter.FilterKeys>>({});
    const [sort, setSort] = useState<FlightSort.SortOptionValue>({
        field: 'TotalPrice',
        sort: 'asc',
    });
    const getData = async () => {
        const res = await flightInitSession({
            body: {
                ItineraryType: FlightItinerary.RoundTrip,
                StartPoint: 'HAN',
                EndPoint: 'SGN',
                DepartureDate: '2023-09-20',
                ReturnDate: '2023-09-30',
                Adult: 1,
                Children: 0,
                Infant: 0,
                IsCheapest: true,
                AId: '3531',
            },
        });
        if (res.data) {
            const sessionId = res.data.Data.SessionId;
            updateSessionData(res.data.Data.InitSessionData);
            updateSessionId(sessionId);

            res.data.Data.Source.forEach((IATA_CODE) => {
                searchAvailabilitiesFlight({
                    body: {
                        AId: '3531',
                        SessionId: sessionId,
                        source: IATA_CODE,
                        viewMode: 1,
                    },
                }).then((res) => {
                    if (res?.data?.Data) {
                        const { DepartureFlights, ReturnFlights } = res.data.Data.FlightData;

                        const aggregateKeys: Array<AggregateKeys> = ['GroupClass', 'Stops', 'AirlineCode'];

                        type FlightResult = {
                            flattedFlights: Array<FlattedFlight>;
                            aggregate: AggregateData;
                        };

                        const departureResult = DepartureFlights.reduce(
                            (aggregateData: FlightResult, flightItem) => {
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

                        const returnResult = ReturnFlights.reduce(
                            (aggregateData: FlightResult, flightItem) => {
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

                        updateDepartureAggregate(departureResult.aggregate);
                        updateDepartureFlights(departureResult.flattedFlights);
                        updateReturnFlights(returnResult.flattedFlights);
                    }
                    setIsLoading(false);
                });
            });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // filter and sort flights
    const filteredFlight = useMemo(() => {
        let flightsToRender;

        if (flightViewMode === FlightViewMode.Departure) {
            flightsToRender = departureFlights;
        } else if (flightViewMode === FlightViewMode.Return) {
            flightsToRender = returnFlights;
        }

        if (!flightsToRender) return [];
        console.time('filter flight');
        const result = flightFilter<FlightFilter.FilterKeys>(Array.from(flightsToRender), buildFilter(filter));
        console.timeEnd('filter flight');
        return result;
    }, [filter, departureFlights, returnFlights, flightInfoSelected]);

    const sortedFlights = useMemo(() => {
        console.time('sort flight');
        const result = sortByKey(filteredFlight, sort.field, sort.sort) as Array<FlattedFlight>;
        console.timeEnd('sort flight');
        return [...result];
    }, [sort, filteredFlight]);

    return (
        <>
            <FlightSearch />
            <main className='container max-w-[1440px] mx-auto flex justify-center'>
                <div className='max-w-[1200px] xl:px-0 px-4'>
                    <div className='grid grid-cols-12 gap-6'>
                        <aside className='col-span-3'>
                            <Filter isLoading={isLoading} onFilter={setFilter} />
                        </aside>

                        <section className='col-span-9 flex flex-col gap-4 py-8'>
                            <DepartureFlightCard />
                            <FlightSorting
                                totalResult={sortedFlights.length}
                                onSelect={(val: FlightSort.SortOptionValue) => {
                                    setSort(val);
                                }}
                                isLoading={isLoading}
                            />
                            <FlightList flights={sortedFlights} isLoading={isLoading} />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

const HomePage = () => {
    return (
        <FlightProvider>
            <FlightHome />
        </FlightProvider>
    );
};

export default HomePage;
