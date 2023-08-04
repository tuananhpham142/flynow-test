export interface AirportModel {
    Id: string;
    Name: string;
    CityId: string;
    CityName: string;
    CountryId: string;
    CountryName: string;
    PlaceId: string | null;
    PlaceName: null;
    IsDomestic: boolean;
}
