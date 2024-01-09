import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['../errors-common.scss', './not-found.component.scss']
})
export class NotFoundComponent {
  
  error: any;

  constructor(private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.error = nav?.extras?.state?.['error']
  }

}
