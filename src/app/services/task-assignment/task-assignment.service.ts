import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { AllocatedCustomers } from '../../models/itinerary.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskAssignmentService {

  apiEndPoint = 'http://192.168.8.101:3000';


  constructor(private http: HttpClient) { }



  updateTaskStatus(changeStatus:any) {
    return this.http.put(this.apiEndPoint + '/taskAssignment/' + changeStatus.itinerary_id + '/' + changeStatus.cust_id, changeStatus);
  }

  getTaskStatus(itinerary_id:string,cust_id:string) : Observable<any>{
    return this.http.get(`${this.apiEndPoint}/taskAssignment/${itinerary_id}/${cust_id}`)
  }

  updateQueueNumber(data:any) {
    return this.http.put(this.apiEndPoint + '/taskAssignment/' + data.itinerary_id + '/' + data.cust_id, data);
  }

}
