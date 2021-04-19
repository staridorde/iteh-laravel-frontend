import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'src/app/models/budget';
import { UserService } from 'src/app/services/API/user/user.service';
import { BudgetService } from 'src/app/services/budget/budget.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css'],
})
export class SecureComponent implements OnInit {
  // budget: Budget;

  constructor(
    private http: HttpClient,
    private router: Router,
    // private user_service: UserService,
    // private budget_service: BudgetService
  ) {
    // this.budget = new Budget;
  }

  ngOnInit(): void {
    // this.user_service.getUser();
    // console.log(this.user_service.user);
    // this.budget_service.getData(this.user_service.user.id);

    // this.budget = this.budget_service.budget;
  }
}
