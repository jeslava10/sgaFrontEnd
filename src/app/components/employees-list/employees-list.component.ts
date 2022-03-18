import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employees.model';
import { EmployeesServiceService } from 'src/app/services/employees-service.service'; 

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  listEmployeess: Employees[] = [];
  constructor(private EmployeesServiceService: EmployeesServiceService, public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.EmployeesServiceService.getAll().subscribe(data => {
      this.listEmployeess = data
    });
  }

  deleteEmployees(data: Employees) {
    this.EmployeesServiceService.delete(data).subscribe(data => {
    });
    this.ngOnInit();
  }
  
}


