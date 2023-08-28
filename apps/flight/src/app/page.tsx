import dynamic from 'next/dynamic';
import Loading from './components/Loading';

const FlightHome = dynamic(() => import('@/views/home'), {
    ssr: false,
    loading: Loading,
});

export default function Index(props: any) {
    return <FlightHome {...props} />;
}
