import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget: Budget;

  constructor() {
    this.budget = new Budget;
  }
}
