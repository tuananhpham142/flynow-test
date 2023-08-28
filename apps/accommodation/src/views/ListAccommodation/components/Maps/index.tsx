'use client';
import RecommendCard from '@/components/Cards/RecommendCard';
import { MapsCoords } from '@/types/Maps/MapsModel';
import { ListRenderer } from '@acme/design-system';
import GoogleMap, { ChangeEventValue } from 'google-map-react';
import { FC, useState } from 'react';
import MapsMarker from './MapsMarker';
import { AcdDetailResponse } from '@/types/Accommodation/AcdModel';

interface IProps {}

const rooms = [
    {
        Amenities: [],
        Avatar: '',
        CheckIn: '00 : 00',
        CheckOut: '00 : 00',
        Code: '',
        Description: '',
        ExtraInformation: '',
        Features: [],
        Id: '',
        Media: [],
        Name: '',
        OverallRating: { AvgCleanliness: 0, AvgService: 0, AvgValuable: 0 },
        Place: { Latitude: 0, Longitude: 0, PlaceId: '', PlaceName: '' },
        Policies: [],
        Price: 0,
        Reviews: [],
        RoomClasses: [],
        Rules: [],
        SpecialAmenities: [],
        TotalRating: 0,
        TotalReview: 0,
        TotalRatingText: '',
        UnitPrice: 0,
    },
];

const MapView: FC<IProps> = (props) => {
    const {} = props;
    const [hoverId, setHoverId] = useState<string>('');

    const onChangeMap = ({ bounds }: ChangeEventValue) => {
        const coords: MapsCoords = {
            lat_max: bounds.ne.lat,
            lat_min: bounds.sw.lat,
            long_max: bounds.ne.lng,
            long_min: bounds.sw.lng,
        };
    };

    const hoverAction = (key: string) => {
        setHoverId(key);
    };

    return (
        <div className={'flex gap-6 min-h-screen'}>
            <div className={'basis-3/5'}>
                <ListRenderer
                    items={rooms}
                    renderItem={(room: AcdDetailResponse) => <RecommendCard room={room} hoverAction={hoverAction} />}
                    customClasses={{
                        wrapper: 'grid grid-cols-3 gap-y-8 gap-x-4 w-full',
                    }}
                />
            </div>
            <div className={'basis-2/5 relative block'}>
                <div className={'sticky z-10 top-[220px]  h-screen w-full'}>
                    <GoogleMap
                        bootstrapURLKeys={{
                            key:
                                // eslint-disable-next-line turbo/no-undeclared-env-vars
                                (process.env.REACT_APP_GOOGLE_MAP_KEY as string) ||
                                'AIzaSyB3ihmzhhL2Cf-9cgp0M89_Qm_wwEE4c70',
                        }}
                        defaultZoom={15}
                        onChange={onChangeMap}
                        defaultCenter={{
                            lat: 21.0453812,
                            lng: 105.8172885,
                        }}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        {rooms.map((room) => (
                            <MapsMarker
                                key={room.Id}
                                room={room}
                                isHover={hoverId === room.Id}
                                lat={room.Place.Latitude}
                                lng={room.Place.Longitude}
                            />
                        ))}
                    </GoogleMap>
                </div>
            </div>
        </div>
    );
};

MapView.defaultProps = {};

export default MapView;
