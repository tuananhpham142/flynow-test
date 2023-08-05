import CreateBookingContext from '@/contexts/create-booking-context/createBookingContext';
import { useUpdateContactMutation } from '@/services/flight';
import { Card, Input, RHFInput, Typography } from '@acme/design-system';
import { FormProvider, useForm } from '@acme/design-system/ReactHookForm';
import { useContext } from 'react';

type Props = {};

const CustomerContact = (props: Props) => {
    const { sessionData, sessionId } = useContext(CreateBookingContext);

    const methods = useForm({
        defaultValues: {
            FullName: 'Truong Quoc Vuong',
            Phone: '0987654321',
            Email: '',
        },
    });

    const {
        trigger: updateContact,
        data,
        error,
        isMutating,
        reset,
    } = useUpdateContactMutation({
        body: {
            AId: '3531',
            Email: 'vuongtq@softcom.vn',
            FullName: 'Truong Quoc Vuong',
            Phone: '0987654321',
            SessionId: sessionId,
            Address: 'Ha Noi, Viet Nam',
            IdentityNo: '037097000528',
            Note: 'Hello World',
            // CId: '',
        },
    });

    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            body={
                <FormProvider {...methods}>
                    <div className='flex flex-col gap-4 p-4'>
                        <div className=''>
                            <div className='flex items-center gap-1'>
                                <Typography htmlTag='h5' variant='subtitle20'>
                                    Thông tin khách hàng
                                </Typography>
                                <i className='icon icon-contacts text-2xl' />
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
                                    name='FullName'
                                    rules={{}}
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
                                    name='Phone'
                                    rules={{}}
                                />
                            </div>
                            <div className='flex-1'>
                                <Input size='lg' label='Email' required placeholder='Nhập' fullWidth />
                            </div>
                        </div>
                    </div>
                </FormProvider>
            }
        />
    );
};

export default CustomerContact;
