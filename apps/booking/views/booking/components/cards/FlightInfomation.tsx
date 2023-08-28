import { Card, Divider, IconButton, Modal, TabContent, TabPane, Tabs, Tooltip, Typography } from '@acme/design-system';
import AuthModal from '@acme/pages/components/Header/AuthModal';
import {
    currencyFormat,
    flightMinutesDurationFormat,
    formatFlightDate,
    formatFlightTime,
    getPlaneType,
} from '@acme/utils';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import React, { useContext, useMemo, useState } from 'react';
import { getAirlineLogo, VietNamAirlinesLogo } from '@acme/pages/components/Logos';

import { useGetFareRuleQuery } from 'services/flight';

type Props = {};

enum FightInfomationTabs {
    DEPARTURE = 'DEPARTURE',
    RETURN = 'RETURN',
    PRICE_DETAIL = 'PRICE_DETAIL',
}

const FlightInfomation = (props: Props) => {
    const { sessionData } = useContext(CreateBookingContext);
    if (!sessionData) return null;

    const [showFlightDetailModal, setShowFlightDetailModal] = React.useState(false);
    const [detailTab, setDetailTab] = useState<FightInfomationTabs>(FightInfomationTabs.DEPARTURE);
    const handleChangeTabDetail = (val: FightInfomationTabs, event: React.SyntheticEvent) => {
        setDetailTab(val);
    };

    const { FlightInfoSelected } = sessionData;

    if (!FlightInfoSelected) {
        return null;
    }

    const departureFlightSelected = FlightInfoSelected[0];
    const returnFlightSelected = FlightInfoSelected[1];

    const { data: departureFareRuleData } = useGetFareRuleQuery({
        AirlineCode: departureFlightSelected?.AirlineCode || '',
        ClassName: departureFlightSelected?.FareOptions[0].GroupClass || '',
        LanguageCode: 'vi-VN',
    });

    const { data: returnFareRuleData } = useGetFareRuleQuery({
        AirlineCode: returnFlightSelected?.AirlineCode || '',
        ClassName: returnFlightSelected?.FareOptions[0].GroupClass || '',
        LanguageCode: 'vi-VN',
    });

    const departureFareRule = departureFareRuleData?.data?.Data;
    const returnFareRule = returnFareRuleData?.data?.Data;

    const { Adult, Children, Infant } = sessionData.InitSessionData;

    const departureFlight = FlightInfoSelected[0];
    const returnFlight = FlightInfoSelected[1];

    const departureFlightPrice = useMemo(() => {
        if (departureFlight) {
            const fareInfo = departureFlight?.FareOptions[0];
            const adultPrice = fareInfo.BaseAdult + fareInfo.TaxAdult + fareInfo.FeeAdult + fareInfo.AirporFeetAdult;
            const childrenPrice = fareInfo.BaseChild + fareInfo.TaxChild + fareInfo.FeeChild + fareInfo.AirportFeeChild;
            const infantPrice = fareInfo.BaseInf + fareInfo.TaxInf + fareInfo.FeeInf + fareInfo.AirportFeeInf;

            return {
                adultPrice,
                childrenPrice,
                infantPrice,
            };
        }
    }, [departureFlight]);

    const returnFlightPrice = useMemo(() => {
        if (returnFlight) {
            const fareInfo = returnFlight?.FareOptions[0];
            const adultPrice = fareInfo.BaseAdult + fareInfo.TaxAdult + fareInfo.FeeAdult + fareInfo.AirporFeetAdult;
            const childrenPrice = fareInfo.BaseChild + fareInfo.TaxChild + fareInfo.FeeChild + fareInfo.AirportFeeChild;
            const infantPrice = fareInfo.BaseInf + fareInfo.TaxInf + fareInfo.FeeInf + fareInfo.AirportFeeInf;

            return {
                adultPrice,
                childrenPrice,
                infantPrice,
            };
        }
    }, [returnFlight]);

    return (
        <>
            <Card
                variant='border'
                rounded='lg'
                noPadding
                body={
                    <div className='flex flex-col p-4 gap-4 card-animation'>
                        <div className='flex items-center justify-between'>
                            <Typography htmlTag='h5' variant='subtitle20'>
                                Thông tin chuyến bay
                            </Typography>

                            <IconButton
                                onClick={() => {
                                    setShowFlightDetailModal(true);
                                }}
                                size='lg'
                                variant='text'
                            >
                                <i className='icon icon-arrow-right text-2xl text-grey-900' />
                            </IconButton>
                        </div>
                        <div className='flex gap-2 border border-primary rounded-lg text-primary bg-primary-lighter py-[5px] px-3'>
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12V12.4142L11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V7Z'
                                    fill='#4469AF'
                                />
                            </svg>

                            <Typography htmlTag='span' variant='body16'>
                                Thời gian giữ chỗ: 12h
                            </Typography>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className=''>
                                <div className='flex items-center gap-1 py-1'>
                                    <svg
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M7.79 22L9.685 22L16 14L20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10L15.895 10L9.58 2L7.791 2L10.601 10L6 10L4 7L2 7L4 12L2 17L4 17L6 14L10.685 14L7.79 22Z'
                                            fill='#4CAF50'
                                        />
                                    </svg>

                                    <Typography
                                        htmlTag='span'
                                        variant='subtitle16'
                                        customClasses={{
                                            root: 'text-success',
                                        }}
                                    >
                                        Chiều đi - {formatFlightDate(departureFlightSelected?.StartDate || '')}
                                    </Typography>
                                </div>
                                <div className='flex border border-grey-400 rounded py-1 px-2 ml-7'>
                                    <div className='flex-1 flex flex-col gap-1'>
                                        <div className='flex gap-2 items-start'>
                                            <Typography htmlTag='span' variant='body16'>
                                                {formatFlightTime(departureFlightSelected?.StartDate || '')}
                                            </Typography>
                                            <Typography>
                                                {departureFlightSelected?.ListSegment[0].StartPointCityName} (
                                                {departureFlightSelected?.ListSegment[0].StartPoint})
                                            </Typography>
                                        </div>
                                        <div className='flex gap-2 items-start'>
                                            <Typography htmlTag='span' variant='body16'>
                                                {formatFlightTime(departureFlightSelected?.EndDate || '')}
                                            </Typography>
                                            <Typography>
                                                {departureFlightSelected?.ListSegment[0].EndPointCityName} (
                                                {departureFlightSelected?.ListSegment[0].EndPoint})
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className=''>
                                        {/* <svg
                                            width='48'
                                            height='48'
                                            viewBox='0 0 48 48'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M45.3471 36.5868C45.8069 36.5868 46.2668 36.737 46.6912 36.8872C47.1511 37.0374 47.5755 37.1877 47.7878 37.0375C47.9293 36.9248 48 36.6244 48 36.1362C48 35.3476 47.2572 34.1836 46.1253 33.1697C45.3117 32.4187 42.3405 30.0529 38.4142 30.7289C37.9543 31.2546 34.3464 35.3476 29.8895 35.573C29.7833 35.573 29.7126 35.4979 29.7126 35.3852C29.7126 35.2725 29.7833 35.1974 29.8895 35.1974C34.3817 35.0097 38.1665 30.5035 38.2019 30.4284C38.2373 30.3909 41.4915 27.3868 42.8357 22.6178V22.5803C42.9772 22.3174 44.2152 19.9517 45.3825 19.9517C45.8423 19.9517 46.1253 19.5762 46.1607 19.2382C46.196 18.9378 46.0192 18.5623 45.5593 18.4872C45.4886 18.4872 36.787 17.2104 33.9926 22.4676C33.9926 22.4676 33.4974 23.5941 33.4621 25.3966C33.4621 25.4717 33.4621 25.5468 33.4621 25.5468C33.4621 25.6595 33.3913 31.217 28.4038 33.7329C28.3685 33.7329 28.3685 33.7329 28.3331 33.7329C28.2623 33.7329 28.1916 33.6954 28.1562 33.6203C28.1209 33.5452 28.1562 33.4325 28.227 33.3574C33.0376 30.9166 33.073 25.5468 33.073 25.5092C33.073 25.4717 33.073 25.4341 33.073 25.3966C33.073 24.6831 33.073 21.0407 32.5424 18.9378C32.3301 18.1117 31.9057 16.9851 31.4105 15.7835C30.3847 13.0423 29.7833 11.3525 30.3139 10.7517C30.8091 10.2259 30.8799 9.39981 30.6677 8.98675C30.5262 8.76144 30.3139 8.68634 29.9956 8.76144C28.899 9.0994 24.6898 14.4692 24.6898 19.9141C24.6898 20.6652 24.6898 21.3411 24.6898 21.9043C24.6544 25.5468 24.6544 25.8848 25.6448 26.9362C26.706 27.0864 27.4134 27.3868 27.8379 27.9125C28.227 28.4007 28.3685 29.0766 28.227 30.0529C27.9794 31.7803 25.3972 32.2685 25.2911 32.2685C25.185 32.2685 25.1142 32.2309 25.0789 32.1182C25.0789 32.0056 25.1142 31.9305 25.2203 31.8929C25.2557 31.8929 27.661 31.4423 27.8733 29.9778C27.9794 29.1517 27.9086 28.5509 27.5549 28.1754C27.2012 27.7623 26.5999 27.4995 25.6802 27.3493C25.5741 27.3493 25.4679 27.3117 25.3265 27.3117C25.0081 27.2742 24.6898 27.2742 24.3007 27.2742H23.8055C23.381 27.2742 22.9919 27.3117 22.6382 27.3493C22.5321 27.3493 22.3906 27.3868 22.2845 27.3868C21.4355 27.537 20.8696 27.7999 20.5512 28.1754C20.2329 28.5884 20.1268 29.1517 20.2329 29.9778C20.4451 31.4423 22.8504 31.8929 22.8858 31.8929C22.9919 31.8929 23.0626 32.0056 23.0273 32.1182C23.0273 32.1934 22.9212 32.2685 22.8504 32.2685H22.815C22.7089 32.2309 20.1268 31.7803 19.8791 30.0529C19.7377 29.1142 19.8791 28.4382 20.2682 27.9125C20.6573 27.4244 21.3294 27.1239 22.2845 26.9737C23.2749 25.9223 23.2749 25.5844 23.2749 21.9043C23.2749 21.3411 23.2749 20.6652 23.2749 19.9141C23.3102 14.4692 19.101 9.0994 17.9691 8.76144C17.6861 8.68634 17.4385 8.72389 17.3324 8.98675C17.0847 9.39981 17.1909 10.2635 17.6861 10.7517C18.252 11.3525 17.6153 13.0423 16.5542 15.7835C16.0943 16.9851 15.6345 18.0741 15.4223 18.9378C14.8917 21.0031 14.8563 24.6456 14.8563 25.359C14.8563 25.3966 14.8563 25.4341 14.8563 25.4717C14.8563 25.5092 14.927 30.9166 19.7023 33.3199C19.773 33.3574 19.8438 33.4701 19.773 33.5827C19.7377 33.6578 19.6669 33.6954 19.5962 33.6954C19.5608 33.6954 19.5608 33.6954 19.5254 33.6954C14.6087 31.1795 14.5026 25.5844 14.5026 25.4717C14.5026 25.4717 14.5026 25.3966 14.5026 25.3215C14.4672 23.4815 13.972 22.3925 13.972 22.355C11.1776 17.0978 2.51142 18.3745 2.40531 18.3745C1.9101 18.4496 1.76861 18.8251 1.80398 19.1256C1.83935 19.5011 2.08696 19.839 2.58217 19.839C3.71408 19.839 4.98747 22.2047 5.12896 22.4676V22.5052C6.4731 27.2742 9.72734 30.2782 9.76271 30.3158C9.79809 30.3533 13.5829 34.8595 18.0752 35.0848C18.1813 35.0848 18.252 35.1599 18.252 35.2725C18.252 35.3852 18.1813 35.4603 18.0752 35.4603C13.6536 35.3101 10.0103 31.217 9.55048 30.6913C5.65954 30.0529 2.68828 32.4187 1.83935 33.1697C0.742815 34.1836 0 35.3476 0 36.1362C0 36.6244 0.0707443 36.9248 0.212233 37.0375C0.424466 37.1877 0.848932 37.075 1.30877 36.8872C1.73324 36.737 2.19307 36.5868 2.65291 36.5868C3.28961 36.5868 4.45689 36.8872 6.08401 37.3379C8.17097 37.8636 11.0007 38.6146 14.255 39.1403C19.8791 40.004 23.8055 36.3615 23.8762 36.324C23.9469 36.2489 24.0531 36.2489 24.1238 36.324C24.1592 36.3615 28.1209 40.004 33.745 39.1403C36.9993 38.6521 39.829 37.9011 41.916 37.3379C43.5431 36.9248 44.7104 36.5868 45.3471 36.5868Z'
                                                fill='#DBA410'
                                            />
                                        </svg> */}

                                        {getAirlineLogo(departureFlightSelected?.AirlineCode || '', {
                                            width: 48,
                                            height: 48,
                                        })}
                                    </div>
                                </div>
                            </div>

                            {returnFlightSelected && (
                                <div className=''>
                                    <div className='flex items-center gap-1 py-1'>
                                        <svg
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                d='M16.21 2L14.315 2L8 10L4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14L8.105 14L14.42 22L16.209 22L13.399 14L18 14L20 17L22 17L20 12L22 7L20 7L18 10L13.315 10L16.21 2Z'
                                                fill='#4CAF50'
                                            />
                                        </svg>

                                        <Typography
                                            htmlTag='span'
                                            variant='subtitle16'
                                            customClasses={{
                                                root: 'text-success',
                                            }}
                                        >
                                            Chiều về - {formatFlightDate(returnFlightSelected?.StartDate || '')}
                                        </Typography>
                                    </div>
                                    <div className='flex  border border-grey-400 rounded py-1 px-2 ml-7'>
                                        <div className='flex-1 flex flex-col gap-1'>
                                            <div className='flex gap-2 items-start'>
                                                <Typography htmlTag='span' variant='body16'>
                                                    {formatFlightTime(returnFlightSelected?.StartDate || '')}
                                                </Typography>
                                                <Typography>
                                                    {returnFlightSelected?.ListSegment[0].StartPointCityName} (
                                                    {returnFlightSelected?.ListSegment[0].StartPoint})
                                                </Typography>
                                            </div>
                                            <div className='flex gap-2 items-start'>
                                                <Typography htmlTag='span' variant='body16'>
                                                    {formatFlightTime(returnFlightSelected?.EndDate || '')}
                                                </Typography>
                                                <Typography>
                                                    {returnFlightSelected?.ListSegment[0].EndPointCityName} (
                                                    {returnFlightSelected?.ListSegment[0].EndPoint})
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className=''>
                                            {getAirlineLogo(returnFlightSelected?.AirlineCode || '', {
                                                width: 48,
                                                height: 48,
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
            />
            <Modal
                outSideClick={true}
                lockScroll={true}
                isOpen={showFlightDetailModal}
                body={
                    <div className='w-[900px] min-h-[385px] bg-white rounded-2xl overflow-hidden'>
                        <div className='flex justify-between items-center h-14 p-4'>
                            <Typography variant='subtitle20'>Chi tiết chuyến bay</Typography>
                            <IconButton
                                onClick={() => {
                                    setShowFlightDetailModal(false);
                                }}
                                size='md'
                                variant='text'
                                customClasses={{
                                    root: 'rounded-xl !bg-white',
                                }}
                            >
                                <i className='icon icon-close text-2xl text-grey-900' />
                            </IconButton>
                        </div>
                        <div className='flex flex-col items-center gap-2 w-full pt-4 px-4 pb-4'>
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
                                <TabPane label={'Chiều đi'} value={detailTab} id={FightInfomationTabs.DEPARTURE} />
                                <TabPane
                                    label={'Chiều về'}
                                    value={detailTab}
                                    id={FightInfomationTabs.RETURN}
                                    disabled
                                />
                                <TabPane
                                    label={'Chi tiết giá vé'}
                                    value={detailTab}
                                    id={FightInfomationTabs.PRICE_DETAIL}
                                    disabled
                                />
                            </Tabs>
                            <TabContent className='w-full'>
                                {/* DEPARTURE TAB */}
                                <TabPane value={detailTab} id={FightInfomationTabs.DEPARTURE}>
                                    <div className='flex flex-col gap-2.5'>
                                        {departureFlightSelected &&
                                            departureFlightSelected.ListSegment.map((segment, index) => {
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
                                                                        {getAirlineLogo(
                                                                            departureFlightSelected.AirlineCode,
                                                                            {
                                                                                width: 48,
                                                                                height: 48,
                                                                            },
                                                                        )}
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
                                                                            Loại vé:{' '}
                                                                            {
                                                                                departureFlightSelected?.FareOptions[0]
                                                                                    .GroupClass
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='flex gap-1.5 w-[355px]'>
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
                                                                                    {formatFlightTime(
                                                                                        segment.StartDate,
                                                                                    )}
                                                                                </span>
                                                                                <span className='text-[13px] text-grey-500'>
                                                                                    {formatFlightDate(
                                                                                        segment.StartDate,
                                                                                    )}
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
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
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
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Hoàn huỷ:
                                                                            </Typography>{' '}
                                                                            {
                                                                                departureFareRule?.Translations[0]
                                                                                    .CancellationRefund
                                                                            }
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-change-time text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Đổi thời gian bay:
                                                                            </Typography>{' '}
                                                                            {
                                                                                departureFareRule?.Translations[0]
                                                                                    .TimeChange
                                                                            }
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-ticket-back text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Đổi lịch bay:
                                                                            </Typography>{' '}
                                                                            {
                                                                                departureFareRule?.Translations[0]
                                                                                    .ItineraryChange
                                                                            }
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-ticket-back text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Thay đổi thông tin:
                                                                            </Typography>{' '}
                                                                            {
                                                                                departureFareRule?.Translations[0]
                                                                                    .PassengerInfoChange
                                                                            }
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
                                {/* DEPARTURE TAB */}

                                {/* RETURN TAB */}
                                <TabPane value={detailTab} id={FightInfomationTabs.RETURN}>
                                    <div className='flex flex-col gap-2.5'>
                                        {returnFlightSelected &&
                                            returnFlightSelected.ListSegment.map((segment, index) => {
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
                                                                        {getAirlineLogo(
                                                                            returnFlightSelected.AirlineCode,
                                                                            {
                                                                                width: 48,
                                                                                height: 48,
                                                                            },
                                                                        )}
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
                                                                            Loại vé:{' '}
                                                                            {
                                                                                departureFlightSelected?.FareOptions[0]
                                                                                    .GroupClass
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='flex gap-1.5 w-[355px]'>
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
                                                                                    {formatFlightTime(
                                                                                        segment.StartDate,
                                                                                    )}
                                                                                </span>
                                                                                <span className='text-[13px] text-grey-500'>
                                                                                    {formatFlightDate(
                                                                                        segment.StartDate,
                                                                                    )}
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
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
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
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Hoàn huỷ:
                                                                            </Typography>{' '}
                                                                            {
                                                                                returnFareRule?.Translations[0]
                                                                                    .CancellationRefund
                                                                            }
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-change-time text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Đổi thời gian bay:
                                                                            </Typography>{' '}
                                                                            {returnFareRule?.Translations[0].TimeChange}
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-ticket-back text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Đổi lịch bay:
                                                                            </Typography>{' '}
                                                                            {
                                                                                returnFareRule?.Translations[0]
                                                                                    .ItineraryChange
                                                                            }
                                                                        </Typography>
                                                                    </div>
                                                                    <div className='flex gap-1'>
                                                                        <i className='icon icon-ticket-back text-[20px]' />
                                                                        <Typography
                                                                            customClasses={{
                                                                                root: '!text-[13px] leading-[20px]',
                                                                            }}
                                                                        >
                                                                            <Typography
                                                                                htmlTag='span'
                                                                                variant='subtitle14'
                                                                            >
                                                                                Thay đổi thông tin:
                                                                            </Typography>{' '}
                                                                            {
                                                                                returnFareRule?.Translations[0]
                                                                                    .PassengerInfoChange
                                                                            }
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
                                {/* RETURN TAB */}

                                {/* Detail Ticket Price */}
                                <TabPane value={detailTab} id={FightInfomationTabs.PRICE_DETAIL}>
                                    <div className='p-3 flex justify-center'>
                                        <table className='min-w-[600px]'>
                                            <tr>
                                                <th className='text-left font-bold text-grey-600 px-1.5'>Hành khách</th>
                                                <th className='text-right font-bold text-grey-600 px-1.5'>Số lượng</th>
                                                <th className='text-right font-bold text-grey-600 px-1.5'>Chiều đi</th>
                                                {returnFlightSelected && (
                                                    <th className='text-right font-bold text-grey-600 px-1.5'>
                                                        Chiều về
                                                    </th>
                                                )}
                                            </tr>
                                            <tr>
                                                <td className='text-grey-800 text-left p-1.5'>Giá vé người lớn</td>
                                                <td className='text-grey-800 text-right p-1.5'>{Adult}</td>
                                                {departureFlightPrice?.adultPrice && (
                                                    <td className='text-grey-800 text-right p-1.5'>
                                                        {currencyFormat(departureFlightPrice.adultPrice)}
                                                    </td>
                                                )}
                                                {returnFlightPrice?.adultPrice && (
                                                    <td className='text-grey-800 text-right p-1.5'>
                                                        {currencyFormat(returnFlightPrice.adultPrice)}
                                                    </td>
                                                )}
                                            </tr>
                                            {Boolean(Children) && (
                                                <tr>
                                                    <td className='text-grey-800 text-left p-1.5'>Giá vé trẻ em</td>
                                                    <td className='text-grey-800 text-right p-1.5'>{Children}</td>
                                                    {departureFlightPrice?.childrenPrice && (
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(departureFlightPrice.childrenPrice)}
                                                        </td>
                                                    )}
                                                    {returnFlightPrice?.childrenPrice && (
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(returnFlightPrice.childrenPrice)}
                                                        </td>
                                                    )}
                                                </tr>
                                            )}
                                            {Boolean(Infant) && (
                                                <tr>
                                                    <td className='text-grey-800 text-left p-1.5'>Giá vé em bé</td>
                                                    <td className='text-grey-800 text-right p-1.5'>{Infant}</td>
                                                    {departureFlightPrice?.infantPrice && (
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(departureFlightPrice.infantPrice)}
                                                        </td>
                                                    )}
                                                    {returnFlightPrice?.infantPrice && (
                                                        <td className='text-grey-800 text-right p-1.5'>
                                                            {currencyFormat(returnFlightPrice.infantPrice)}
                                                        </td>
                                                    )}
                                                </tr>
                                            )}
                                            <tr>
                                                <td className='text-grey-800 text-left p-1.5 font-bold'>Tổng</td>
                                                <td className='text-grey-800 text-right p-1.5 font-bold'>
                                                    {Adult + Children + Infant} khách
                                                </td>
                                                {departureFlightPrice && (
                                                    <td className='text-grey-800 text-right p-1.5 font-bold text-warning'>
                                                        {currencyFormat(
                                                            Adult * departureFlightPrice.adultPrice +
                                                                Children * departureFlightPrice.childrenPrice +
                                                                Infant * departureFlightPrice.infantPrice,
                                                        )}
                                                    </td>
                                                )}
                                                {returnFlightPrice && (
                                                    <td className='text-grey-800 text-right p-1.5 font-bold text-warning'>
                                                        {currencyFormat(
                                                            Adult * returnFlightPrice.adultPrice +
                                                                Children * returnFlightPrice.childrenPrice +
                                                                Infant * returnFlightPrice.infantPrice,
                                                        )}
                                                    </td>
                                                )}
                                            </tr>
                                        </table>
                                    </div>
                                </TabPane>
                                {/* Detail Ticket Price */}
                            </TabContent>
                            {/* Detail Tabs */}
                        </div>
                    </div>
                }
                setIsOpen={(booleanValue) => {
                    setShowFlightDetailModal(booleanValue);
                }}
            />
        </>
    );
};

export default FlightInfomation;
