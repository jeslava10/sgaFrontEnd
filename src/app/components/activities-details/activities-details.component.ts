import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from 'src/app/models/activities.model';
import {ActivitiesService } from 'src/app/services/activities.service';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';  
import { Employees } from 'src/app/models/employees.model';
import { StatusActivity } from 'src/app/models/statusActivity.model'; 


@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.css']
})
export class ActivitiesDetailsComponent implements OnInit {

  activities:Activities = this.actRoute.snapshot.params['activities'];

  listEmployees: Employees[] = [];
  listStatusActivity: StatusActivity[] = [];
  dateString = "";
  idSeleccionado? = 0;

  constructor(public EmployeesServiceService: EmployeesServiceService, 
    public activitiesService: ActivitiesService,
    public actRoute: ActivatedRoute, 
    public router: Router) {
     this.router.getCurrentNavigation()?.extras.state
     this.listStatusActivity.push(new StatusActivity(0,"Pendiente"));
     this.listStatusActivity.push(new StatusActivity(1,"Termiando"));
     }

  ngOnInit(): void {
    this.activities=history.state;
    this.idSeleccionado = Number(this.activities.employeeId?.id);
    this.dateString = "2021-12-03";
    this.getEmployees();
  }

  getEmployees() {
    this.EmployeesServiceService.getAll().subscribe(data => {
      this.listEmployees = data
    });
  }

  getStatus() {
    this.listStatusActivity;
  }

  editActivities() {
    if(window.confirm('¿Esta seguro que decea actualizar el registro?')){
      this.EmployeesServiceService.update(this.activities).subscribe(data => {
        this.router.navigate(['activities'])
      })
    }
   }

}
