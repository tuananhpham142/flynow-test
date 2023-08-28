import { Card, Divider, Typography } from '@acme/design-system';
import { currencyFormat } from '@acme/utils';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import React, { useContext, useMemo } from 'react';

type Props = {};

const BookingPriceDetail = (props: Props) => {
    const { sessionData } = useContext(CreateBookingContext);

    if (!sessionData) return null;

    const { FlightInfoSelected } = sessionData;
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

    const passengerFlightInfo = sessionData?.FlightInfo?.[0]?.PassengerFlightInfo;

    const baggagePrice = useMemo(() => {
        let departureBaggagePrice = 0;
        let returnBaggagePrice = 0;
        if (passengerFlightInfo) {
            // departureBaggagePrice = passengerFlightInfo.reduce((total, passenger) => {
            //     return total + passenger.FlightInfo[0].Price + passenger?.FlightInfo?.[1]?.Price;
            // }, 0);

            passengerFlightInfo.forEach((passenger) => {
                departureBaggagePrice += passenger.FlightInfo[0].Price;
                returnBaggagePrice += passenger?.FlightInfo?.[1]?.Price;
            });
        }

        return {
            departureBaggagePrice,
            returnBaggagePrice,
        };
    }, [passengerFlightInfo]);

    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='flex flex-col p-4 gap-4 card-animation'>
                    <div className='flex items-center justify-between'>
                        <Typography htmlTag='h5' variant='subtitle20'>
                            Chi tiết giá
                        </Typography>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {departureFlightPrice && (
                            <>
                                <Divider className='before:border-grey-300 after:border-grey-300'>
                                    <svg
                                        className='fill-grey-500'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7.79 22L9.685 22L16 14L20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10L15.895 10L9.58 2L7.791 2L10.601 10L6 10L4 7L2 7L4 12L2 17L4 17L6 14L10.685 14L7.79 22Z' />
                                    </svg>
                                </Divider>
                                <div className='flex justify-between items-center'>
                                    <Typography htmlTag='span' variant='body16'>
                                        Giá vé người lớn ({departureFlight?.AirlineCode})
                                    </Typography>
                                    <Typography>{`${Adult} x ${currencyFormat(
                                        departureFlightPrice.adultPrice,
                                    )}`}</Typography>
                                </div>
                                {Boolean(departureFlightPrice.childrenPrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Giá vé trẻ em ({departureFlight?.AirlineCode})
                                        </Typography>
                                        <Typography>{`${Children} x ${currencyFormat(
                                            departureFlightPrice.childrenPrice,
                                        )}`}</Typography>
                                    </div>
                                )}
                                {Boolean(departureFlightPrice.infantPrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Giá vé em bé ({departureFlight?.AirlineCode})
                                        </Typography>
                                        <Typography>{`${Infant} x ${currencyFormat(
                                            departureFlightPrice.infantPrice,
                                        )}`}</Typography>
                                    </div>
                                )}
                                {Boolean(baggagePrice.departureBaggagePrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Hành lý chiều đi
                                        </Typography>
                                        <Typography>{currencyFormat(baggagePrice.departureBaggagePrice)}</Typography>
                                    </div>
                                )}
                            </>
                        )}
                        {returnFlightPrice && (
                            <>
                                <Divider className='before:border-grey-300 after:border-grey-300 pt-3'>
                                    <svg
                                        className='fill-grey-500'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M16.21 2L14.315 2L8 10L4 10C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14L8.105 14L14.42 22L16.209 22L13.399 14L18 14L20 17L22 17L20 12L22 7L20 7L18 10L13.315 10L16.21 2Z' />
                                    </svg>
                                </Divider>
                                <div className='flex justify-between items-center'>
                                    <Typography htmlTag='span' variant='body16'>
                                        Giá vé người lớn ({returnFlight?.AirlineCode})
                                    </Typography>
                                    <Typography>{`${Adult} x ${currencyFormat(
                                        returnFlightPrice.adultPrice,
                                    )}`}</Typography>
                                </div>
                                {Boolean(returnFlightPrice.childrenPrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Giá vé trẻ em ({returnFlight?.AirlineCode})
                                        </Typography>
                                        <Typography>{`${Children} x ${currencyFormat(
                                            returnFlightPrice.childrenPrice,
                                        )}`}</Typography>
                                    </div>
                                )}
                                {Boolean(returnFlightPrice.infantPrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Giá vé em bé ({returnFlight?.AirlineCode})
                                        </Typography>
                                        <Typography>{`${Infant} x ${currencyFormat(
                                            returnFlightPrice.infantPrice,
                                        )}`}</Typography>
                                    </div>
                                )}
                                {Boolean(baggagePrice.returnBaggagePrice) && (
                                    <div className='flex justify-between items-center'>
                                        <Typography htmlTag='span' variant='body16'>
                                            Hành lý chiều về
                                        </Typography>
                                        <Typography>{currencyFormat(baggagePrice.returnBaggagePrice)}</Typography>
                                    </div>
                                )}
                            </>
                        )}
                        {/* <div className='flex justify-between items-center'>
                            <Typography htmlTag='span' variant='body16'>
                                Bảo hiểm du lịch
                            </Typography>
                            <Typography>4 x 200,000₫</Typography>
                        </div> */}
                    </div>

                    <Divider />

                    {departureFlightPrice && (
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <Typography variant='subtitle16'>Tổng thanh toán</Typography>
                                <Typography
                                    customClasses={{
                                        root: '!text-warning',
                                    }}
                                    variant='subtitle16'
                                >
                                    {currencyFormat(
                                        Adult * departureFlightPrice.adultPrice +
                                            Children * departureFlightPrice.childrenPrice +
                                            Infant * departureFlightPrice.infantPrice +
                                            (returnFlightPrice
                                                ? Adult * returnFlightPrice.adultPrice +
                                                  Children * returnFlightPrice.childrenPrice +
                                                  Infant * returnFlightPrice.infantPrice
                                                : 0) +
                                            baggagePrice.departureBaggagePrice +
                                            baggagePrice.returnBaggagePrice,
                                    )}
                                </Typography>
                            </div>

                            <Typography
                                variant='caption'
                                customClasses={{
                                    root: 'text-grey-600',
                                }}
                            >
                                Giá đã bao gồm thuế, phí và hoá đơn VAT
                            </Typography>
                        </div>
                    )}
                </div>
            }
        />
    );
};

export default BookingPriceDetail;
