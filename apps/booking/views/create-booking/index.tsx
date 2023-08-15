'use client';
import React, { useContext } from 'react';
// components
import { Button, Typography, _OpenConfirmDialog } from '@acme/design-system';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import AddPassengerCard from './components/cards/AddPassengerCard';
import BaggageCard from './components/cards/BaggageCard';
import BedSelectCard from './components/cards/BedSelectCard';
import BookingPriceDetail from './components/cards/BookingPriceDetail';
import CustomerContact from './components/cards/CustomerContact';
import FlightInfomation from './components/cards/FlightInfomation';
import InsuranceCard from './components/cards/InsuranceCard';
import MealCard from './components/cards/MealCard';
import PassengerInfo from './components/cards/PassengerInfo';
import PaymentCard from './components/cards/PaymentCard';
import PromotionCard from './components/cards/PromotionCard';
import SeatCard from './components/cards/SeatCard';
import SpecialRequirementsCard from './components/cards/SpecialRequirementsCard';
import CustomerContactCard from './components/cards/UpdateCustomerContactCard';
import HeadingSteps from './components/stepper/HeadingSteps';
import StepRenderer from './components/stepper/StepRenderer';

// forms
import { FormProvider, useForm } from '@acme/design-system/ReactHookForm';

// services
import { useRouter } from 'next/navigation';
import { useAddPassengerMutation, useCreateBookingMutation, useUpdateContactMutation } from 'services/flight';

// types
type Props = {};

// enums
enum CreateBookingStep {
    BookingInfo,
    FlightAddOns,
    AccommodationAddOns,
    ReviewBooking,
    Payment,
}

// constants
const steps = [
    { id: 'step01', label: 'Nhập thông tin' },
    { id: 'step02', label: 'Tiện nghi chuyến bay' },
    { id: 'step03', label: 'Dịch vụ khách sạn' },
    { id: 'step04', label: 'Kiểm tra thông tin' },
    { id: 'step05 ', label: 'Thanh toán' },
];

const CreateBooking: React.FC<Props> = (props) => {
    const router = useRouter();
    const [activeStep, setActiveStep] = React.useState(1);
    const { sessionData, sessionId, updateSessionData } = useContext(CreateBookingContext);

    const methods = useForm({
        defaultValues: {
            Contact: sessionData?.ContactInfo,
            Passengers: [],
        },
    });
    const { handleSubmit } = methods;

    // services
    const { trigger: addPassenger, isMutating: isAddingPassengers } = useAddPassengerMutation();
    const { trigger: updateContact, isMutating: isUpdatingContact } = useUpdateContactMutation();
    const { trigger: createBooking, isMutating: isCreatingBooking } = useCreateBookingMutation();

    // handlers
    const handleSubmitBookingForm = async (data: any) => {
        try {
            if (activeStep > steps.length) return;
            if (activeStep === 1) {
                console.log(data);

                const updateContactPromise = updateContact({
                    AId: '3531',
                    SessionId: sessionId,
                    ...data.Contact,
                });

                const addPassengerPromise = addPassenger({
                    AId: '3531',
                    PassengerInfo: data.Passengers.map((passenger: any) => ({
                        ...passenger,
                        Gender: Number(passenger.Gender),
                        PassportExpiryDate: undefined,
                        Birthday: passenger.Birthday.startDate,
                    })),
                    SessionId: sessionId,
                });

                const res = await Promise.all([updateContactPromise, addPassengerPromise]);

                if (res[0]?.data?.Data && res[1]?.data?.Data) {
                    const newSessionData = {
                        ...res[0].data.Data,
                        PassengerInfo: res[1].data.Data.PassengerInfo,
                    };
                    updateSessionData(newSessionData);
                }
                console.log(res);
            }
            if (activeStep === 5) {
                _OpenConfirmDialog({
                    variant: 'primary',
                    duration: 0,
                    onCancel: () => {
                        console.log('cancel');
                    },
                    labelConfirm: 'Thanh toán',
                    labelCancel: 'Hủy',
                    title: 'Thanh toán đơn hàng',
                    content:
                        'Bạn đồng ý thanh toán cho đơn hàng này với tổng giá trị 2.560.000₫ qua phương thức Thẻ ATM và Thẻ ngân hàng?',
                    onConfirm: async () => {
                        await createBooking({
                            SessionId: sessionId,
                            AId: '3531',
                        });

                        router.push('/create-success');
                    },
                    isLoading: isCreatingBooking,
                });
            }

            if (activeStep < steps.length) {
                setActiveStep(activeStep + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChangeStep = (value: number) => {
        setActiveStep(value);
    };

    return (
        <main className='max-w-[1440px] mx-auto py-6'>
            {sessionData ? (
                <div className='max-w-[1200px] mx-auto py-1'>
                    <HeadingSteps steps={steps} currentStep={activeStep} handleStepClicked={handleChangeStep} />
                    <div className='grid grid-cols-12 gap-6 pt-6'>
                        {/* Create booking form */}
                        <div className='col-span-8'>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(handleSubmitBookingForm)}>
                                    <div className='flex flex-col gap-4'>
                                        <StepRenderer stepIndex={1} activeStep={activeStep}>
                                            <CustomerContactCard />
                                            <AddPassengerCard />
                                        </StepRenderer>

                                        <StepRenderer stepIndex={2} activeStep={activeStep}>
                                            <InsuranceCard />

                                            <BaggageCard />

                                            <MealCard />

                                            <SeatCard />
                                        </StepRenderer>

                                        <StepRenderer stepIndex={3} activeStep={activeStep}>
                                            <BedSelectCard />
                                            <SpecialRequirementsCard />
                                        </StepRenderer>

                                        <StepRenderer stepIndex={4} activeStep={activeStep}>
                                            <CustomerContact />
                                            <PassengerInfo />
                                        </StepRenderer>

                                        <StepRenderer stepIndex={5} activeStep={activeStep}>
                                            <PromotionCard />

                                            <PaymentCard />

                                            <div className='flex justify-end'>
                                                <Typography
                                                    variant='body16'
                                                    customClasses={{
                                                        root: 'text-primary underline cursor-pointer',
                                                    }}
                                                >
                                                    Xem hướng dẫn thanh toán
                                                </Typography>
                                            </div>
                                        </StepRenderer>

                                        <div className='flex justify-center'>
                                            <Button
                                                isLoading={isAddingPassengers || isUpdatingContact || isCreatingBooking}
                                                size='lg'
                                                customClasses={{
                                                    root: 'h-[56px] w-[300px] focus:bg-primary',
                                                }}
                                            >
                                                {activeStep === steps.length ? 'Thanh toán' : 'Tiếp tục'}
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                        {/* Create booking form */}

                        {/* Booking infomation */}
                        <div className='col-span-4'>
                            <aside className='flex flex-col gap-4 sticky top-6'>
                                <FlightInfomation />

                                <BookingPriceDetail />
                            </aside>
                        </div>
                        {/* Booking infomation */}
                    </div>
                </div>
            ) : (
                <div className='h-screen'></div>
            )}
        </main>
    );
};

export default CreateBooking;
