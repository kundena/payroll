import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './homescreen/employee/employee.component';
import { ManagerComponent } from './homescreen/manager/manager.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './homescreen/admin/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
},
   { path: 'admin/admin',
    component: AdminComponent

   },
  
  {
    path: 'employee',
    component: EmployeeComponent
},
{
  path: 'manager',
  component: ManagerComponent
},
];






@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
