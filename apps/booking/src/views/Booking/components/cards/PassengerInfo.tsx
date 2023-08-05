import React from 'react';
import { Card, Divider, Input, Radio, RadioGroup, Typography } from '@acme/design-system';

export enum PassengerEnum {
    Adult = 'Adult',
    Child = 'Child',
    Infant = 'Infant',
}

type Props = {
    PassengerIndex?: number;
    PassengerType: PassengerEnum;
};

const PassengerInfo: React.FC<Props> = (props) => {
    const { PassengerType } = props;

    const passengerTitle = () => {
        switch (PassengerType) {
            case PassengerEnum.Adult:
                return 'Người lớn';
            case PassengerEnum.Child:
                return 'Trẻ em';
            case PassengerEnum.Infant:
                return 'Em bé';
            default:
                return 'Người lớn';
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
                <Typography htmlTag='h6' variant='subtitle16'>
                    {passengerTitle()}
                </Typography>
                <i className='icon icon-contacts text-2xl' />
            </div>
            <div className='grid grid-cols-3 gap-4 px-4'>
                <div className=''>
                    <Input size='lg' label='Họ' required placeholder='Nhập' fullWidth />
                </div>
                <div className=''>
                    <Input size='lg' label='Tên đệm và Tên' required placeholder='Nhập' fullWidth />
                </div>
                <div className='flex items-center'>
                    <RadioGroup name='gender' inline>
                        <Radio size='lg' label='Anh' />
                        <Radio size='lg' label='Chị' />
                    </RadioGroup>
                </div>
                <div className='flex'>
                    <Input
                        size='lg'
                        label='Ngày sinh'
                        required
                        placeholder='dd/mm/yyyy'
                        fullWidth
                        endAdornment={
                            <svg
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z'
                                    fill='#212B36'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M19 6H5L5 20H19V6ZM5 4C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4H5Z'
                                    fill='#212B36'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M8 2C8.55228 2 9 2.44772 9 3V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V3C15 2.44772 15.4477 2 16 2Z'
                                    fill='#212B36'
                                />
                                <rect x='4' y='5' width='16' height='3' fill='#212B36' />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default PassengerInfo;
