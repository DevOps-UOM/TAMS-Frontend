import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllocatedCustomers } from 'src/app/models/itinerary.model';
import { ICustomer } from 'src/app/models/DTO/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //apiEndPoint = 'http://localhost:3000';

  selectedCustomer: AllocatedCustomers;
  customers: AllocatedCustomers[];

  constructor(private http: HttpClient) { }

  getASingleItinerary(cusid: String) {
    
    return this.http.get(environment.apiBaseUrl + '/customers/' + cusid);
  }

  addACustomer(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/customers', data);
  }

  listAllCustomers(): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/customers');
  }

  findOne(cust_id: string) {
    return this.http.get<any>( environment.apiBaseUrl + '/customers/' + cust_id);
  }

  deleteACustomer(cust_id: string) {
    return this.http.delete( environment.apiBaseUrl + '/customers/' + cust_id);
  }

  updateACustomer(customers: ICustomer) {
    return this.http.put(`${environment.apiBaseUrl}/customers/${(customers as any).cust_id}`, customers);
  }

}

