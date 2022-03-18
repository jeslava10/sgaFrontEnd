import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activities } from 'src/app/models/activities.model';
import {ActivitiesService } from 'src/app/services/activities.service';
import { EmployeesServiceService } from 'src/app/services/employees-service.service';  
import { Employees } from 'src/app/models/employees.model';
import { StatusActivity } from 'src/app/models/statusActivity.model'; 

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.css']
})
export class AddActivitiesComponent implements OnInit {
  
  listEmployees: Employees[] = [];
  listStatusActivity: StatusActivity[] = [];
  dateString = "";
  idSeleccionado = 0;
  
  @Input() activities:Activities = {
  description: '', 
  executionDate: new Date("2021-03-01"),
  employeeId:new Employees(),
  executionHour:0,
  statusActivity:0,
  lateDay:0
}

  constructor(public EmployeesServiceService: EmployeesServiceService,public activitiesService: ActivitiesService, public actRoute: ActivatedRoute, public router: Router) { 
    this.listStatusActivity.push(new StatusActivity(0,"Pendiente"));
    this.listStatusActivity.push(new StatusActivity(1,"Termiando"));
  }

  ngOnInit(): void {
  }

  getEmployees() {
    this.EmployeesServiceService.getAll().subscribe(data => {
      this.listEmployees = data
    });
  }

  getStatus() {
    this.listStatusActivity;
  }
  
  saveActivities() {
    this.activities.executionDate = new Date(this.dateString);
    this.activities.employeeId = {id:this.idSeleccionado,firstName:"",lastName:"",email:""};
    this.activitiesService.findByName(this.activities).subscribe(data => {
      console.log(data);
      if(data == false){
      this.activitiesService.create(this.activities).subscribe(data => {
        console.log(data);
        this.router.navigate(['/activities'])
      })
    }else{
      window.alert('Registro ya existe');
    }
    })
  }
}
