import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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

}

