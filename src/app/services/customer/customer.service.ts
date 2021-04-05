import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiEndPoint = 'https://tams-devops.herokuapp.com';

  constructor(private http: HttpClient) { }

  getASingleItinerary(cusid: String) {
    return this.http.get(this.apiEndPoint + '/customers/' + cusid);
  }

}
