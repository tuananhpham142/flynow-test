'use client';
import React, { useContext } from 'react';
import { Button, Card, Divider, Typography } from '@acme/design-system';
import PassengerInfo, { PassengerEnum } from './components/cards/PassengerInfo';
import CustomerContact from './components/cards/CustomerContact';
import BaggageCard from './components/cards/BaggageCard';
import MealCard from './components/cards/MealCard';
import SeatCard from './components/cards/SeatCard';
import InsuranceCard from './components/cards/InsuranceCard';
import HeadingSteps from './components/stepper/HeadingSteps';
import StepRenderer from './components/stepper/StepRenderer';
import BedSelectCard from './components/cards/BedSelectCard';
import SpecialRequirementsCard from './components/cards/SpecialRequirementsCard';
import PromotionCard from './components/cards/PromotionCard';
import PaymentCard from './components/cards/PaymentCard';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';

// utils
// import { useRouter } from 'next/navigation';

// services

type Props = {};

const CreateBooking: React.FC<Props> = (props) => {
    // const { sessionId } = props;
    const { sessionId } = useContext(CreateBookingContext);
    console.log(sessionId);

    const [activeStep, setActiveStep] = React.useState(1);

    // handlers
    const handleChangeStep = (value: number) => {
        setActiveStep(value);
    };

    const handleNextStep = () => {
        if (activeStep === 5) {
            return;
        }
        setActiveStep((prev) => prev + 1);
    };

    return (
        <main className='max-w-[1440px] mx-auto py-6'>
            <div className='max-w-[1200px] mx-auto py-1'>
                <HeadingSteps
                    steps={[
                        { id: 'step01', label: 'Nhập thông tin' },
                        { id: 'step02', label: 'Tiện nghi chuyến bay' },
                        { id: 'step03', label: 'Thêm dịch vụ khách sạn' },
                        { id: 'step04', label: 'Xem lại thông tin' },
                        { id: 'step05 ', label: 'Thanh toán' },
                    ]}
                    currentStep={activeStep}
                    handleStepClicked={handleChangeStep}
                />
                <div className='grid grid-cols-12 gap-6 pt-6'>
                    <div className='col-span-8'>
                        {/* Booking form */}
                        <div className='flex flex-col gap-4'>
                            <StepRenderer stepIndex={1} activeStep={activeStep}>
                                <CustomerContact />
                                <Card
                                    variant='border'
                                    rounded='lg'
                                    noPadding
                                    body={
                                        <div className='flex flex-col gap-4 p-4'>
                                            <div className=''>
                                                <div className='flex items-center gap-1'>
                                                    <Typography htmlTag='h5' variant='subtitle20'>
                                                        Thông tin hành khách
                                                    </Typography>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <i className='icon icon-warning-fill text-xl text-danger' />
                                                    <Typography
                                                        htmlTag='span'
                                                        variant='caption'
                                                        customClasses={{
                                                            root: 'text-danger',
                                                        }}
                                                    >
                                                        Nhập tiếng Việt không dấu, không có ký tự đặc biệt. Nhập thông
                                                        tin trùng khớp với giấy tờ cá nhân
                                                    </Typography>
                                                </div>
                                            </div>

                                            <PassengerInfo PassengerType={PassengerEnum.Adult} />
                                            <Divider />
                                            <PassengerInfo PassengerType={PassengerEnum.Child} />
                                            <Divider />
                                            <PassengerInfo PassengerType={PassengerEnum.Infant} />
                                        </div>
                                    }
                                />
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
                                step 4
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
                                    onClick={handleNextStep}
                                    size='lg'
                                    customClasses={{
                                        root: 'h-[56px] w-[300px]',
                                    }}
                                >
                                    Tiếp tục
                                </Button>
                            </div>
                        </div>
                        {/* Booking form */}
                    </div>
                    <div className='col-span-4'>
                        {/* Booking price */}
                        <aside className='flex flex-col gap-4'>
                            <Card
                                variant='border'
                                rounded='lg'
                                noPadding
                                body={
                                    <div className='flex flex-col p-4 gap-4'>
                                        <div className='flex items-center justify-between'>
                                            <Typography htmlTag='h5' variant='subtitle20'>
                                                Thông tin chuyến bay
                                            </Typography>
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
                                                    d='M13.7929 5.79289C14.1834 5.40237 14.8166 5.40237 15.2071 5.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L15.2071 18.2071C14.8166 18.5976 14.1834 18.5976 13.7929 18.2071C13.4024 17.8166 13.4024 17.1834 13.7929 16.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L13.7929 7.20711C13.4024 6.81658 13.4024 6.18342 13.7929 5.79289Z'
                                                    fill='#212B36'
                                                />
                                            </svg>
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
                                                        Chiều đi - 22/05/2019
                                                    </Typography>
                                                </div>
                                                <div className='flex gap-3 border border-grey-400 rounded py-1 px-2'>
                                                    <div className='flex-1 '>
                                                        <div className='flex gap-2 items-center'>
                                                            <Typography htmlTag='span' variant='body16'>
                                                                10:20
                                                            </Typography>
                                                            <Typography>Hanoi (HAN)</Typography>
                                                        </div>
                                                        <div className='flex gap-2 items-center'>
                                                            <Typography htmlTag='span' variant='body16'>
                                                                14:23
                                                            </Typography>
                                                            <Typography>Ho Chi Minh City (SGN)</Typography>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <svg
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
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

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
                                                        Chiều về - 22/05/2019
                                                    </Typography>
                                                </div>
                                                <div className='flex gap-3 border border-grey-400 rounded py-1 px-2'>
                                                    <div className='flex-1 '>
                                                        <div className='flex gap-2 items-center'>
                                                            <Typography htmlTag='span' variant='body16'>
                                                                10:20
                                                            </Typography>
                                                            <Typography>Hanoi (HAN)</Typography>
                                                        </div>
                                                        <div className='flex gap-2 items-center'>
                                                            <Typography htmlTag='span' variant='body16'>
                                                                14:23
                                                            </Typography>
                                                            <Typography>Ho Chi Minh City (SGN)</Typography>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <svg
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
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            <Card
                                variant='border'
                                rounded='lg'
                                noPadding
                                body={
                                    <div className='flex flex-col p-4 gap-4'>
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
                        </aside>
                        {/* Booking price */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreateBooking;
