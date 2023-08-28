import { Button, RHFCheckbox, RHFInput } from '@acme/design-system';
import { FormProvider, useForm } from '@acme/design-system/ReactHookForm';
import { parseJwt, setCookieValue } from '@acme/utils';
import { UserInfo } from '../Header';

type Props = {
    onSuccess: (data: UserInfo) => void;
};

const TOKEN_COOKIE_NAME = 'fly-token';
const REFRESH_TOKEN_COOKIE_NAME = 'fly-refresh-token';
const USER_INFO_COOKIE_NAME = 'fly-user-info';

const LoginForm = (props: Props) => {
    const { onSuccess } = props;
    const methods = useForm();

    const {
        handleSubmit,
        formState: { isLoading, isSubmitting },
    } = methods;

    const handleLogin = async (data: any) => {
        try {
            const rest = await fetch('https://openvnid.com/api/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
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

                const payload = parseJwt(AccessToken);

                setCookieValue({
                    key: TOKEN_COOKIE_NAME,
                    value: AccessToken,
                    expireHours: Expires / 60 / 60,
                });

                setCookieValue({
                    key: REFRESH_TOKEN_COOKIE_NAME,
                    value: RefreshToken,
                    expireDays: 30,
                });

                setCookieValue({
                    key: USER_INFO_COOKIE_NAME,
                    value: JSON.stringify(payload),
                    expireDays: 30,
                });

                onSuccess(payload);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className='flex flex-col gap-4'>
                    <RHFInput
                        name='username'
                        rules={{
                            required: 'Tên đăng nhập không được để trống',
                        }}
                        inputProps={{
                            size: 'lg',
                            label: 'Tên đăng nhập',
                            placeholder: 'Tên đăng nhập',
                            fullWidth: true,
                        }}
                    />
                    <RHFInput
                        name='password'
                        rules={{
                            required: 'Mật khẩu không được để trống',
                        }}
                        inputProps={{
                            size: 'lg',
                            label: 'Mật khẩu',
                            placeholder: 'Mật khẩu',
                            fullWidth: true,
                            type: 'password',
                        }}
                    />
                    <RHFCheckbox
                        name='remember'
                        rules={{}}
                        checkboxProps={{
                            customClasses: {
                                label: 'text-base',
                            },
                            defaultChecked: true,
                            size: 'md',
                            label: 'Ghi nhớ đăng nhập',
                        }}
                    />
                    <Button
                        fullWidth
                        size='lg'
                        customClasses={{
                            root: 'h-[48px] !rounded-lg',
                        }}
                        isLoading={isLoading || isSubmitting}
                    >
                        Đăng nhập
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
