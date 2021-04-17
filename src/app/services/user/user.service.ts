import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User;
  token: string = '';

  constructor(private http: HttpClient,
              private router: Router) { }


  getUser() {
    const headers = new HttpHeaders({
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`
      'Authorization': `Bearer ${this.token}`
    })

    this.http.get('http://localhost:8000/user', {headers: headers}).subscribe(
      (result: any) => {
        this.user.id = result.id;
        this.user.name = result.name;
        this.user.email = result.email;
      },
      (err) => {
        // localStorage.removeItem('token');
        this.token = '';
        this.router.navigate(['/login']);
      }
    ); 
  }
}
