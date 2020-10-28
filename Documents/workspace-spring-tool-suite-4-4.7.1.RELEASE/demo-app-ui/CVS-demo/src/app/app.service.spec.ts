import {TestBed} from '@angular/core/testing';

import {AppService} from './app.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('AppService', () => {
  let service: AppService;
  let HttpMock: HttpTestingController;
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });
    service = TestBed.inject(AppService);
    HttpMock = TestBed.inject(HttpTestingController);
  });

  it('get employee list should call getEmployees', () => {
    service.getEmployees().subscribe(result => {
      expect(result).toEqual(data);
    });
    const request = HttpMock.expectOne(service.EMP_URL);
    expect(request.request.method).toEqual("GET");
    request.flush(data);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
