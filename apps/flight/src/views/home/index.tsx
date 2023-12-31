'use client';
// components
import FlightContext, { FlightProvider } from '@/contexts/flight/FlightContext';
import React, { useEffect, useMemo, useState } from 'react';
import DepartureFlightCard from './components/FlightCard/FlightDepartureCard';
import { default as Filter } from './components/FlightFilter';
import FlightList from './components/FlightList';
import FlightSearch from './components/FlightSearch';
import FlightSorting from './components/FlightSort';

// utils
import { flatAndAggregateFlights } from '@/utils/flatAndAggregateFlights';
import { buildFilter, flightFilter, sortByKey } from '@acme/utils';

// hooks

// services
import { useFlightInitSessionMutation, useSearchAvailabilitiesFlightMutation } from '@/services';

// types
import type { FlattedFlight } from '@/models/Flight/FlightModel';
import type { FlightFilter, FlightSort } from '@/types/types';
import type { FlightFilterType } from '@acme/utils';
// enums
import { FlightViewMode } from '@/contexts/flight/FlightContext.type';
import { FlightQuery } from '@acme/pages/components/Search/Flight';
import { queryString } from '@acme/utils';

type Props = {
    params: {};
    searchParams: URLSearchParams;
};

const FlightHome: React.FC<Props> = (props) => {
    // console.log(props);

    const { sessionData, flightViewMode, updateSessionId, updateFlightAggregate, updateSessionData } =
        React.useContext(FlightContext);

    // const { cookie, setCookieValue, removeCookie } = useCookie('flight-session-id');

    // console.log(cookie);

    const parsedUrl = queryString.parseUrl(window.location.href, {
        parseNumbers: true,
        parseBooleans: true,
    });

    const flightQuery = parsedUrl.query as unknown as FlightQuery;

    // const isValidFlightQuery = (query: FlightQuery) => {
    //     const { DepartureDate, ReturnDate, Adult, Children, Infant, ItineraryType, EndPoint, StartPoint } = query;
    //     return Boolean(DepartureDate && ReturnDate && ItineraryType && EndPoint && StartPoint);
    // };

    // console.log(isValidFlightQuery(flightQuery));

    const [filter, setFilter] = useState<FlightFilterType<FlightFilter.FilterKeys>>({});
    const [sort, setSort] = useState<FlightSort.SortOptionValue>({
        field: 'TotalPrice',
        sort: 'asc',
    });

    // services
    const { trigger: flightInitSessionTrigger, isMutating: isInitSession } = useFlightInitSessionMutation();
    const { trigger: searchAvailabilitiesFlightTrigger, isMutating: isSearchFlights } =
        useSearchAvailabilitiesFlightMutation();

    const handleSearchFlights = async ({
        StartPoint,
        EndPoint,
        DepartureDate,
        ReturnDate,
        Adult,
        Children,
        Infant,
        ItineraryType,
    }: any) => {
        const res = await flightInitSessionTrigger({
            ItineraryType: ItineraryType,
            StartPoint: StartPoint,
            EndPoint: EndPoint,
            DepartureDate: DepartureDate,
            ReturnDate: ReturnDate,
            Adult: Adult,
            Children: Children,
            Infant: Infant,
            IsCheapest: true,
            AId: '3531',
        });
        if (res.data) {
            const sessionId = res.data.Data.SessionId;
            // setCookieValue({
            //     value: sessionId,
            //     expireHours: 1,
            // });

            updateSessionData(res.data.Data);

            updateSessionId(sessionId);
            res.data.Data.Source.forEach((IATA_CODE) => {
                searchAvailabilitiesFlightTrigger({
                    AId: '3531',
                    SessionId: sessionId,
                    source: IATA_CODE,
                    viewMode: 1,
                }).then((res) => {
                    if (res?.data?.Data) {
                        if (sessionData) {
                            if (
                                sessionData.FlightData.DepartureFlights.length <
                                    res.data.Data.FlightData.DepartureFlights.length ||
                                sessionData.FlightData.ReturnFlights.length <
                                    res.data.Data.FlightData.ReturnFlights.length
                            ) {
                                updateSessionData(res.data.Data);
                            }
                        }
                        updateSessionData(res.data.Data);
                    }
                });
            });
        }
    };

    useEffect(() => {
        handleSearchFlights(flightQuery);
    }, []);

    // filter and sort flights
    const filteredFlight = useMemo(() => {
        let flightsToRender;
        if (flightViewMode === FlightViewMode.Departure) {
            flightsToRender = sessionData?.FlightData?.DepartureFlights || [];
        } else if (flightViewMode === FlightViewMode.Return) {
            flightsToRender = sessionData?.FlightData?.ReturnFlights || [];
        }

        const { flattedFlights, aggregate } = flatAndAggregateFlights(flightsToRender || []);

        updateFlightAggregate(aggregate);

        const result = flightFilter<FlightFilter.FilterKeys>(Array.from(flattedFlights), buildFilter(filter));

        return result;
    }, [filter, flightViewMode, sessionData]);

    const sortedFlights = useMemo(() => {
        const result = sortByKey(filteredFlight, sort.field, sort.sort) as Array<FlattedFlight>;
        return [...result];
    }, [sort, filteredFlight]);

    // const isSearchFlightsLoading = isInitSession || isSearchFlights;
    const isEmpty = sortedFlights.length === 0 && !isSearchFlights && !isInitSession;

    const isSearchFlightsLoading = (!isEmpty && sortedFlights.length === 0) || isInitSession;

    return (
        <>
            <FlightSearch
                initialData={flightQuery}
                onSubmit={(data) => {
                    handleSearchFlights({
                        StartPoint: data.selectedDepartureAirport.Id,
                        EndPoint: data.selectedReturnAirport.Id,
                        DepartureDate: data.valueDatePicker.startDate,
                        ReturnDate: data.valueDatePicker.endDate,
                        Adult: data.Adult,
                        Children: data.Children,
                        Infant: data.Infant,
                        ItineraryType: data.ItineraryType,
                    });
                }}
                isLoading={isSearchFlightsLoading}
            />
            <main className='container max-w-[1440px] mx-auto flex justify-center'>
                <div className='max-w-[1200px] xl:px-0 px-4'>
                    <div className='grid grid-cols-12 gap-6'>
                        <aside className='col-span-3'>
                            <div className='sticky top-[-35px]'>
                                <Filter isLoading={isSearchFlightsLoading} onFilter={setFilter} />
                            </div>
                        </aside>

                        <section className='col-span-9 flex flex-col gap-4 py-8'>
                            <DepartureFlightCard />
                            <FlightSorting
                                totalResult={sortedFlights.length}
                                onSelect={(val: FlightSort.SortOptionValue) => {
                                    setSort(val);
                                }}
                                isLoading={isSearchFlightsLoading}
                            />
                            <FlightList flights={sortedFlights} isLoading={isSearchFlightsLoading} isEmpty={isEmpty} />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

const HomePage = (props: Props) => {
    return (
        <FlightProvider>
            <FlightHome {...props} />
        </FlightProvider>
    );
};

export default HomePage;
