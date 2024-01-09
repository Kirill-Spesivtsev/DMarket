import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['../errors-common.scss', './server-error.component.scss']
})
export class ServerErrorComponent {
  error: any;

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.error = nav?.extras?.state?.['error']
  }
  
}
