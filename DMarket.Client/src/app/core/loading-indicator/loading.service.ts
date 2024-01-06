import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingRequestsCount: number = 0;

  constructor(private spinnerService: NgxSpinnerService) { }


  startLoading(){
    this.loadingRequestsCount++;
    this.spinnerService.show(undefined, {})
  }

  endLoading(){
    this.loadingRequestsCount--;
    if (this.loadingRequestsCount <= 0) {
      this.loadingRequestsCount == 0;
      this.spinnerService.hide();
    }
  }


}
