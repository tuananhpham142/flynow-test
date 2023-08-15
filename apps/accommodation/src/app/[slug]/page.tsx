import AccommodationDetail from '@/views/AccommodationDetail';
import { FC } from 'react';

interface IProps {}

const DetailPage: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='container max-w-[1400px] mx-auto'>
            <AccommodationDetail />
        </div>
    );
};

DetailPage.defaultProps = {};

export default DetailPage;
