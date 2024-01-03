import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let msg = error?.error?.detail ? error.error.detail : error?.error?.title;

        if (error) {
          if (error.status === 400) {
            //this.router.navigateByUrl("/bad-request")
            if(error.error.errors){
              //this.toastr.error(msg, error.status.toString());
              throw error.error;
            } else {
              this.toastr.error(msg, error.status.toString());
            }
          }

          if (error.status === 404) {
            const navExtras: NavigationExtras = {state: {error: error.error}};
            this.router.navigateByUrl("/not-found", navExtras);
          }

          if (error.status === 500) {
            const navExtras: NavigationExtras = {state: {error: error.error}};
            this.router.navigateByUrl("/server-error", navExtras)
          }
        }
        
        return throwError(() => new Error(msg));
      })
    );
  }
}
