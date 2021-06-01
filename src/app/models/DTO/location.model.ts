export interface ILocation {
    type?: string;
    coordinates?: any[];
}
export class Location implements ILocation {
    constructor(
        public type?: string,
        public coordinates?: any[]
    ) {

    }
}