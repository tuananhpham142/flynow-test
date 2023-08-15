import { Card, Typography } from '@acme/design-system';
import React, { useContext } from 'react';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';

type Props = {};

const CustomerContact = (props: Props) => {
    const { sessionData, sessionId } = useContext(CreateBookingContext);

    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <div className='flex flex-col gap-4 p-4 card-animation'>
                    <div className=''>
                        <div className='flex items-center gap-1'>
                            <Typography htmlTag='h5' variant='subtitle20'>
                                Thông tin khách hàng
                            </Typography>
                            {/* <i className='icon icon-contacts text-2xl' /> */}
                        </div>
                        <div className='flex items-center gap-1'>
                            <i className='icon icon-info-circle-filll text-primary text-xl' />

                            <Typography htmlTag='span' variant='caption'>
                                Flynow liên hệ vé theo thông tin này
                            </Typography>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-3'>
                            <Typography variant='body16'>Họ và tên:</Typography>
                            <Typography variant='body16'>Email:</Typography>
                            <Typography variant='body16'>Số điện thoại:</Typography>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography variant='subtitle16'> {sessionData?.ContactInfo.FullName}</Typography>
                            <Typography variant='body16' customClasses={{ root: '!text-primary' }}>
                                {sessionData?.ContactInfo.Email}
                            </Typography>
                            <Typography variant='body16'>{sessionData?.ContactInfo.Phone}</Typography>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default CustomerContact;
