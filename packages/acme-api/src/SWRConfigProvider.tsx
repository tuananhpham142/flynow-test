import React from 'react';
import * as swr__internal from 'swr/_internal';

declare const SWRConfig: React.FC<
    React.PropsWithChildren<{
        value?:
            | (Partial<swr__internal.PublicConfiguration<any, any, swr__internal.BareFetcher<any>>> &
                  Partial<swr__internal.ProviderConfiguration> & {
                      provider?: ((cache: Readonly<swr__internal.Cache<any>>) => swr__internal.Cache<any>) | undefined;
                  })
            | ((
                  parentConfig?:
                      | (Partial<swr__internal.PublicConfiguration<any, any, swr__internal.BareFetcher<any>>> &
                            Partial<swr__internal.ProviderConfiguration> & {
                                provider?:
                                    | ((cache: Readonly<swr__internal.Cache<any>>) => swr__internal.Cache<any>)
                                    | undefined;
                            })
                      | undefined,
              ) => Partial<swr__internal.PublicConfiguration<any, any, swr__internal.BareFetcher<any>>> &
                  Partial<swr__internal.ProviderConfiguration> & {
                      provider?: ((cache: Readonly<swr__internal.Cache<any>>) => swr__internal.Cache<any>) | undefined;
                  })
            | undefined;
    }>
> & {
    defaultValue: swr__internal.FullConfiguration;
};

SWRConfig.defaultProps = {
    value: {
        dedupingInterval: 3000,
        refreshInterval: 500,
        revalidateOnReconnect: true,
        revalidateOnMount: true,
        revalidateIfStale: true,
        // shouldRetryOnError: false
        // keepPreviousData: true,
        suspense: true,
        // fallbackData: {},
        loadingTimeout: 120000,
    },
};

export default SWRConfig;
