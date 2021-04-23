import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { PublicModule } from './components/public/public.module';
import { BudgetComponent } from './components/secure/budget/budget.component';
import { SecureComponent } from './components/secure/secure.component';
import { AddBudgetItemFormComponent } from './components/secure/budget/add-budget-item-form/add-budget-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    BudgetComponent,
    AddBudgetItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
