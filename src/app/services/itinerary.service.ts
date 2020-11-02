import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  apiEndPoint = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getItineraries(){
    return this.http.get(this.apiEndPoint+'/itineraries');
  }
  addItinerary(newItinerary:any){
    return this.http.post(this.apiEndPoint+'/itineraries',newItinerary);
  }

  updateItinerary(updatedItinerary:any){
    return this.http.put(this.apiEndPoint+'/itineraries/'+updatedItinerary.date+'/'+updatedItinerary.taid,updatedItinerary);
  }

  deleteItinerary(date:Date,taid:String){
    return this.http.delete(this.apiEndPoint+'/itineraries/'+date+'/'+taid);
  }

  getASingleItinerary(date:Date,taid:String){
    return this.http.get(this.apiEndPoint+'/itineraries/'+date+'/'+taid);
  }

  getAllocatedCustomers(date:Date,taid:String){
    return this.http.get(this.apiEndPoint+'/itineraries/allocated_customers/'+date+'/'+taid);
  }

}
