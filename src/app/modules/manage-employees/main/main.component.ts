import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EmployeesService } from 'src/app/core/services/employees.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  
  employeeData: any;
  emp:any;

  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {
    console.log('employess', this.employeeService.getAll())
    this.employeeService.getAll().subscribe((employees)=>{
      this.employeeData = employees;
      console.log('emp', this.employeeData);
    })
  }

  
  tableColumns: Array<any> = [ {
    columnDef: 'id',
    header: 'ID',
    cell: (element: Record<string, any>) => `${element['id']}`,
    sortable: true
  },
  {
    columnDef: 'empId',
    header: 'EmpId',
    cell: (element: Record<string, any>) => `${element['empId']}`,
    isLink: true,
    url: 'abc',
    sortable: true
  },
  {
    columnDef: 'emailId',
    header: 'EmailId',
    cell: (element: Record<string, any>) => `${element['emailId']}`,
    sortable: true
  },
  {
    columnDef: 'firstName',
    header: 'FirstName',
    cell: (element: Record<string, any>) => `${element['firstName']}`,
    sortable: true
  },
  {
    columnDef: 'lastName',
    header: 'LastName',
    cell: (element: Record<string, any>) => `${element['lastName']}`,
    sortable: true
  },
  {
    columnDef: 'designation',
    header: 'Designation',
    cell: (element: Record<string, any>) => `${element['designation']}`,
    sortable: true
  },
  {
    columnDef: 'department',
    header: 'Department',
    cell: (element: Record<string, any>) => `${element['department']}`,
    sortable: true
  },
  {
    columnDef: 'age',
    header: 'Age',
    cell: (element: Record<string, any>) => `${element['age']}`,
    sortable: true
  },
  {
    columnDef: 'gender',
    header: 'Gender',
    cell: (element: Record<string, any>) => `${element['gender']}`,
    sortable: true
  },
  {
    columnDef: 'Actions',
    header: 'Actions',
    cell: (element: Record<string, any>) => `${element['Actions']}`,
    isAction:true,
    sortable: true
  },
];
}
function ViewChild(MatSort: any) {
  throw new Error('Function not implemented.');
}

