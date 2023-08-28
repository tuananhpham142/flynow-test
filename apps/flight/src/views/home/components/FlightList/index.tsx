import React, { useState, useMemo, useEffect } from 'react';
// components
import { ListRenderer, Typography } from '@acme/design-system';
import PlanTicketCard, { FlightCardSkeleton } from '../FlightCard/FlightCard';

// services
import { flightSelect } from '@/services';

// types
import type { FlattedFlight } from '@/models/Flight/FlightModel';
import { useOnScreen } from '@/hooks/useOnScreen';
import FlightContext from '@/contexts/flight/FlightContext';
import { FlightItinerary } from '@/models/Flight/FlightEnum';
import Logo from '@acme/pages/components/Logo';
import EmptyResult from '../FlightCard/EmptyResult';

type Props = {
    flights: Array<FlattedFlight>;
    isLoading: boolean;
    isEmpty: boolean;
};

// constants
const LOADMORE_STEP = 15;
const LOADMORE_DELAY = 1000;

const FlightList = (props: Props) => {
    const { flights, isLoading, isEmpty } = props;
    const { sessionId, flightViewMode, updateSessionData } = React.useContext(FlightContext);

    const [renderLimit, setRenderLimit] = useState<number>(LOADMORE_STEP);
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [isLoadingFlight, setIsLoadingFlight] = useState<string>('');

    const loadMoreRef = React.useRef<HTMLDivElement>(null);
    const loadMoreElementIsOnScreen = useOnScreen(loadMoreRef, '-50px');

    // check if list is load moreable
    const showLoadingSkeleton = useMemo(() => {
        return !isLoading && renderLimit < flights.length;
    }, [renderLimit, flights.length, isLoading]);

    // slice list item to render when render limit change
    const listItemRender = React.useMemo(() => {
        return flights.slice(0, renderLimit);
    }, [flights, renderLimit]);

    // load more when scroll to bottom
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (loadMoreElementIsOnScreen && !isLoading) {
                setRenderLimit(renderLimit + LOADMORE_STEP);
            }
        }, LOADMORE_DELAY);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [loadMoreElementIsOnScreen, isLoading]);

    // handlers
    const handleSelectFlight = async (flight: FlattedFlight) => {
        try {
            setIsSelecting(true);
            setIsLoadingFlight(`${flight.FlightSession}${flight.GroupClass}${flight.Class}`);
            const res = await flightSelect({
                body: {
                    SessionId: sessionId,
                    AId: '3531',
                    Itinerary: flightViewMode === 1 ? FlightItinerary.OneWay : FlightItinerary.RoundTrip,
                    FlightSession: flight.FlightSession,
                    FareOptionSession: flight.FareOptionSession,
                },
            });

            if (res?.data?.Data) {
                updateSessionData(res.data.Data);
                const flightInfoSelected = res.data.Data.FlightInfoSelected;
                if (flightInfoSelected.length === 1) {
                    if (res.data.Data.InitSessionData.ItineraryType === 1) {
                        window.location.assign(`${window.location.origin}/booking/${sessionId}`);
                    }
                } else {
                    window.location.assign(`${window.location.origin}/booking/${sessionId}`);
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSelecting(false);
            setIsLoadingFlight('');
        }
    };

    return (
        <>
            {isEmpty && <EmptyResult />}
            {!isLoading ? (
                <ListRenderer
                    renderKey={(item) => `${item.FlightSession}${item.GroupClass}${item.Class}`}
                    items={listItemRender}
                    renderItem={(item) => (
                        <PlanTicketCard
                            isLoadingFlight={isLoadingFlight}
                            isDisable={isSelecting}
                            flight={item}
                            onSelectFlight={handleSelectFlight}
                        />
                    )}
                    customClasses={{
                        wrapper: 'flex flex-col gap-3 w-full',
                        itemWrapper: 'flex-1 flex-col',
                    }}
                />
            ) : (
                <ListRenderer
                    items={Array.apply(null, Array(renderLimit))}
                    renderItem={(item) => <FlightCardSkeleton />}
                    customClasses={{
                        wrapper: 'flex flex-col gap-3 w-full',
                        itemWrapper: 'flex-1 flex-col',
                    }}
                />
            )}
            <div role='load-more' ref={loadMoreRef}>
                {showLoadingSkeleton && <FlightCardSkeleton />}
            </div>
        </>
    );
};

export default FlightList;
