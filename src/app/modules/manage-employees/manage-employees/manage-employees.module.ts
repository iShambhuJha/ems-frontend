import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEmployeesRoutingModule } from './manage-employees-routing.module';
import { MainComponent } from '../main/main.component';
import { AddComponent } from '../add/add.component';
import { UpdateComponent } from '../update/update.component';


@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ManageEmployeesRoutingModule
  ]
})
export class ManageEmployeesModule { }
