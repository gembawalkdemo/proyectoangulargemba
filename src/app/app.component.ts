import { Component } from '@angular/core';

import { Employee} from './models/employee';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: "Nicolas", country: "Colombia"},
    {id: 2, name: "Esteban", country: "Colombia"},
    {id: 3, name: "Natalia", country: "Mexico"}
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }
   
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('Esta seguro de eliminarlo?')){
      this.employeeArray = this.employeeArray.filter(v => v != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    
  }
}
