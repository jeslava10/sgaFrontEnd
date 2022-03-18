import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service'; 

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  @Input() employees:Employees = {firstName: '', 
  lastName: '',
  email: ''}

  constructor(public employeesServiceService: EmployeesServiceService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

   saveEmployees() {
      this.employeesServiceService.create(this.employees).subscribe(data => {
        this.router.navigate(['/employees'])
      })

  }

}
