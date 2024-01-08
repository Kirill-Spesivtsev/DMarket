import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private accountService: AccountService, private router: Router){}


  errors?: string[] = undefined; 

  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  registerForm = new FormGroup({
    displayName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)], this.CheckEmailAvailability()),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });


  onSubmit(){
    if (this.registerForm.valid){
      this.accountService.register(this.registerForm.value).subscribe({
        next: () => this.router.navigateByUrl('/shop'),
        error: error => this.populateFormErrors(error)
      })
    }
  }

  populateFormErrors(error: any) {
    if (error.errors) {
      this.errors = Object.keys(error.errors).map(function(key){
        return error.errors[key];
      });
    } else {
      if (error.detail) {
        this.errors = [error.detail];
      }
    }
  }

  CheckEmailAvailability(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1000),
        take(1),
        switchMap(() => {
          return this.accountService.checkEmailExistence(control.value).pipe(
            map(result => result ? {emailExists: true} : null),
            finalize(() => control.markAsTouched())
          )
        })
      )
    }
  }

}
