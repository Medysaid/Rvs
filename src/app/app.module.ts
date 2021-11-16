import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { DarshboardComponent } from './component/commonComponet/pages/darshboard/darshboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavigationComponent } from './commons/navigation/navigation.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog'; 
import { AccoutComponent } from './components/pages/accout/accout.component';
import { TableComponent } from './components/pages/accout/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AccountDialogComponent } from './components/pages/accout/account-dialog/account-dialog.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './components/pages/accout/form/form.component';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    AccoutComponent,
    TableComponent,
    AccountDialogComponent,
    FormComponent,
    
   
  
    

    //AdminLayoutComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatDatepickerModule,MatNativeDateModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
