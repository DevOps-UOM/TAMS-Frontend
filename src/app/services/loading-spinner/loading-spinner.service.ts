import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService  {

  private count = 0;
  private spinner$ = new BehaviorSubject('');

  constructor() { 
    
  }



  getSpinnerObserver():Observable<any>{
    return this.spinner$.asObservable();
  }

  requestStarted(){
    
     if(++this.count ===1){
       this.spinner$.next('start');
     }
  }

  requestEnd(){
    if(this.count ===0 || --this.count ===0){

      this.spinner$.next('stop');
    }
  }

  resetSpinner(){
    this.count=0;
    this.spinner$.next('stop');
  }

}
