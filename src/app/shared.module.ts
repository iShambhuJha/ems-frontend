import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicTableComponent } from "./shared/tables/dynamic-table/dynamic-table.component";
import { AngularMaterialModule } from "./angular-material.module";


@NgModule({
  declarations: [DynamicTableComponent],
  imports: [CommonModule,AngularMaterialModule],
  exports: [DynamicTableComponent]
})
export class SharedModule {}