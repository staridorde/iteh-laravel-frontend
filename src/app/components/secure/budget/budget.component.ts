import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget/budget.service';
import { UserService } from 'src/app/services/API/user/user.service';
import { Budget } from 'src/app/models/budget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  budget: Budget;

  constructor(
    public user_service: UserService,
    private budget_service: BudgetService
  ) {
    this.budget = new Budget;
  }

  ngOnInit(): void {
    this.budget = this.budget_service.budget;
  }
}
