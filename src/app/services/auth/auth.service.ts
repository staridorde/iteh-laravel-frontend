import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetApiService } from '../API/budget/budget-api.service';
import { UserService } from '../API/user/user.service';
import { BudgetService } from '../budget/budget.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, 
              private http: HttpClient,
              private user_service: UserService,
              private budget_service: BudgetService,
              private budget_api_service: BudgetApiService) { }


  login(data: any) {
    const var_data = {
      username: data.email,
      password: data.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'IGqq94LXjhVRhMUTRJMkvC0bFaFJGtUB3ARp8G6s',
      scope: '*'
    };
    
    this.http.post('http://localhost:8000/oauth/token', var_data).subscribe(
      (result: any) => {
        this.user_service.token = result.access_token;
        this.budget_api_service.getBudget().subscribe(
          (data: any) => {this.budget_service.budget = data;}
        );


        // localStorage.setItem('token', result.access_token);
        this.router.navigate(['/secure/budget']);
      },
      error => { 
        console.log(data);
        console.log('error');
        console.log(error);
      }
    )
  }

  register(data: any) {
    this.http.post('http://localhost:8000/register', data).subscribe(
      result => console.log(result),
      err => console.log(err)
    )
  }

}
