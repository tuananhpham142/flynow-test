// import { _OpenConfirmDialog } from '';
// import { getAccessToken, removeCookie } from '';
import axiosBase, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
// import { API_URL } from './api';

export type AxiosRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const accessControlAllowOrigin = {
    'Access-Control-Allow-Origin': '*',
};

let axios: AxiosInstance = axiosBase.create({
    baseURL: 'https://alphaapi.digipost.com.vn',
    withCredentials: false, // to use cookies
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${''}`,
        timeout: 30000,
        ...accessControlAllowOrigin,
    },
});

axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (!config?.headers) {
            throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
        }

        // config.headers.Authorization = 'application/json';
        // config.headers.Authorization = `Bearer ${getAccessToken(process.env.AUTH_KEY as string)}`;
        // config.headers.Timeout = 30000;
        // config.headers.AcceptLanguage = getCookie(process.env.LANGUAGE as string);

        // console.log(config);

        return { ...config, ...accessControlAllowOrigin };
        // return {
        //     ...config,
        //     headers: {
        //         ...config.headers,
        //         common: {
        //             ...config.headers?.common,
        //             Accept: 'application/json',
        //             Authorization: accessToken(),
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //         // common: {
        //         //     ...config.headers?.common,
        //         //     Accept: 'application/json',
        //         //     Authorization: accessToken(),
        //         //     'Access-Control-Allow-Origin': '*',
        //         // },
        //     },
        //     timeout: 30000,
        //     ...accessControlAllowOrigin,
        // };
    },
    (error: any) => Promise.reject(error),
);

axios.interceptors.response.use(
    (axiosResponse) => {
        return axiosResponse;
    },
    async (err: any) => {
        const error = err.response;
        // if error is 401
        if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
            // request for a new token
            // return getAuthToken().then((response) => {
            //     // update the error config with new token
            //     error.config.__isRetryRequest = true;
            //     error.config.headers.token = localStorage.getItem('accessToken');
            //     return client(error.config);
            // });
            // await removeCookie(process.env.AUTH_KEY as string);
            // await removeCookie(process.env.AUTH_REFRESH as string);
            // await removeCookie(process.env.TENANT_KEY as string);
            // await removeCookie(process.env.WORKGROUP_KEY as string);
            // alert('Vui lòng đăng nhập lại');
            // window.location.href = '/';
            // _OpenConfirmDialog({
            //     content: 'Vui lòng đăng nhập lại',
            //     title: 'Phiên đăng nhập hết hạn',
            //     variant: 'danger',
            //     onConfirm: () => window.location.assign('/'),
            //     onCancel: () => window.location.assign('/'),
            //     duration: 0,
            //     labelConfirm: 'Đăng nhập lại',
            //     labelCancel: 'Xác nhận',
            // });
        }
    },
);

export default axios;
