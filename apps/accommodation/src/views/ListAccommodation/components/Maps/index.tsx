'use client';
import { MapsCoords } from '@/types/Maps/MapsModel';
import GoogleMap, { ChangeEventValue } from 'google-map-react';
import { FC } from 'react';
import MapsMaker from './MapsMaker';

interface IProps {}

const MapView: FC<IProps> = (props) => {
    const {} = props;

    const onChangeMap = ({ bounds }: ChangeEventValue) => {
        const coords: MapsCoords = {
            lat_max: bounds.ne.lat,
            lat_min: bounds.sw.lat,
            long_max: bounds.ne.lng,
            long_min: bounds.sw.lng,
        };
        console.log(coords);
    };

    return (
        <>
            <GoogleMap
                bootstrapURLKeys={{
                    // eslint-disable-next-line turbo/no-undeclared-env-vars
                    key: (process.env.REACT_APP_GOOGLE_MAP_KEY as string) || 'AIzaSyB3ihmzhhL2Cf-9cgp0M89_Qm_wwEE4c70',
                }}
                defaultZoom={15}
                onChange={onChangeMap}
                defaultCenter={{
                    lat: 21.0453812,
                    lng: 105.8172885,
                }}
                yesIWantToUseGoogleMapApiInternals
            >
                <MapsMaker lat={21.0402544} lng={105.8130398} />
            </GoogleMap>
        </>
    );
};

MapView.defaultProps = {};

export default MapView;
