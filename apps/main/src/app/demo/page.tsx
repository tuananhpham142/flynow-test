import React, { FC } from 'react';
import GridIntroProducts from '@/views/Home/components/GridIntroProducts';
import AttractiveDestination from '@/views/Home/components/AttractiveDestination';
import JoinSystem from '@/views/Home/components/JoinSystem';
import ProvidersLogo from '@/views/Home/components/ProvidersLogo';
import SignUpReceiveEmail from '@/views/Home/components/SignUpReceiveEmail';
import SalientFeatures from '@/views/Home/components/SalientFeatures';
import SearchHomePage from '@/views/Home/components/Search/SearchHomePage';

interface IProps {}

const Demo: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='container mx-auto'>
            <div>
                <SearchHomePage />
            </div>
        </div>
    );
};

Demo.defaultProps = {};

export default Demo;
