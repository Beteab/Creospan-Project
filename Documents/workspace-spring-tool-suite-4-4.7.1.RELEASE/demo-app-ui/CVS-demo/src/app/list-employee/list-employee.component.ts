import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  public employees: any;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getEmployees().subscribe((result) => {
      this.employees = result;
    });
  }
}
