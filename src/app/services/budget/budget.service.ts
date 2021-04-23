import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { BudgetApiService } from '../API/budget/budget-api.service';
import { UserService } from '../API/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: Budget;

  ready: boolean = false;

  constructor(private budget_api_service: BudgetApiService) {
    this.budget = new Budget();

  }

  getData(id: number) {
    this.budget_api_service.getBudgetItems(id).subscribe((data: any) => {
      // console.log(data);
      this.budget.items = data;
      this.budget.user_id = id;
      this.budget.id = id;

      this.calculateTotalAmount();

      console.log("Added new item");
      console.log(this.budget);

      this.ready = true;
    });
  }

  calculateTotalAmount() {
    this.budget.total_amount = 0;
    this.budget.items.map((budgetItem) => {
      this.budget.total_amount += +budgetItem.amount;

    });
  }

  saveBudgetItem(budget_item: any) {
    budget_item.budget_id = this.budget.id;

    const obs = this.budget_api_service.saveBudgetItem(budget_item); 
    // obs.subscribe(
    //   (data:any) => {
        // this.budget.items.push(data);
        // this.calculateTotalAmount();
    //   }
    // )
    return obs;
  }
}
