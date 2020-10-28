import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppService} from "../app.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeFormGroup = new FormGroup({
    name: new FormControl(""),
    address: new FormControl(""),
    mobile: new FormControl(""),
    email: new FormControl("")
  });

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {

  }

  addEmployee() {
    this.appService.addEmployee(this.employeeFormGroup.value).subscribe(result => {
      this.employeeFormGroup.reset({})
    })
  }
}
