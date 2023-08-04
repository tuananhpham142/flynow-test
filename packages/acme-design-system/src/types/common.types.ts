import { FunctionComponent, ReactElement } from 'react';

export type InjectedProps = any;
export type WithInjectedProps<T extends any> = T & InjectedProps;
export type FallbackComponentProps = {
    error?: Error;
};
export type FallbackComponent =
    | FunctionComponent<FallbackComponentProps & { children?: React.ReactNode }>
    | ReactElement<any, any>
    | null; // This function takes a component and returns a new component with the injected props
