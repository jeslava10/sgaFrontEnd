import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddActivitiesComponent } from './components/add-activities/add-activities.component';
import { ActivitiesDetailsComponent } from './components/activities-details/activities-details.component';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeesComponent,
    EmployeesDetailsComponent,
    EmployeesListComponent,
    AddActivitiesComponent,
    ActivitiesDetailsComponent,
    ActivitiesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
