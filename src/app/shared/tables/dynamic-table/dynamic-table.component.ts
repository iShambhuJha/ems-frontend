import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {DialogPopupComponent} from 'src/app/shared/dialog/dialog-popup/dialog-popup.component'
import { MatDialog} from '@angular/material/dialog'
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;
  
  @Input()
  tableColumns:Array<any> =[]

  @Input()
  tableData:any;

  @Input()
  anotherTableColumns:any;

  @Input()
  anotherTableData:any;

  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }



displayedColumns: Array<string> = [];
dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(public router:Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log('dynamicTable', this.tableData);
  }

  editEmpPage(){
    // apply routing to update page
    this.router.navigate(['employees/update']);
  }

  deleteEmp(){
    let dialogDelEmp = this.dialog.open(DialogPopupComponent,{
      height:'200px',
      width: '500px'
    });
    dialogDelEmp.afterClosed().subscribe((result)=>{

    })
  }
 

}