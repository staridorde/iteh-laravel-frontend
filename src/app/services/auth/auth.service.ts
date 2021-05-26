import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'src/app/models/budget';
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
      client_secret: 'JrblsMRiz6FAlRTlocIkAFQKRZcFKceVm1qCHH7y',
      scope: '*'
    };
    
    this.http.post('http://localhost:8000/oauth/token', var_data).subscribe(
      (result: any) => {
        this.user_service.token = result.access_token;
        this.user_service.loggedIn = true;
        this.user_service.getUser();
        this.budget_service.getData(this.user_service.user.id);



        // console.log(this.user_service.user);
        // console.log(this.budget_service.budget);

        // this.budget_api_service.getBudget().subscribe(
        //   (data: any) => {
        //     console.log(data);
        //     this.budget_service.budget = data;
        //   }
        // );


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
      (result:any) => {
        const new_budget = {
          user_id: result.id
        }

        this.budget_api_service.newBudget(new_budget).subscribe(
          result => {
            console.log(result);

            this.router.navigate(['/login']);
          }
        );
      },
      err => console.log(err)
    )
  } 

}
