export { default as axios } from './axiosInstance';
import SWRConfigProvider from './SWRConfigProvider';
import fetchAPI from './fetchApi';
import { useMutation, useQuery } from './swrHooks';

export { type BaseErrorResponse, type BaseResponse, type PaginationDataResponse } from './types/fetch.types';

export { SWRConfigProvider, fetchAPI, useMutation, useQuery };

// types export
    export * from './types';

export * from 'swr';
