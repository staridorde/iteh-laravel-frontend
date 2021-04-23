import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget/budget.service';
import { UserService } from 'src/app/services/API/user/user.service';
import { Budget } from 'src/app/models/budget';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { BudgetApiService } from 'src/app/services/API/budget/budget-api.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  budget: Budget;
  formActive: boolean = false;
  url: string = '';

  constructor(
    public user_service: UserService,
    private budget_service: BudgetService,
    private budget_api_service: BudgetApiService,
    private router: Router
  ) {
    this.budget = new Budget();
  }

  ngOnInit(): void {
    this.budget = this.budget_service.budget;

    console.log(this.budget);

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.url = event.url;


        this.switchButton();
      }
    });
  }

  switchButton() {
    if(this.url === "/secure/budget") this.formActive = false;
    if(this.url === "/secure/budget/new-item") this.formActive = true;
  }

  deleteItem(data: any) {
    this.budget_service.deleteItem(data).subscribe(
      data => {
        this.budget_api_service.getBudgetItems(this.budget_service.budget.id).subscribe(
          (data:any) => {
            this.budget_service.budget.items = data;
            this.budget_service.calculateTotalAmount();
          }
        );
      }
    )
  }
}
