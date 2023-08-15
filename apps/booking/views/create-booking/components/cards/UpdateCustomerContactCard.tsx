import { useUpdateContactMutation } from 'services/flight';
import { Card, Input, RHFInput, Typography } from '@acme/design-system';
import { FormProvider, useForm, useFormContext } from '@acme/design-system/ReactHookForm';
import React, { useContext, useEffect } from 'react';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';

type Props = {};

const UpdateCustomerContactCard = (props: Props) => {
    const { sessionData, sessionId } = useContext(CreateBookingContext);

    const { setValue } = useFormContext();

    useEffect(() => {
        setValue('Contact', sessionData?.ContactInfo);
    }, [sessionData?.ContactInfo]);

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
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <RHFInput
                                inputProps={{
                                    size: 'lg',
                                    label: 'Họ và tên',
                                    required: true,
                                    placeholder: 'Nhập',
                                    fullWidth: true,
                                }}
                                name='Contact.FullName'
                                rules={{
                                    required: 'Họ và tên không được để trống',
                                }}
                            />
                        </div>
                        <div className='flex-1'>
                            <RHFInput
                                inputProps={{
                                    size: 'lg',
                                    label: 'Số điện thoại',
                                    required: true,
                                    placeholder: 'Nhập',
                                    fullWidth: true,
                                }}
                                name='Contact.Phone'
                                rules={{
                                    required: 'Số điện thoại không được để trống',
                                }}
                            />
                        </div>
                        <div className='flex-1'>
                            <RHFInput
                                inputProps={{
                                    size: 'lg',
                                    label: 'Email',
                                    required: true,
                                    placeholder: 'Nhập',
                                    fullWidth: true,
                                }}
                                name='Contact.Email'
                                rules={{
                                    required: 'Email không được để trống',
                                }}
                            />
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default UpdateCustomerContactCard;
