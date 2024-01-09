import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bad-request',
  templateUrl: './bad-request.component.html',
  styleUrls: ['../errors-common.scss', './bad-request.component.scss']
})
export class BadRequestComponent {

  error: any;

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.error = nav?.extras?.state?.['error']
  }

}
