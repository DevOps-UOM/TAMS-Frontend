import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiEndPoint = 'http://192.168.8.101:3000';

  constructor(private http: HttpClient) { }

  getASingleItinerary(cusid: String) {
    return this.http.get(this.apiEndPoint + '/customers/' + cusid);
  }

}
