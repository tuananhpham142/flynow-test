import ListAccommodationView from '@/views/ListAccommodation';
import { FC } from 'react';

interface IProps {}

const ListAccommodationPage: FC<IProps> = (props) => {
    const {} = props;

    return <ListAccommodationView />;
};

ListAccommodationPage.defaultProps = {};

export default ListAccommodationPage;
