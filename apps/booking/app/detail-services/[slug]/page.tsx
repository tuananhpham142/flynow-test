import React, { FC } from "react";
import AccommodationDetail from 'views/detail';

interface IProps {
}

const DetailPage: FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className='container max-w-[1440px] mx-auto'>
      <AccommodationDetail />
    </div>
  );
};

DetailPage.defaultProps = {};

export default DetailPage;
