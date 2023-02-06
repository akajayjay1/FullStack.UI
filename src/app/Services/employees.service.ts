import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseAPIUrl: string = "https://localhost:7209";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseAPIUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest:  Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseAPIUrl + '/api/employees', addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseAPIUrl + '/api/employees/edit/' + id)
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseAPIUrl + '/api/employees/edit/' + id, updateEmployeeRequest)
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseAPIUrl + '/api/employees/edit/' + id)
  }
}
