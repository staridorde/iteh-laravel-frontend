import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Budget } from 'src/app/models/budget';
import { BudgetItem } from 'src/app/models/budget-item';
import { BudgetApiService } from 'src/app/services/API/budget/budget-api.service';
import { BudgetService } from 'src/app/services/budget/budget.service';

@Component({
  selector: 'app-add-budget-item-form',
  templateUrl: './add-budget-item-form.component.html',
  styleUrls: ['./add-budget-item-form.component.css'],
})
export class AddBudgetItemFormComponent implements OnInit {
  form: any;
  submitedValue: any;

  constructor(
    private fb: FormBuilder,
    private budget_service: BudgetService,
    private budget_api_service: BudgetApiService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      item_name: '',
      amount: '',
      type: '',
    });

    
  }

  onSubmit() {

    const budget_item = new BudgetItem();

    budget_item.item_name = this.form.value.item_name;
    budget_item.amount = this.form.value.amount;
    budget_item.type = this.form.value.type;

    this.budget_service.saveBudgetItem(budget_item).subscribe(
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
