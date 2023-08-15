import React from 'react';
import { RHFInput, RHFRadioGroup, Radio, Typography, Datepicker, FormLabel, HelperText } from '@acme/design-system';
import { useFormContext, Controller } from '@acme/design-system/ReactHookForm';

export enum PassengerEnum {
    Adult = 'Adult',
    Child = 'Child',
    Infant = 'Infant',
}

type Props = {
    PassengerIndex: number;
    PassengerType: PassengerEnum;
    Index: number;
};

const PassengerForm: React.FC<Props> = (props) => {
    const { PassengerType, PassengerIndex, Index } = props;
    const { control } = useFormContext();

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
                    {`${passengerTitle()} ${PassengerIndex}`}
                </Typography>
                <i className='icon icon-contacts text-2xl' />
            </div>
            <div className='grid grid-cols-3 gap-4 px-4'>
                <div className=''>
                    <RHFInput
                        inputProps={{
                            size: 'lg',
                            label: 'Họ',
                            required: true,
                            placeholder: 'Nhập',
                            fullWidth: true,
                        }}
                        rules={{
                            required: 'Họ không được để trống',
                        }}
                        name={`Passengers[${Index}].FirstName`}
                    />
                </div>
                <div className=''>
                    <RHFInput
                        inputProps={{
                            size: 'lg',
                            label: 'Tên đệm và Tên',
                            required: true,
                            placeholder: 'Nhập',
                            fullWidth: true,
                        }}
                        rules={{
                            required: 'Tên đệm và Tên không được để trống',
                        }}
                        name={`Passengers[${Index}].LastName`}
                    />
                </div>
                <div className='mt-7'>
                    <RHFRadioGroup
                        radioGroupProps={{}}
                        rules={{
                            required: 'Vui lòng chọn giới tính',
                        }}
                        name={`Passengers[${Index}].Gender`}
                    >
                        <div className='flex gap-6 h-10 items-center'>
                            <Radio size='md' label='Anh' value='1' />
                            <Radio size='md' label='Chị' value='0' />
                        </div>
                    </RHFRadioGroup>
                </div>
                <div className='flex'>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Ngày sinh không được để trống',
                        }}
                        name={`Passengers[${Index}].Birthday`}
                        shouldUnregister={false}
                        render={({
                            field: { onChange, onBlur, ref, value },
                            fieldState: { error, invalid, isTouched, isDirty },
                            formState: { isSubmitting, isLoading },
                        }) => {
                            return (
                                <div>
                                    <FormLabel label='Ngày sinh' required size='lg' />
                                    <Datepicker
                                        onChange={onChange}
                                        containerClassName={'border border-grey-400 !rounded-sm'}
                                        asSingle={true}
                                        // clearable={true}
                                        placeholder='dd/mm/yyyy'
                                        toggleIcon={(isOpen) => <div>hhi</div>}
                                        dateLooking='backward'
                                        displayFormat='DD/MM/YYYY'
                                        hasToggle={false}
                                        useRange={false}
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
                                        changeMonthAndYear={true}
                                        value={value}
                                    />
                                    {error && <HelperText message={error?.message || ''} color='danger' />}
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PassengerForm;
