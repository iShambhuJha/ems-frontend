import { Component, OnInit,Input,ViewChild , AfterViewInit, AfterContentInit, OnChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator } from '@angular/material/paginator'
import { Router } from '@angular/router';
import {DialogPopupComponent} from 'src/app/shared/dialog/dialog-popup/dialog-popup.component'
import { MatDialog} from '@angular/material/dialog'
import { MatSort } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements  AfterViewInit,OnChanges {

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  @Input()
  tableColumns:Array<any> =[]

  @Input()
  tableData:any;

  @Input()
  anotherTableColumns:any;

  @Input()
  anotherTableData:any;

  @Input()
  isFilterable:any

  @Input() set tableData1(data: any[]) {
    this.tableData(data);
  }

  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


// filter function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


displayedColumns: Array<string> = [];
dataSource: MatTableDataSource<any> = new MatTableDataSource();
selection = new SelectionModel<any>(true, []);

  constructor(public router:Router, private dialog: MatDialog) {}

  ngOnChanges(){
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
    console.log('dynamicTable', this.tableData);
  }

  // check box 

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
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