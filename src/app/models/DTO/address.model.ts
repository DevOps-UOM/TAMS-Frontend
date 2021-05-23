export interface IAddress {
    address_line_1?: string;
    address_line_2?: string;
    city?: string;

}
export class Address implements IAddress {
    constructor(
        public address_line_1?: string,
        public address_line_2?: string,
        public city?: string
    ) {

    }
}