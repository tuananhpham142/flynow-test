'use client';
import dynamic from 'next/dynamic';
import { FC, Suspense, useState } from 'react';
import FlightSearchSkeleton from './Flight/FlightSearchSkeleton';
import SearchTabs from './SearchTabs';
const SearchFlight = dynamic(() => import('./Flight'), {
    ssr: false,
});
const SearchAccommodation = dynamic(() => import('./Accommodation'), {
    ssr: false,
});

interface IProps {}

const SearchHomePage: FC<IProps> = (props) => {
    const [focus, setFocus] = useState<1 | 2 | 3 | 4>(1);
    return (
        <div className='rounded-lg'>
            <div className='flex items-center w-fit bg-white rounded-t-[24px] pt-5 px-6 gap-10'>
                <SearchTabs focus={focus} setFocus={setFocus} />
            </div>
            {focus === 1 && (
                <Suspense fallback={<FlightSearchSkeleton />}>
                    <div className='flex flex-col bg-white p-6 rounded-b-[24px] gap-2 shadow'>
                        <SearchFlight
                            isHomePage={true}
                            onSubmit={function (data: any): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </div>
                </Suspense>
            )}
            {focus === 2 && (
                <Suspense fallback={<FlightSearchSkeleton />}>
                    <div className='flex flex-col bg-white p-6 rounded-b-[24px] gap-2 shadow'>
                        <SearchAccommodation
                            isHomePage
                            onSubmit={function (data: any): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </div>
                </Suspense>
            )}
        </div>
    );
};
export default SearchHomePage;
