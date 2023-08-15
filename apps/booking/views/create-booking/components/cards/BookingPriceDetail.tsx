import { Card, Divider, Typography } from '@acme/design-system';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import React, { useContext } from 'react';

type Props = {};

const BookingPriceDetail = (props: Props) => {
    const { sessionData } = useContext(CreateBookingContext);

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
                        <div className='flex justify-between items-center'>
                            <Typography htmlTag='span' variant='body16'>
                                Giá vé người lón
                            </Typography>
                            <Typography>2 x 1,200,000₫</Typography>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Typography htmlTag='span' variant='body16'>
                                Giá vé trẻ em
                            </Typography>
                            <Typography>1 x 1,200,000₫</Typography>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Typography htmlTag='span' variant='body16'>
                                Giá vé em bé
                            </Typography>
                            <Typography>1 x 1,200,000₫</Typography>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Typography htmlTag='span' variant='body16'>
                                Bảo hiểm du lịch
                            </Typography>
                            <Typography>4 x 200,000₫</Typography>
                        </div>
                    </div>

                    <Divider />

                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <Typography variant='subtitle16'>Tổng thanh toán</Typography>
                            <Typography
                                customClasses={{
                                    root: 'text-warning',
                                }}
                                variant='subtitle16'
                            >
                                4,000,000₫
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
                </div>
            }
        />
    );
};

export default BookingPriceDetail;
