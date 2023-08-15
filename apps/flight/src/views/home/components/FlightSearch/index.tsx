'use client';
import SearchFlight from '@acme/pages/components/Search/Flight';
type Props = {
    onSubmit: (data: any) => void;
    isLoading: boolean;
    initialData: any;
};

const FlightSearch = (props: Props) => {
    const { onSubmit, isLoading, initialData } = props;
    return (
        <nav className='bg-white shadow-xs py-[24px] flex justify-center'>
            <div className='container max-w-[1200px] max-w-[1200px] flex flex-col gap-4 xl:px-0'>
                <SearchFlight onSubmit={onSubmit} isLoading={isLoading} initialData={initialData} />
            </div>
        </nav>
    );
};

export default FlightSearch;
