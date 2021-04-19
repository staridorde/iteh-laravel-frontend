import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { BudgetApiService } from '../API/budget/budget-api.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget: Budget;

  constructor(private budget_api_service: BudgetApiService) {
    this.budget = new Budget;
  }


  getData(id: number) {
    this.budget_api_service.getBudgetItems(id).subscribe(
      (data: any) => {

        // console.log(data);
        this.budget.items = data;
      }
    );
  }
}
