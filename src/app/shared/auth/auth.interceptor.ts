import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { UserService } from "./../../services/user/user.service";
import { LoadingSpinnerService } from "src/app/services/loading-spinner/loading-spinner.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : UserService,private router : Router,public spinnerService:LoadingSpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.spinnerService.requestStarted();

        if (req.headers.get('noauth')){
            return next.handle(req.clone()).pipe(
                tap(
                    event => {
                        this.spinnerService.requestEnd();
                     },
                    err => {
                        if (err.error.auth == false) {
                            this.spinnerService.resetSpinner();
                        }
                    })
            );
        }
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => {
                        this.spinnerService.requestEnd();
                     },
                    err => {
                        if (err.error.auth == false) {
                            this.router.navigateByUrl('/login');
                            this.spinnerService.resetSpinner();
                        }
                    })
            );
        }
    }
}