import useSWR, { Key } from 'swr';
import useSWRMutation from 'swr/mutation';
import fetchAPI from './fetchApi';
import { EnhanceRequestInit, ResponseWithData } from './types/fetch.types';

type SWRMutationConfiguration<Data, Error, SWRMutationKey extends Key = Key, ExtraArg = any, SWRData = any> = {
    revalidate?: boolean;
    populateCache?: boolean | ((result: Data, currentData: SWRData | undefined) => SWRData);
    optimisticData?: SWRData | ((currentData?: SWRData) => SWRData);
    rollbackOnError?: boolean | ((error: unknown) => boolean);
    onSuccess?: (
        data: Data,
        key: string,
        config: Readonly<SWRMutationConfiguration<Data, Error, SWRMutationKey, ExtraArg, SWRData>>,
    ) => void;
    onError?: (
        err: Error,
        key: string,
        config: Readonly<SWRMutationConfiguration<Data, Error, SWRMutationKey, ExtraArg, SWRData>>,
    ) => void;
};

const useQuery = <RequestGeneric extends Record<string, any>, ResponseGeneric>({
    url,
    method,
    request,
    fetcherConfig,
}: {
    url: string;
    method: 'GET';
    request: RequestGeneric;
    fetcherConfig?: EnhanceRequestInit;
}) => {
    return useSWR(
        url,
        async () =>
            await fetchAPI.query<RequestGeneric, ResponseGeneric>({
                url,
                request,
                config: fetcherConfig,
                method: method,
            }),
    );
};


const useMutation = <RequestGeneric, ResponseGeneric>({
    url,
    method,
    request,
    mutationOptions,
    fetcherConfig,
}: {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
    request?: RequestGeneric;
    mutationOptions?: SWRMutationConfiguration<ResponseWithData<ResponseGeneric>, Error>;
    fetcherConfig?: EnhanceRequestInit;
}) => {
    return useSWRMutation(
        url,
        async (
            key: string, { arg }: { arg: RequestGeneric }
        ) => fetchAPI.mutation<RequestGeneric, ResponseGeneric>({
            url,
            request: arg,
            config: fetcherConfig,
            method: method,
        }),
        mutationOptions,
    );
};

export { useMutation, useQuery };
