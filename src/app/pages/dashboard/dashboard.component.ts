import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // first table with different columns

  tableColumns: Array<any> = [ {
    columnDef: 'position',
    header: 'Position',
    cell: (element: Record<string, any>) => `${element['position']}`,
    sortable: true
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: Record<string, any>) => `${element['name']}`,
    isLink: true,
    url: 'abc',
    sortable: true
  },
  {
    columnDef: 'weight',
    header: 'Weight',
    cell: (element: Record<string, any>) => `${element['weight']}`,
    sortable: true
  },
  {
    columnDef: 'symbol',
    header: 'Symbol',
    cell: (element: Record<string, any>) => `${element['symbol']}`,
    sortable: true
  },
  {
    columnDef: 'Actions',
    header: 'Actions',
    cell: (element: Record<string, any>) => `${element['Actions']}`,
    isAction:true,
    sortable:false
  },
];

  
  tableData: Array<any> = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  
  ];

  // another table to test with different number of columns

  anotherTableColumns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: Record<string, any>) => `${element['role']}`
    },
    {
      columnDef: 'skills',
      header: 'Skills',
      cell: (element: Record<string, any>) => `${element['skills']}`
    }
  ];

  anotherTableData = [
    {
      name: 'John',
      role: 'Fullstack Developer',
      skills: 'Angular, Typescript, React'
    },
    { name: 'Mile', role: 'Java Developer', skills: 'Java' },
    { name: 'Peter', role: 'DevOps', skills: 'AWS, GCP' }
  ];

  constructor() { 
    
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit(): void {
  }

}
