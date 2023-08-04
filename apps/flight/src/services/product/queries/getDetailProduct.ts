import { fetchAPI } from '@acme/api';

interface ProductDetailRequest {
    body: {
        Aid: string;
        GroupServiceId: string;
        UsingDate: string;
    };
}
type ProductDetailResponseType = {
    Code: 1;
    Message: string;
    Data: any;
};

export const getProductDetail = async (data: ProductDetailRequest) => {
    return fetchAPI.mutation<ProductDetailRequest['body'], ProductDetailResponseType>(
        {
            url: 'https://alphaapi.digipost.com.vn/api/groupservice/sale-public/get-detail',
            request: data.body,
            method: 'POST'
        }
    );
};
