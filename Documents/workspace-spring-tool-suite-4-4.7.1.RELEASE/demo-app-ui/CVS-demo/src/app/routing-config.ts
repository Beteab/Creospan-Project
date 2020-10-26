import {Routes} from '@angular/router';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {component: ListEmployeeComponent, path: 'list'},
  {component: LoginComponent, path: 'login'}
];

export  default  routes;
