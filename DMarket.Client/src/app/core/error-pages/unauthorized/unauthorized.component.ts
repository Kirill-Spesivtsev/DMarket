import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

  error: any;

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.error = nav?.extras?.state?.['error']
  }

}
