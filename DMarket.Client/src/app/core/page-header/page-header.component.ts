import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  headerTitle?: string;//= environment?.appTitle;

  noHeaderRoutes: string[] = [
    "Home"
  ]

  constructor(public breadcrumbService: BreadcrumbService){
    breadcrumbService.breadcrumbs$
  }

}
