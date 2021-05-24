import { IAddress, Address } from "./address.model";
import { ILocation, Location } from "./location.model";
import { IName } from "./name.model";

export interface ICustomer {
    cust_id?: string;
    name?: IName;
    mobile_number?: string;
    nic?: string;
    area?: string;
    is_deleted?: boolean,
    address?: Address,
    location?: Location,
    email?: string,
    default_agent_id?: string

}
export class Customer implements ICustomer {
    constructor(
        public cust_id?: string,
        public name?: IName,
        public mobile_number?: string,
        public nic?: string,
        public area?: string,
        public is_deleted?: boolean,
        public address?: Address,
        public location?: Location,
        public email?: string,
        public default_agent_id?: string
    ) {

        this.location = location;
        this.address = address;

    }
}