import { Injectable } from '@angular/core';
import { ReplaySubject, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/models/applicationUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  updateUserAddress(value: any) {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.apiBaseUrl;

  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  fetchCurrentUser(jwtToken: string | null){

    if (jwtToken === null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${jwtToken}`);

    return this.http.get<User>(this.baseUrl + 'account', {headers}).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('jwtToken', user.token);
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    )

  }

  login(values: any){
    return this.http.post<User>(this.baseUrl + "account/login", values).pipe(
      map( user => {
        localStorage.setItem('jwtToken', user.token);
        this.currentUserSource.next(user);
      })
    )
  }

  register(values: any){
    return this.http.post<User>(this.baseUrl + "account/register", values).pipe(
      map( user => {
        localStorage.setItem('jwtToken', user.token);
        this.currentUserSource.next(user);
      })
    )
  }

  logout(){
    localStorage.removeItem('jwtToken');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExistence(email: string){
    return this.http.get<boolean>(this.baseUrl + "account/email-exists" + "?email=" + email)
  }

}
