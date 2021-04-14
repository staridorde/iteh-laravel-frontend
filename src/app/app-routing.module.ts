import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { PublicComponent } from './components/public/public.component';

const routes: Routes = [
  {
    path: '', 
    component: PublicComponent, 
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent}
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
