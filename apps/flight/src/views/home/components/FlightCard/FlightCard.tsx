'use client';
import { FlattedFlight } from '@/models/Flight/FlightModel';
import { Button, Card, Divider, Skeleton, TabContent, TabPane, Tabs, Typography } from '@acme/design-system';
import {
    currencyFormat,
    flightMinutesDurationFormat,
    formatFlightDate,
    formatFlightTime,
    getDiffTime,
    getPlaneType,
} from '@acme/utils';
import React, { useState } from 'react';
import { getAirlineLogo } from '../Logos';

// services
import FlightContext from '@/contexts/flight/FlightContext';
import { useGetFareRuleQuery } from '@/services/flight/flightFareRule';

enum FlightDetailTabs {
    FLIGHT_DETAIL = 'FLIGHT_DETAIL',
    PRICE_DETAIL = 'PRICE_DETAIL',
}

type Props = {
    flight: FlattedFlight;
    onSelectFlight: (flight: FlattedFlight) => void;
    isDisable?: boolean;
    isLoadingFlight?: string;
};

const FlightCard = (props: Props) => {
    const { onSelectFlight, flight, isDisable, isLoadingFlight } = props;
    const { sessionData } = React.useContext(FlightContext);

    const [showDetail, setShowDetail] = useState(false);
    const [detailTab, setDetailTab] = useState<FlightDetailTabs>(FlightDetailTabs.FLIGHT_DETAIL);
    const handleChangeTabDetail = (val: FlightDetailTabs, event: React.SyntheticEvent) => {
        setDetailTab(val);
    };

    const isLoading = isLoadingFlight === `${flight.FlightSession}${flight.GroupClass}${flight.Class}`;

    const { data: fareRuleData } = useGetFareRuleQuery({
        AirlineCode: flight.AirlineCode || '',
        ClassName: flight.GroupClass || '',
        LanguageCode: 'vi-VN',
    });

    const fareRule = fareRuleData?.data?.Data;

    // handler
    const handleShowDetail = () => {
        if (isDisable) return;
        setShowDetail(!showDetail);
    };

    // const
    const PLANE = flight.ListSegment[0].Plane;

    const FLIGHT_DURATION_BY_DAY = getDiffTime({
        StartTime: flight.StartDate,
        EndTime: flight.EndDate,
        DiffType: 'days',
    });

    const adultPrice = flight.BaseAdult + flight.TaxAdult + flight.FeeAdult + flight.AirporFeetAdult;
    const childrenPrice = flight.BaseChild + flight.TaxChild + flight.FeeChild + flight.AirportFeeChild;
    const infantPrice = flight.BaseInf + flight.TaxInf + flight.FeeInf + flight.AirportFeeInf;

    if (!sessionData) return null;
    return (
        <Card
            variant='border'
            noPadding
            body={
                <div className='flex flex-col bg-white rounded-lg min-h-[90px] flight-card-animation'>
                    <div className='flex w-full'>
                        {/* Flight ticket info */}
                        <div className='flex items-center flex-1 pl-3 pr-4 py-3 gap-6'>
                            <div className='flex items-center gap-2 w-[195px]'>
                                {/* logo */}
                                <div>{getAirlineLogo(flight.AirlineCode, { width: 48, height: 48 })}</div>
                                {/* logo */}
                                <div className='flex flex-col'>
                                    <span className='text-grey-800'>{flight.AirlineName}</span>
                                    <span className='text-[13px] text-grey-500'>
                                        {flight.ListSegment[0].FlightNumber} • {getPlaneType(PLANE)}
                                    </span>
                                    <span className='text-[13px] text-grey-500'>Loại vé: {flight.GroupClass}</span>
                                </div>
                            </div>
                            <div className='flex justify-between gap-9 flex-1'>
                                <div className='flex items-center flex-1 gap-3'>
                                    {/* Flight Schedule  */}
                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <span className='font-bold text-grey-800 text-xl'>
                                            {formatFlightTime(flight.StartDate)}
                                        </span>
                                        <span className='text-[13px]'>
                                            {/* {flight.ListSegment[0].StartPointCityName} ( */}
                                            {flight.ListSegment[0].StartPoint}
                                            {/* ) */}
                                        </span>
                                    </div>

                                    <div className='flex flex-col flex-1 items-center w-[140px]'>
                                        <span className='text-[13px] text-grey-500'>
                                            {flightMinutesDurationFormat(flight.Duration)}
                                        </span>
                                        <div className='flex items-center w-full gap-0.5'>
                                            <Divider className='flex-1 h-[2px]' color='grey-500' />
                                            {flight.Stops === 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )}
                                            {flight.Stops > 1 && (
                                                <>
                                                    <div className='w-[5px] h-[5px] rounded-full bg-grey-500'></div>
                                                    <Divider className='flex-1 h-[2px]' color='grey-500' />
                                                </>
                                            )}
                                            <i className='icon icon-flight-right text-[13px] text-grey-500' />
                                        </div>
                                        <span className='text-[13px] text-grey-500'>
                                            {flight.Stops > 0 ? `${flight.Stops} điểm dừng` : 'Bay thẳng'}
                                        </span>
                                    </div>

                                    <div className='flex justify-center items-center flex-col gap-1'>
                                        <span className='font-bold text-grey-800 text-xl'>
                                            {formatFlightTime(flight.EndDate)}{' '}
                                            {FLIGHT_DURATION_BY_DAY > 0 && (
                                                <sup className='font-normal text-[13px]'>
                                                    +{FLIGHT_DURATION_BY_DAY}d
                                                </sup>
                                            )}
                                        </span>
                                        <span className='text-[13px]'>
                                            {/* {flight.ListSegment[0].EndPointCityName} ( */}
                                            {flight.ListSegment[0].EndPoint}
                                            {/* ) */}
                                        </span>
                                    </div>
                                    {/* Flight Schedule  */}
                                </div>
                                <div
                                    onClick={handleShowDetail}
                                    className='flex items-center gap-1 cursor-pointer select-none'
                                >
                                    <span className='text-primary text-[13px]'>Xem chi tiết</span>
                                    {showDetail ? (
                                        <i className='icon icon-caret-up text-[16px]' />
                                    ) : (
                                        <i className='icon icon-caret-down text-[16px]' />
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Flight ticket info */}

                        <Divider vertical={true} />

                        {/* Price and Select */}
                        <div className='flex flex-col gap-0.5 items-center justify-center w-[157px] h-[90px]'>
                            <span className='text-xl font-bold text-warning'>{currencyFormat(flight.TotalPrice)}</span>
                            <Button
                                onClick={() => {
                                    onSelectFlight(flight);
                                }}
                                size='sm'
                                className='w-[109px]'
                                disabled={!isLoading && isDisable}
                                isLoading={isLoading}
                            >
                                Chọn
                            </Button>
                        </div>
                        {/* Price and Select */}
                    </div>

                    {/* Detail */}
                    {showDetail && (
                        <div className='flex flex-col items-center gap-2.5 w-full pt-2 px-6 pb-6'>
                            {/* Detail Tabs */}
                            <Tabs
                                value={detailTab}
                                onChange={handleChangeTabDetail}
                                color={'primary'}
                                lineSize={1}
                                customClasses={{
                                    root: 'border-none rounded-full bg-grey-300 w-fit',
                                    tabLine: '!top-0 !bottom-0 !h-auto !rounded-full !bg-primary',
                                    active: '!text-white',
                                    tab: 'text-primary h-[32px] flex items-center justify-center text-sm',
                                    hover: 'hover:text-grey-500',
                                }}
                            >
                                <TabPane
                                    label={'Chi tiết chuyến bay'}
                                    value={detailTab}
                                    id={FlightDetailTabs.FLIGHT_DETAIL}
                                />
                                <TabPane
                                    label={'Chi tiết giá vé'}
                                    value={detailTab}
                                    id={FlightDetailTabs.PRICE_DETAIL}
                                    disabled
                                />
                            </Tabs>
                            <TabContent>
                                {/* Detail Flight */}
                                <TabPane value={detailTab} id={FlightDetailTabs.FLIGHT_DETAIL}>
                                    <div className='flex flex-col gap-2.5'>
                                        {flight.ListSegment.map((segment, index) => {
                                            return (
                                                <Card
                                                    key={`${segment.AirlineCode}_${index}`}
                                                    variant='border'
                                                    customClasses={{
                                                        root: 'w-full',
                                                    }}
                                                    noPadding
                                                    body={
                                                        <div className='flex min-h-[184px] p-6 gap-4 w-full'>
                                                            <div className='flex flex-col w-[135px]'>
                                                                <div className=''>
                                                                    {getAirlineLogo(flight.AirlineCode, {
                                                                        width: 48,
                                                                        height: 48,
                                                                    })}
                                                                </div>
                                                                <div className='flex flex-col text-[13px]'>
                                                                    <span className='text-grey-800'>
                                                                        {segment.AirlineName}
                                                                    </span>
                                                                    <span className='text-grey-500'>
                                                                        {segment.FlightNumber} •{' '}
                                                                        {getPlaneType(Number(segment.Plane))}
                                                                    </span>
                                                                    <span className='text-grey-500'>
                                                                        Loại vé: {flight.GroupClass}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='flex gap-2 w-[355px]'>
                                                                <div className='flex flex-col gap-0.5 justify-between h-full pb-4'>
                                                                    <i className='icon icon-flight-pland text-[24px]' />
                                                                    <div className='flex justify-center flex-1'>
                                                                        <Divider
                                                                            vertical
                                                                            className='h-full'
                                                                            color='grey-800'
                                                                        />
                                                                    </div>
                                                                    <i className='icon icon-location text-[24px]' />
                                                                </div>
                                                                <div className='flex flex-col gap-2 justify-between flex-1'>
                                                                    <div className='flex gap-4'>
                                                                        <div className='flex flex-col'>
                                                                            <span className='font-bold'>
                                                                                {formatFlightTime(segment.StartDate)}
                                                                            </span>
                                                                            <span className='text-[13px] text-grey-500'>
                                                                                {formatFlightDate(segment.StartDate)}
                                                                            </span>
                                                                        </div>
                                                                        <div className='flex flex-col'>
                                                                            <span className='font-bold'>
                                                                                {segment.StartPointCityName} (
                                                                                {segment.StartPoint})
                                                                            </span>
                                                                            <span className='text-[13px] text-grey-500'>
                                                                                {segment.StartPointName}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex items-center gap-1'>
                                                                        <i className='icon icon-clock text-[24px]' />
                                                                        <span className='text-success'>
                                                                            {flightMinutesDurationFormat(
                                                                                segment.FlightTime,
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                    <div className='flex gap-4'>
                                                                        <div className='flex flex-col'>
                                                                            <span className='font-bold'>
                                                                                {formatFlightTime(segment.EndDate)}
                                                                            </span>
                                                                            <span className='text-[13px] text-grey-500'>
                                                                                {formatFlightDate(segment.EndDate)}
                                                                            </span>
                                                                        </div>
                                                                        <div className='flex flex-col'>
                                                                            <span className='font-bold'>
                                                                                {segment.EndPointCityName} (
                                                                                {segment.EndPoint})
                                                                            </span>
                                                                            <span className='text-[13px] text-grey-500'>
                                                                                {segment.EndPointName}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col gap-2 flex-1 text-[13px] text-grey-800'>
                                                                <div className='flex gap-1'>
                                                                    <i className='icon icon-baggade text-[20px]' />
                                                                    <Typography
                                                                        customClasses={{
                                                                            root: '!text-[13px] leading-[20px]',
                                                                        }}
                                                                    >
                                                                        <Typography htmlTag='span' variant='subtitle14'>
                                                                            Hành lý:
                                                                        </Typography>{' '}
                                                                        {segment.HandBaggage &&
                                                                            `${segment.HandBaggage} hành lý xách tay`}
                                                                        {segment.BaggageAllowance &&
                                                                            ` và ${segment.BaggageAllowance} hành lý ký gửi`}
                                                                    </Typography>
                                                                </div>
                                                                <div className='flex gap-1'>
                                                                    <i className='icon icon-change-money text-[20px]' />
                                                                    <Typography
                                                                        customClasses={{
                                                                            root: '!text-[13px] leading-[20px]',
                                                                        }}
                                                                    >
                                                                        <Typography htmlTag='span' variant='subtitle14'>
                                                                            Hoàn huỷ:
                                                                        </Typography>{' '}
                                                                        {fareRule?.Translations[0].CancellationRefund ||
                                                                            'Không được phép'}
                                                                    </Typography>
                                                                </div>
                                                                <div className='flex gap-1'>
                                                                    <i className='icon icon-change-time text-[20px]' />
                                                                    <Typography
                                                                        customClasses={{
                                                                            root: '!text-[13px] leading-[20px]',
                                                                        }}
                                                                    >
                                                                        <Typography htmlTag='span' variant='subtitle14'>
                                                                            Đổi thời gian bay:
                                                                        </Typography>{' '}
                                                                        {fareRule?.Translations[0].TimeChange ||
                                                                            'Không được phép'}
                                                                    </Typography>
                                                                </div>
                                                                <div className='flex gap-1'>
                                                                    <i className='icon icon-ticket-back text-[20px]' />
                                                                    <Typography
                                                                        customClasses={{
                                                                            root: '!text-[13px] leading-[20px]',
                                                                        }}
                                                                    >
                                                                        <Typography htmlTag='span' variant='subtitle14'>
                                                                            Đổi lịch bay:
                                                                        </Typography>{' '}
                                                                        {fareRule?.Translations[0].ItineraryChange ||
                                                                            'Không được phép'}
                                                                    </Typography>
                                                                </div>
                                                                <div className='flex gap-1'>
                                                                    <i className='icon icon-ticket-back text-[20px]' />
                                                                    <Typography
                                                                        customClasses={{
                                                                            root: '!text-[13px] leading-[20px]',
                                                                        }}
                                                                    >
                                                                        <Typography htmlTag='span' variant='subtitle14'>
                                                                            Thay đổi thông tin:
                                                                        </Typography>{' '}
                                                                        {fareRule?.Translations[0]
                                                                            .PassengerInfoChange || 'Không được phép'}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                />
                                            );
                                        })}
                                        {/* <div className='flex gap-3 p-3 h-[48px] bg-grey-200 rounded-lg w-full'>
                                                    <span className='text-danger font-bold'>2h 10m</span>
                                                    <div className='flex items-end'>
                                                        <span>Chuyển máy bay ở Ho Chi Minh City (SGN) - </span>
                                                        <span className='text-[13px] leading-[22px] text-danger'>
                                                            Thời gian quá cảnh dài. Có thể cần ký gửi hành lý.
                                                        </span>
                                                    </div>
                                                </div> */}
                                    </div>
                                </TabPane>
                                {/* Detail Flight */}

                                {/* Detail Ticket Price */}
                                <TabPane value={detailTab} id={FlightDetailTabs.PRICE_DETAIL}>
                                    {sessionData && (
                                        <div className='p-3'>
                                            <table className='w-[645px]'>
                                                <tr>
                                                    <th className='text-left pl-2 font-bold text-grey-600'>
                                                        Hành khách
                                                    </th>
                                                    <th className='text-right pr-1.5 font-bold text-grey-600'>
                                                        Số lượng
                                                    </th>
                                                    <th className='text-right pr-1.5 font-bold text-grey-600'>
                                                        Giá vé
                                                    </th>
                                                    <th className='text-right pr-1.5 font-bold text-grey-600'>
                                                        Tổng cộng
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td className='text-grey-800 text-left p-1.5'>Giá vé người lớn</td>
                                                    <td className='text-grey-800 text-right p-1.5'>
                                                        {sessionData?.InitSessionData?.Adult}
                                                    </td>
                                                    <td className='text-grey-800 text-right p-1.5'>
                                                        {currencyFormat(adultPrice)}
                                                    </td>
                                                    <td className='text-grey-800 text-right p-1.5'>
                                                        {currencyFormat(
                                                            adultPrice * (sessionData?.InitSessionData?.Adult || 0),
                                                        )}
                                                    </td>
                                                </tr>
                                                {Boolean(sessionData?.InitSessionData?.Children) && (
                                                    <tr>
                                                        <td className='text-grey-800 text-left p-1.5'>Giá vé trẻ em</td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {sessionData?.InitSessionData?.Children}
                                                        </td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(childrenPrice)}
                                                        </td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(
                                                                childrenPrice *
                                                                    (sessionData?.InitSessionData?.Children || 0),
                                                            )}
                                                        </td>
                                                    </tr>
                                                )}
                                                {Boolean(sessionData?.InitSessionData?.Infant) && (
                                                    <tr>
                                                        <td className='text-grey-800 text-left p-1.5'>Giá vé em bé</td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {sessionData?.InitSessionData?.Infant}
                                                        </td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(infantPrice)}
                                                        </td>
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(
                                                                infantPrice *
                                                                    (sessionData?.InitSessionData?.Infant || 0),
                                                            )}
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr>
                                                    <td className='text-grey-800 text-left p-1.5 font-bold'>Tổng</td>
                                                    <td className='text-grey-800 text-right p-1.5 font-bold'>
                                                        {sessionData?.InitSessionData?.Adult ||
                                                            0 +
                                                                (sessionData?.InitSessionData?.Children || 0) +
                                                                (sessionData?.InitSessionData?.Infant || 0)}{' '}
                                                        khách
                                                    </td>
                                                    <td className='text-grey-800 text-right p-1.5 font-bold text-warning'>
                                                        {/* 4,260,000₫ */}
                                                    </td>
                                                    <td className='text-grey-800 text-right p-1.5 font-bold text-warning'>
                                                        {currencyFormat(
                                                            adultPrice * (sessionData?.InitSessionData?.Adult || 0) +
                                                                childrenPrice *
                                                                    (sessionData?.InitSessionData?.Children || 0) +
                                                                infantPrice *
                                                                    (sessionData?.InitSessionData?.Infant || 0),
                                                        )}
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    )}
                                </TabPane>
                                {/* Detail Ticket Price */}
                            </TabContent>
                            {/* Detail Tabs */}
                        </div>
                    )}
                    {/* Detail */}
                </div>
            }
        />
    );
};

export default FlightCard;

const FlightCardSkeleton = () => {
    return (
        <Card
            variant='border'
            noPadding
            body={
                <div className='p-4 w-full flex item-center space-x-4'>
                    <Skeleton width={48} height={48} variant='circular' />
                    <div className='flex-1 space-y-4 py-1'>
                        <Skeleton width={'100%'} height={16} variant='rounded' />
                        <Skeleton width={'100%'} height={8} variant='rounded' />
                        <Skeleton width={'100%'} height={8} variant='rounded' />
                    </div>
                    <div className='flex-[4] space-y-4 py-1'>
                        <Skeleton width={'100%'} height={28} variant='rounded' />
                        <Skeleton width={'100%'} height={20} variant='rounded' />
                    </div>
                    <div className='flex-[1] flex flex-col gap-4 justify-center'>
                        <Skeleton width={'100%'} height={24} variant='rounded' />
                        <Skeleton width={'100%'} height={24} variant='rounded' />
                    </div>
                </div>
            }
        />
    );
};

export { FlightCardSkeleton };
