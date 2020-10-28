import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  EMP_URL: string = "http://localhost:3000/employee";

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.EMP_URL);
  }

  addEmployee(value: any) {
    return this.http.post(this.EMP_URL,value);
  }
}
