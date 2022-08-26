import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { MainComponent } from '../main/main.component';
import { UpdateComponent } from '../update/update.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', component: MainComponent}   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEmployeesRoutingModule { }
