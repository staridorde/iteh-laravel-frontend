import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BudgetApiService {

  url: string = "http://localhost:8000/budget";

  constructor(private http: HttpClient, 
              private router: Router) {}

  getBudgets() {
    return this.http.get(this.url);
  }

  getBudgetItems(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
}
