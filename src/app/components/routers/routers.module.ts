import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutersRoutingModule } from './routers-routing.module';
import { NavigationComponent } from 'src/app/commons/navigation/navigation.component';
import { ChatsofaccountsComponent } from '../pages/chatsofaccounts/chatsofaccounts.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    NavigationComponent,
    ChatsofaccountsComponent,
    DashboardComponent
  ]
  ,
  imports: [
    CommonModule,
    RoutersRoutingModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class RoutersModule { }
