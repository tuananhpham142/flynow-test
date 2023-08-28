import React, { useContext } from 'react';
import { Card, Divider, Typography, dayjs } from '@acme/design-system';
import CreateBookingContext from 'contexts/create-booking-context/createBookingContext';
import { PassengerInfo } from 'models/Passenger/PassengerModel';

export enum PassengerEnum {
    Adult = 'Adult',
    Child = 'Child',
    Infant = 'Infant',
}

type Props = {};

const PassengerInfo: React.FC<Props> = (props) => {
    const { sessionData } = useContext(CreateBookingContext);
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
                                Thông tin hành khách
                            </Typography>
                        </div>
                    </div>
                    <Divider />
                    {sessionData?.PassengerInfo?.map((passenger) => (
                        <PassengerDisplay passenger={passenger} />
                    ))}
                </div>
            }
        />
    );
};

export default PassengerInfo;

const PassengerDisplay = ({ passenger }: { passenger: PassengerInfo }) => {
    const { FirstName, LastName, Gender, Type } = passenger;

    const getPassengerType = (type: string) => {
        switch (type) {
            case PassengerEnum.Adult:
                return 'Người lớn';
            case PassengerEnum.Child:
                return 'Trẻ em';
            case PassengerEnum.Infant:
                return 'Em bé';
            default:
                return '';
        }
    };

    return (
        <div className='flex flex-col gap-2 pb-2'>
            <div>
                <Typography variant='subtitle16'>{`${FirstName} ${LastName}`}</Typography>
                <Typography variant='body16' customClasses={{ root: '!text-grey-500' }}>
                    {getPassengerType(Type || '')}
                </Typography>
            </div>

            <div className='flex gap-3'>
                <div className='flex-1 flex gap-3 pl-6'>
                    <div className='flex flex-col gap-3'>
                        <Typography variant='body16'>Ngày sinh:</Typography>
                        <Typography variant='body16'>Giới tính:</Typography>
                        <Typography variant='body16'>Quốc tịch:</Typography>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Typography variant='body16'>{dayjs(passenger.Birthday).format('DD/MM/YYYY')}</Typography>
                        <Typography variant='body16' customClasses={{ root: '!text-primary' }}>
                            {Gender === 1 ? 'Nam' : 'Nữ'}
                        </Typography>
                        <Typography variant='body16'>Việt Nam</Typography>
                    </div>
                </div>

                <div className='flex-1 flex gap-3 pl-6'>
                    <div className='flex flex-col gap-3'>
                        <Typography variant='body16'>Số hộ chiếu:</Typography>
                        <Typography variant='body16'>Quốc gia cấp:</Typography>
                        <Typography variant='body16'>Ngày hết hạn:</Typography>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Typography variant='body16'>00000000000000</Typography>
                        <Typography variant='body16'>Việt Nam</Typography>
                        <Typography variant='body16'>
                            28/08/2024 <span className='!text-grey-500'>(còn 1 năm)</span>
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 pl-6'>
                <div className='flex items-center py-2 px-4 bg-grey-200'>
                    <Typography variant='body16'>Bảo hiểm: 86.762₫</Typography>
                </div>

                <div className='flex items-center py-2 px-4 bg-grey-200'>
                    <Typography variant='body16'>Hành lý chiều đi: 20kg - 200.000₫</Typography>
                </div>

                <div className='flex items-center py-2 px-4 bg-grey-200'>
                    <Typography variant='body16'>Hành lý chiều về: 20kg - 200.000₫</Typography>
                </div>
            </div>
        </div>
    );
};
