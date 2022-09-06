import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  
  @Input()
  tableColumns:Array<any> =[]

  @Input()
  tableData:any;

  @Input()
  anotherTableColumns:any;

  @Input()
  anotherTableData:any;




displayedColumns: Array<string> = [];
dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }
}