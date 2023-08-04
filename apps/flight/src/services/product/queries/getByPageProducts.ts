import { fetchAPI } from '@acme/api';

interface RequestType {
    body: {
        AId: string;
        PageIndex: number;
        PageSize: number;
        Orderby: string;
        Keyword: string;
        UsingDate: string;
    };
}
type ResponseType = {
    Result: any[];
    Data: any;
};

export const getByPageProducts = async (data: RequestType) => {
    return fetchAPI.mutation<RequestType['body'], ResponseType>({
        method: 'POST',
        url: 'https://alphaapi.digipost.com.vn/api/groupservice/sale-public/get-by-page',
        request: data.body,
    });
};
