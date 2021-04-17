import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './componenets/secure/budget/budget.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { RegisterComponent } from './components/public/register/register.component';
import { SecureComponent } from './components/secure/secure.component';

const routes: Routes = [
  {
    path: '', 
    component: PublicComponent, 
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    
    ]
  },
  {
    path: 'secure',
    component: SecureComponent,
    children: [
      {path: 'budget', component: BudgetComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
