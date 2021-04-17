import { AllocatedCustomers } from 'src/app/models/itinerary.model';
import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer: AllocatedCustomers;
  customers: AllocatedCustomers[];

  apiEndPoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getASingleItinerary(cusid: String) {
    return this.http.get(this.apiEndPoint + '/customers/' + cusid);
  }

  addACustomer(data: any): Observable<any> {
    return this.http.post(this.apiEndPoint + '/customers', data);
  }

  listAllCustomers(): Observable<any> {
    return this.http.get(this.apiEndPoint + '/customers');
  }

  findOne(cust_id: string) {
    return this.http.get<any>(this.apiEndPoint + '/customers/' + cust_id);
  }

  deleteACustomer(cust_id: string) {
    return this.http.delete(this.apiEndPoint + '/customers/' + cust_id);
  }

  updateACustomer(customers: AllocatedCustomers) {
    return this.http.put(this.apiEndPoint + `/${customers.cust_id}`, customers);
  }
}

