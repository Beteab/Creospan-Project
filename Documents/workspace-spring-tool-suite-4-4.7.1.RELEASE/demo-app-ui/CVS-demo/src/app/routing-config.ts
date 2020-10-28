import {Routes} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {LoginComponent} from './login/login.component';
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

const routes: Routes = [
  {component: ListEmployeeComponent, path: 'list'},
  {component: LoginComponent, path: 'login'},
  {component: AddEmployeeComponent, path: 'add'},

];

export  default  routes;
