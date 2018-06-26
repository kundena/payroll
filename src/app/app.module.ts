import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { EmployeeComponent } from './homescreen/employee/employee.component';
import { ManagerComponent } from './homescreen/manager/manager.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './homescreen/admin/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeComponent,
    ManagerComponent,
    HomeComponent,
    AdminComponent
    
  ],
  imports: [
    
   
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule, ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
