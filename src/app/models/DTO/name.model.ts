export interface IName {
    first_name?: string;
    last_name?: string;
}
export class Name implements IName {
    constructor(
        public first_name?: string,
        public last_name?: string
    ) {

    }
}