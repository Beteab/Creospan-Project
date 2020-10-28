import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListEmployeeComponent} from './list-employee.component';
import Jasmine = jasmine.Jasmine;
import {AppService} from "../app.service";
import {of} from "rxjs";

fdescribe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;
  const data = {
    employee: [
      {
        id: 1,
        name: "Aaron",
        address: "ChicagoIL",
        mobile: "11111111",
        email: "test1@test1.com"
      },
      {
        id: 2,
        name: "Pat",
        address: "ChicagoIL",
        mobile: "22222222",
        email: "test2@test2.com"
      }
    ]
  };
  let appService: jasmine.SpyObj<AppService>;


  beforeEach(async () => {
    appService = jasmine.createSpyObj("appService", ["getEmployees"]);
    appService.getEmployees.and.returnValue(of(data));

    await TestBed.configureTestingModule({
      declarations: [ListEmployeeComponent],
      providers: [
        {Provide: AppService, useValue: appService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(appService.getEmployees).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
