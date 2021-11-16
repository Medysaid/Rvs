import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './commons/navigation/navigation.component';
import { AccoutComponent } from './components/pages/accout/accout.component';
//import { ChatsofaccountsComponent } from './components/pages/chatsofaccounts/chatsofaccounts.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'home',
    component:NavigationComponent,
    children:[
      {path: '', redirectTo: 'dash', pathMatch: 'full' },
      { path: 'dash', component: DashboardComponent },
      { path: 'account', component: AccoutComponent },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
