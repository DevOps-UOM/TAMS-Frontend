import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from '../loading-spinner/loading-spinner.service';
import { tap } from 'rxjs/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public spinnerService:LoadingSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.requestStarted();
    
    return this.handler(next,req)
  }

  handler(next,request){
    return next.handle(request).pipe(
      tap((event)=>{
        if(event instanceof HttpResponse){
          this.spinnerService.requestEnd();
        }
      },(error:HttpErrorResponse)=>{
        this.spinnerService.resetSpinner();
        throw error;
      })
    );
  }
}
