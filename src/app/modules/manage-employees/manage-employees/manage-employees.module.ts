import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeesRoutingModule } from './manage-employees-routing.module';
import { MainComponent } from '../main/main.component';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ManageEmployeesRoutingModule,
    SharedModule
   
  ],
  exports:[MainComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ManageEmployeesModule { }
