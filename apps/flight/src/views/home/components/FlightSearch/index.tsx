'use client';
import SearchFlight from '@acme/pages/components/Search/Flight';
type Props = {};

const FlightSearch = (props: Props) => {
    return (
        <nav className='bg-white shadow-xs py-[24px] flex justify-center'>
            <div className='container max-w-[1200px] max-w-[1200px] flex flex-col gap-4 xl:px-0'>
                <SearchFlight />
            </div>
        </nav>
    );
};

export default FlightSearch;
