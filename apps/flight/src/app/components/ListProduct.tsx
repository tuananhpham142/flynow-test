'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getByPageProducts } from '@/services/product';
import Loading from './Loading';

type Props = {};

const ListProduct = (props: Props) => {
    const [data, setData] = React.useState<any>();

    React.useEffect(() => {
        (async () => {
            const res = await getByPageProducts({
                body: {
                    AId: '3531',
                    PageIndex: 1,
                    PageSize: 24,
                    Orderby: 'desc',
                    Keyword: '',
                    UsingDate: new Date().toISOString(),
                },
            });

            if (res.data) {
                setData(res.data.Data);
            }
        })();
    }, []);

    return (
        <>
            {data ? (
                <div className='grid grid-cols-3 gap-4'>
                    {data?.Result.map((prod: any, i: number) => {
                        return (
                            <Link key={`product_${i}`} href={`/product/${prod.Id}`} prefetch={false}>
                                <div className='max-w-sm bg-white border border-grey-200 rounded-lg shadow dark:bg-grey-800 dark:border-grey-700'>
                                    <a href='#'>
                                        <Image
                                            width={80}
                                            height={80}
                                            className='rounded-t-lg'
                                            src={`https://picsum.photos/500.webp?random=${i}`}
                                            alt=''
                                        />
                                    </a>
                                    <div className='p-5'>
                                        <h5 className='mb-2 text-1xl font-bold tracking-tight text-grey-900 dark:text-white'>
                                            {prod.Name}
                                        </h5>
                                        <p className='mb-3 text-sm font-normal text-grey-700 dark:text-grey-400'>
                                            {prod.Code}
                                        </p>
                                        {prod.CategoryName && (
                                            <span className='bg-grey-100 text-secondary-dark text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
                                                {prod.CategoryName}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <Loading />
                </div>
            )}
        </>
    );
};

export default ListProduct;
