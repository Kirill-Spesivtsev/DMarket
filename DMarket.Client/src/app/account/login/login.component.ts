import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  returnUrl: string;

  constructor(private accountService: AccountService, private router: Router, 
    private activatedRoute: ActivatedRoute){
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || "/";
    }

  onSubmit(){
    if (this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe({
        next: () => this.router.navigateByUrl(this.returnUrl)
      })
    }
  }

}
