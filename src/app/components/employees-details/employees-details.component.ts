import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service'; 

@Component({
  selector: 'app-employees-details',
  templateUrl: './employees-details.component.html',
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  employees:Employees = this.actRoute.snapshot.params['employees'];

  constructor(public EmployeesServiceService: EmployeesServiceService, 
    public actRoute: ActivatedRoute, 
    public router: Router) {
     this.router.getCurrentNavigation()?.extras.state
     }

  ngOnInit(): void {
    this.employees=history.state;
  }

  editEmployees() {
    
    if(window.confirm('¿Esta seguro que decea actualizar el registro?')){
      this.EmployeesServiceService.update(this.employees).subscribe(data => {
        this.router.navigate(['/employees'])
      })
    }
   }

}
