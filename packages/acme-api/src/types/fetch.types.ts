//#region API Response Interface
export interface PaginationDataResponse<T = any> {
    PageIndex: number;
    PageSize: number;
    Result: T;
    Total: number;
}

export interface BaseResponse<T = any> {
    Data: T;
    Code: number;
    Message: string;
}

export type BaseErrorResponse<T = any, E = any> = {
    Data: T;
    Detail: E;
    Code: number;
    Message?: string;
};
//#endregion

export interface NextFetchRequestConfig {
    revalidate?: number | false;
    tags?: string[];
}

export interface EnhanceRequestInit extends RequestInit {
    next?: NextFetchRequestConfig | undefined;
}

export type ResponseWithData<T> = Response & { data?: BaseResponse<T> };
