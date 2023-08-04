import type { BaseResponse, EnhanceRequestInit, ResponseWithData } from './types/fetch.types';

const TIMEOUT = 30000;

interface FetchInterface {
    run<ResponseGeneric = any>(
        url: RequestInfo,
        config?: EnhanceRequestInit,
    ): Promise<ResponseWithData<ResponseGeneric>>;
}

class BasicFetcher implements FetchInterface {
    async run<ResponseGeneric>(
        url: RequestInfo,
        config?: EnhanceRequestInit,
    ): Promise<ResponseWithData<ResponseGeneric>> {
        return await fetch(url, config);
    }
}

class JsonFetcherDecorator implements FetchInterface {
    private decoratee: FetchInterface;

    constructor(decoratee: FetchInterface) {
        this.decoratee = decoratee;
    }

    async run<ResponseGeneric>(
        url: RequestInfo,
        config?: EnhanceRequestInit,
    ): Promise<ResponseWithData<ResponseGeneric>> {
        const response = await this.decoratee.run(url, config);
        const json = (await response.json()) as BaseResponse<ResponseGeneric>;
        response.data = json;
        return response;
    }
}

class TimeoutFetcher implements FetchInterface {
    private decoratee: FetchInterface;

    constructor(decoratee: FetchInterface) {
        this.decoratee = decoratee;
    }

    async run<ResponseGeneric>(
        url: RequestInfo,
        config?: EnhanceRequestInit,
    ): Promise<ResponseWithData<ResponseGeneric>> {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), TIMEOUT);
        const response = await this.decoratee.run(url, {
            headers: {
                'Content-type': 'application/json',
            },
            signal: controller.signal,
            ...config,
        });
        clearTimeout(id);
        return response;
    }
}

const fetcher = new TimeoutFetcher(new JsonFetcherDecorator(new BasicFetcher()));

const fetchAPI = {
    query: <RequestGeneric extends Record<string, any>, ResponseGeneric>({
        url,
        method = 'GET',
        request,
        config,
    }: {
        url: string;
        method: 'GET';
        request?: RequestGeneric;
        config?: EnhanceRequestInit;
    }) =>
        fetcher.run.bind(fetcher)<ResponseGeneric>(`${url}`, {
            method: 'GET',
            cache: 'force-cache',
            next: {
                revalidate: 10,
            },
            ...(config ? config : {}),
        }),
    mutation: <RequestGeneric, ResponseGeneric>({
        url,
        method,
        request,
        config,
    }: {
        url: string;
        method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
        request: RequestGeneric;
        config?: EnhanceRequestInit;
    }) =>
        fetcher.run.bind(fetcher)<ResponseGeneric>(url, {
            method: method,
            body: request ? JSON.stringify(request) : undefined,
            ...(config ? config : {}),
        }),
};

export default fetchAPI;
