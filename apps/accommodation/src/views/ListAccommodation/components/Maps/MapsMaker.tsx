import { ChildComponentProps, Coords } from 'google-map-react';
import React, { FC } from 'react';

interface IProps extends Coords, ChildComponentProps {
    isHover?: boolean;
}

const MapsMaker: FC<IProps> = (props) => {
    const {} = props;

    return <div className={'bg-danger text-white p-2'}>MapMaker</div>;
};

MapsMaker.defaultProps = {};

export default MapsMaker;
