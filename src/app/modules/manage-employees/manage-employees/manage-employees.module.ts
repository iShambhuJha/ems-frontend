import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeesRoutingModule } from './manage-employees-routing.module';
import { MainComponent } from '../main/main.component';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';
import { DynamicTableComponent } from 'src/app/shared/tables/dynamic-table/dynamic-table.component';



@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ManageEmployeesRoutingModule,
   
  ],
  exports:[MainComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ManageEmployeesModule { }
