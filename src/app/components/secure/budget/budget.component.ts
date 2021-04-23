import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget/budget.service';
import { UserService } from 'src/app/services/API/user/user.service';
import { Budget } from 'src/app/models/budget';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

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
    private router: Router
  ) {
    this.budget = new Budget();
  }

  ngOnInit(): void {
    this.budget = this.budget_service.budget;

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
}
