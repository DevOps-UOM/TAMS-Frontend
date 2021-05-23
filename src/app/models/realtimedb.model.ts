
export class LocationModel {
    key?: string | null;
    userName?: string;
    coordinates?: Coordinates;
    angle?: number;
}

export class Coordinates {
    lat: number;
    lng: number;
}