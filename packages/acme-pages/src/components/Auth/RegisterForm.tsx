import { Button, Checkbox, Input, RHFInput } from '@acme/design-system';
import { useForm, FormProvider } from '@acme/design-system/ReactHookForm';
import React, { useEffect } from 'react';

type Props = {};

const RegisterForm = (props: Props) => {
    const methods = useForm({});

    const {
        handleSubmit,
        formState: { isLoading, isSubmitting },
        trigger,
    } = methods;

    // handler
    const handleRegister = async (registerInfo: any) => {
        try {
            const rest = await fetch('https://openvnid.com/api/account/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerInfo),
            });
            const result = (await rest.json()) as {
                Code: number;
                Message: string;
                Data: {
                    AccessToken: string;
                    Expires: number;
                    RefreshToken: string;
                };
            };

            const { Code, Message, Data } = result;

            if (Code === 1) {
                const { AccessToken, Expires, RefreshToken } = Data;
                //    onSuccess(payload);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // console.log(methods.watch('ConfirmPassword'));
        const password = methods.watch('Password');
        const confirmPassword = methods.watch('ConfirmPassword');
        if (password && confirmPassword) {
            trigger('ConfirmPassword');
        }
    }, [methods.watch('Password'), methods.watch('ConfirmPassword')]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className='flex flex-col gap-4'>
                    <RHFInput
                        name='Username'
                        rules={{
                            required: 'Email không được để trống',
                            validate: (value) => {
                                return (
                                    Boolean(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) || 'Email không hợp lệ'
                                );
                            },
                        }}
                        inputProps={{
                            required: true,
                            size: 'lg',
                            label: 'Email',
                            placeholder: 'Email',
                            fullWidth: true,
                        }}
                    />
                    <RHFInput
                        name='Password'
                        rules={{
                            required: 'Mật khẩu không được để trống',
                        }}
                        inputProps={{
                            required: true,
                            size: 'lg',
                            label: 'Mật khẩu',
                            placeholder: 'Mật khẩu',
                            type: 'password',
                            fullWidth: true,
                        }}
                    />

                    <RHFInput
                        name='ConfirmPassword'
                        rules={{
                            required: 'Vui lòng xác nhận mật khẩu',
                            validate: (value) => {
                                return value === methods.watch('Password') || 'Mật khẩu không khớp';
                            },
                        }}
                        inputProps={{
                            required: true,
                            size: 'lg',
                            label: 'Nhập lại mật khẩu',
                            placeholder: 'Nhập lại mật khẩu',
                            type: 'password',
                            fullWidth: true,
                        }}
                    />

                    <Checkbox
                        customClasses={{
                            label: 'text-base',
                        }}
                        defaultChecked
                        size='md'
                        label='Gửi cho tôi tin khuyến mại và các giảm giá đặc biệt của Flynow'
                    />
                    <Button
                        isLoading={isLoading || isSubmitting}
                        customClasses={{
                            root: 'h-[48px] !rounded-lg',
                        }}
                        fullWidth
                        size='lg'
                    >
                        Đăng ký
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default RegisterForm;
