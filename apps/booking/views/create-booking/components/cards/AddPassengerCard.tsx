import React, { useContext, useEffect } from 'react';
import { Card, Typography } from '@acme/design-system';
import { useFieldArray, useFormContext } from '@acme/design-system/ReactHookForm';
import PassengerForm from './PassengerForm';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import { PassengerInfo } from 'models/Passenger/PassengerModel';
import { DateValueType } from '@acme/design-system/DatePicker/DatePicker.types';

export enum PassengerEnum {
    Adult = 'Adult',
    Child = 'Child',
    Infant = 'Infant',
}

type Props = {};

const AddPassengerForm: React.FC<Props> = (props) => {
    const { sessionData } = useContext(CreateBookingContext);

    const { control } = useFormContext();

    const { fields: passengers, replace } = useFieldArray({
        control,
        name: 'Passengers',
    });

    useEffect(() => {
        if (!sessionData?.InitSessionData) return;

        if (sessionData.PassengerInfo && sessionData.PassengerInfo.length > 0) {
            replace(
                sessionData.PassengerInfo.map((passenger) => ({
                    ...passenger,
                    Gender: passenger?.Gender?.toString(),
                    Birthday: {
                        startDate: passenger?.Birthday || '',
                        endDate: passenger?.Birthday || '',
                    },
                })),
            );
            return;
        } else {
            const AdultCount = sessionData?.InitSessionData.Adult;
            const ChildrenCount = sessionData?.InitSessionData.Children;
            const InfantCount = sessionData?.InitSessionData.Infant;

            const passengerIndexCount = [AdultCount, ChildrenCount, InfantCount];

            const passengersInfo: Array<
                Omit<PassengerInfo, 'PassportExpiryDate' | 'Birthday'> & {
                    PassportExpiryDate?: string;
                    Birthday: DateValueType;
                }
            > = [];

            passengerIndexCount.forEach((count, index) => {
                for (let i = 0; i < count; i++) {
                    let Type: PassengerEnum = PassengerEnum.Adult;

                    if (index === 0) {
                        Type = PassengerEnum.Adult;
                    }
                    if (index === 1) {
                        Type = PassengerEnum.Child;
                    }
                    if (index === 2) {
                        Type = PassengerEnum.Infant;
                    }

                    passengersInfo.push({
                        Index: i + 1,
                        Gender: null,
                        Type: Type,
                        Group: '',
                        FirstName: '',
                        LastName: '',
                        Phone: '',
                        Email: '',
                        Birthday: {
                            startDate: '',
                            endDate: '',
                        },
                        PassportExpiryDate: undefined,
                        PassportIssueCountry: '',
                        PassportNumber: '',
                    });
                }
            });

            replace(passengersInfo);
        }
    }, [sessionData?.InitSessionData]);

    return (
        <Card
            variant='border'
            rounded='lg'
            noPadding
            customClasses={{
                root: '!overflow-visible',
            }}
            body={
                <div className='flex flex-col gap-4 p-4 card-animation'>
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
                                Nhập tiếng Việt không dấu, không có ký tự đặc biệt. Nhập thông tin trùng khớp với giấy
                                tờ cá nhân
                            </Typography>
                        </div>
                    </div>

                    {passengers.map((passenger: any, index) => (
                        <PassengerForm
                            key={`passenger_${index}`}
                            PassengerIndex={passenger.Index}
                            PassengerType={passenger.Type}
                            Index={index}
                        />
                    ))}
                </div>
            }
        />
    );
};

export default AddPassengerForm;
