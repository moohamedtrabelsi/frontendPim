import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpertLayoutComponent } from './expert-layout/expert-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full',
  }, 
  
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },

]},
{
  path: 'expert',
  component: ExpertLayoutComponent,
  children: [
      {
    path: '',
    loadChildren: './expert-layout/expert-layout.modules#ExpertLayoutModule'
},

]},
 
  {path: 'home', component: HomeComponent},
  {path: 'register', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'dashboard', component: DashboardComponent}


  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
