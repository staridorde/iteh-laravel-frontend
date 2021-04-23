import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetItem } from 'src/app/models/budget-item';
import { BudgetService } from '../../budget/budget.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetApiService {

  budget_url: string = "http://localhost:8000/budget";
  budget_item_url: string = "http://localhost:8000/budgetItem";



  constructor(private http: HttpClient, 
              private router: Router) {}

  getBudgets() {
    return this.http.get(this.budget_url);
  }

  getBudgetItems(id: number) {
    return this.http.get(`${this.budget_url}/${id}`);
  }

  saveBudgetItem(data: any) {
    return this.http.post(`${this.budget_item_url}`, data);
  }
}
