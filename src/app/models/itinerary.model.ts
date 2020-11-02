
export interface IItinerary {
    taid:String,
    date:Date,
    assigned_customer_id:[String],
    location:Location,
  }
  
  export class Itinerary implements IItinerary {
  
    constructor(
      public taid: string,
      public location:Location,
      public assigned_customer_id:[String],
      public date:Date
    ) { }
  }