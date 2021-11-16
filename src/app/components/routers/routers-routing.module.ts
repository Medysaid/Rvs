import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsofaccountsComponent } from '../pages/chatsofaccounts/chatsofaccounts.component';
import { NavigationComponent } from 'src/app/commons/navigation/navigation.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:NavigationComponent},
  {path:'/dash',
  component:DashboardComponent},
  {path:'/chartAccount',
   component:ChatsofaccountsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
