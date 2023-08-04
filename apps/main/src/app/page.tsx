import { FC } from 'react';
import HomePageView from 'src/views/Home';
interface IProps {}

const HomePage: FC<IProps> = (props) => {
    const {} = props;

    return <HomePageView />;
};

HomePage.defaultProps = {};

export default HomePage;
