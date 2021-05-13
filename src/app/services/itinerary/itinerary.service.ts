import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { AllocatedCustomers } from '../../models/itinerary.model'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  apiEndPoint = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  getItineraries():Observable<any>{
    return this.http.get(this.apiEndPoint + '/itineraries');
  }
  addItinerary(newItinerary: any) {
    return this.http.post(this.apiEndPoint + '/itineraries', newItinerary);
  }

  updateItinerary(updatedItinerary: any) {
    return this.http.put(this.apiEndPoint + '/itineraries/' + updatedItinerary.date + '/' + updatedItinerary.taid, updatedItinerary);
  }

  deleteItinerary(date: Date, taid: String) {
    return this.http.delete(this.apiEndPoint + '/itineraries/' + date + '/' + taid);
  }

  getASingleItinerary(date: any, taid: String) : Observable<any>  {
    return this.http.get(this.apiEndPoint + '/itineraries/' + date + '/' + taid);
  }

  getAllocatedCustomers(date: any, taid: String): Observable<HttpResponse<any>> {
    //console.log("1");
    return this.http.get<any>(`${this.apiEndPoint}/itineraries/allocated_customers/${date}/${taid}`, {observe : 'response'});
        
  }

  getAllocatedPendingCustomers(date: any, taid: String): Observable<HttpResponse<any>> {
    //console.log("1");
    return this.http.get<any>(`${this.apiEndPoint}/itineraries/allocated_pending_customers/${date}/${taid}`, {observe : 'response'});
        
  }

}
