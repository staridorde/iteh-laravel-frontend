import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetItemFormComponent } from './add-budget-item-form.component';

describe('AddBudgetItemFormComponent', () => {
  let component: AddBudgetItemFormComponent;
  let fixture: ComponentFixture<AddBudgetItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
