import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataClientService } from './core/services/data-client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/http.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { NgToastModule } from 'ng-angular-popup';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteSidenavComponent } from './layout/site-sidenav/site-sidenav.component';
import { DynamicTableComponent } from './shared/tables/dynamic-table/dynamic-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogPopupComponent } from './shared/dialog/dialog-popup/dialog-popup.component';
import { ManageEmployeesModule } from './modules/manage-employees/manage-employees/manage-employees.module';
import { MainComponent } from './modules/manage-employees/main/main.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    DashboardComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteSidenavComponent,
    DynamicTableComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgChartsModule,
    NgToastModule,
    MatDialogModule,
    ManageEmployeesModule,
  ],
  providers: [
    DataClientService,  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  
  entryComponents:[DialogPopupComponent],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
