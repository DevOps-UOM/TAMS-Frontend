
export interface IItinerary {
  _id:String;
  taid: String,
  date: Date,
  assigned_customer_id: [String],
  location: Location,
}

export class Itinerary implements IItinerary {

  constructor(
    public _id:string,
    public taid: string,
    public location: Location,
    public assigned_customer_id: [String],
    public date: Date
  ) { }
}


export interface IAllocatedCustomers {

  cust_id: string;
  name: {
    first_name: string,
    last_name: string
  };
  location: {
    coordinates: number[]
    type: string
  };
  email: string;
  nic: string;
  mobile_number: number;
  address: {
    address_line_1: string,
    address_line_2: string,
    city: string
  };
  area: string;
}

export class AllocatedCustomers implements IAllocatedCustomers {
  constructor(
    public address: {
      address_line_1: string,
      address_line_2: string,
      city: string
    },
    public area: string,
    public cust_id: string,
    public email: string,
    public location: {
      coordinates: number[]
      type: string
    },
    public mobile_number: any,
    public name: {first_name:string,last_name:string},
    public nic: string
  ) { }
}

export enum modeSignalStatus{
  directionMode="directionMode",
  markerMode="markerMode",
  singlePathMode="singlePathMode"
}



