'use client';
import AdsBanner from '@/views/Home/components/AdsBanner';
import AttractiveDestination from '@/views/Home/components/AttractiveDestination';
import GridIntroProducts from '@/views/Home/components/GridIntroProducts';
import JoinSystem from '@/views/Home/components/JoinSystem';
import ProvidersLogo from '@/views/Home/components/ProvidersLogo';
import SalientFeatures from '@/views/Home/components/SalientFeatures';
import SignUpReceiveEmail from '@/views/Home/components/SignUpReceiveEmail';
import Footer from '@acme/pages/components/Footer';
import Header from '@acme/pages/components/Header';
import SearchHomePage from '@acme/pages/components/Search/SearchHomePage';
import { FC } from 'react';

interface IProps {}

const HomePageView: FC<IProps> = (props) => {
    return (
        <div className='container max-w-[1400px] mx-auto'>
            <Header />
            <AdsBanner />
            <div className='container max-w-[1200px] mx-auto -mt-[62px] relative z-[1]'>
                <SearchHomePage />
            </div>
            <div className='container max-w-[1200px] mx-auto mt-8'>
                <SalientFeatures />
            </div>
            <div className={'container max-w-[1200px] mx-auto mt-20'}>
                <GridIntroProducts />
            </div>
            <div className={'container max-w-[1200px] mx-auto mt-20'}>
                <AttractiveDestination />
            </div>
            <div className={'mt-20'}>
                <JoinSystem />
            </div>
            <div className={'container max-w-[1200px] mx-auto mt-20'}>
                <ProvidersLogo />
            </div>
            <div className={'container max-w-[1200px] mx-auto mt-20'}>
                <SignUpReceiveEmail />
            </div>
            <Footer />
        </div>
    );
};
export default HomePageView;
