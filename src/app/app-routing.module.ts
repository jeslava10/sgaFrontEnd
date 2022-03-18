import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';

import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { ActivitiesDetailsComponent } from './components/activities-details/activities-details.component';
import { AddActivitiesComponent } from './components/add-activities/add-activities.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sga' },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/add-employees', component: AddEmployeesComponent },
  { path: 'employees/edit-employees', component: EmployeesDetailsComponent } , 
  { path: 'activities', component: ActivitiesListComponent },
  { path: 'activities/add-activities', component: AddActivitiesComponent },
  { path: 'activities/edit-activities', component: ActivitiesDetailsComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
