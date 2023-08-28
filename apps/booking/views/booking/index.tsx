'use client';
import React, { useContext, useEffect } from 'react';
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
import { useRouter, useSearchParams } from 'next/navigation';
import { useCreateBookingMutation, useUpdatePassengerAndContactMutation } from 'services/flight';

// types
type Props = {};

// enums
export enum CreateBookingStep {
    BookingInfo = 'info',
    FlightAddOns = 'add-ons',
    AccommodationAddOns = 'accommodation',
    ReviewBooking = 'review',
    Payment = 'payment',
}

// constants
const steps = [
    { id: CreateBookingStep.BookingInfo, label: 'Nhập thông tin' },
    { id: CreateBookingStep.FlightAddOns, label: 'Tiện nghi chuyến bay' },
    { id: CreateBookingStep.AccommodationAddOns, label: 'Dịch vụ khách sạn' },
    { id: CreateBookingStep.ReviewBooking, label: 'Kiểm tra thông tin' },
    { id: CreateBookingStep.Payment, label: 'Thanh toán' },
];

const isValidStep = (value: string): value is CreateBookingStep => {
    return Object.values(CreateBookingStep).includes(value as CreateBookingStep);
};

const CreateBooking: React.FC<Props> = (props) => {
    const searchParams = useSearchParams();
    const urlStep = searchParams.get('step') as CreateBookingStep;
    const validatedStep = isValidStep(urlStep) ? urlStep : CreateBookingStep.BookingInfo;

    const router = useRouter();
    const [activeStep, setActiveStep] = React.useState<CreateBookingStep>(validatedStep);
    const { sessionData, sessionId, updateSessionData } = useContext(CreateBookingContext);

    const methods = useForm({
        defaultValues: {
            Contact: sessionData?.ContactInfo,
            Passengers: [],
        },
    });
    const { handleSubmit } = methods;

    // services
    const { trigger: createBooking, isMutating: isCreatingBooking } = useCreateBookingMutation();
    const { trigger: updatePassengerAndContact, isMutating: isUpdatePassengerAndContact } =
        useUpdatePassengerAndContactMutation();

    // handlers
    const handleSubmitBookingForm = async (data: any) => {
        try {
            if (activeStep === CreateBookingStep.BookingInfo) {
                console.log(data);

                const passengerFlightInfo = data.Passengers.map((passenger: any) => ({
                    ...passenger,
                    Gender: Number(passenger.Gender),
                    PassportExpiryDate: undefined,
                    Birthday: passenger.Birthday.startDate,
                }));

                const res = await updatePassengerAndContact({
                    SessionId: sessionId,
                    AId: '3531',
                    PassengerFlightInfo: passengerFlightInfo,
                    ContactFlightInfo: {
                        ...data.Contact,
                    },
                });

                if (res.ok && res.status === 200) {
                    if (res?.data?.Data) {
                        updateSessionData(res.data.Data);
                        handleChangeStep(CreateBookingStep.FlightAddOns);
                    }
                }
            }
            if (activeStep === CreateBookingStep.FlightAddOns) {
                handleChangeStep(CreateBookingStep.AccommodationAddOns);
            }
            if (activeStep === CreateBookingStep.AccommodationAddOns) {
                handleChangeStep(CreateBookingStep.ReviewBooking);
            }
            if (activeStep === CreateBookingStep.ReviewBooking) {
                handleChangeStep(CreateBookingStep.Payment);
            }
            if (activeStep === CreateBookingStep.Payment) {
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

            // if (activeStep < steps.length) {
            //     setActiveStep(activeStep + 1);
            // }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChangeStep = (value: CreateBookingStep) => {
        router.push(window.location.origin + window.location.pathname + '?step=' + value);
        return;
    };

    useEffect(() => {
        setActiveStep(validatedStep);
    }, [validatedStep]);

    return (
        <main className='max-w-[1440px] mx-auto py-6'>
            {sessionData ? (
                <div className='max-w-[1200px] mx-auto py-1'>
                    <HeadingSteps steps={steps} currentStep={activeStep} />
                    <div className='grid grid-cols-12 gap-6 pt-6'>
                        {/* Create booking form */}
                        <div className='col-span-8'>
                            <FormProvider {...methods}>
                                <form onSubmit={handleSubmit(handleSubmitBookingForm)}>
                                    <div className='flex flex-col gap-4'>
                                        <StepRenderer stepIndex={CreateBookingStep.BookingInfo} activeStep={activeStep}>
                                            <CustomerContactCard />
                                            <AddPassengerCard />
                                        </StepRenderer>

                                        <StepRenderer
                                            stepIndex={CreateBookingStep.FlightAddOns}
                                            activeStep={activeStep}
                                        >
                                            <InsuranceCard />

                                            <BaggageCard />

                                            <MealCard />

                                            <SeatCard />
                                        </StepRenderer>

                                        <StepRenderer
                                            stepIndex={CreateBookingStep.AccommodationAddOns}
                                            activeStep={activeStep}
                                        >
                                            <BedSelectCard />
                                            <SpecialRequirementsCard />
                                        </StepRenderer>

                                        <StepRenderer
                                            stepIndex={CreateBookingStep.ReviewBooking}
                                            activeStep={activeStep}
                                        >
                                            <CustomerContact />
                                            <PassengerInfo />
                                        </StepRenderer>

                                        <StepRenderer stepIndex={CreateBookingStep.Payment} activeStep={activeStep}>
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
                                                isLoading={isUpdatePassengerAndContact || isCreatingBooking}
                                                size='lg'
                                                customClasses={{
                                                    root: 'h-[56px] w-[300px] focus:bg-primary',
                                                }}
                                            >
                                                {activeStep === CreateBookingStep.Payment ? 'Thanh toán' : 'Tiếp tục'}
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
