import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TempComponent } from './dash-pages/temp/temp.component';
import { DataComponent } from './dash-pages/data/data.component';
import { ProfileComponent } from './dash-pages/profile/profile.component';
import { NotificationComponent } from './dash-pages/notification/notification.component';
import { UserManageComponent } from './dash-pages/user-manage/user-manage.component';


import { AuthGuard } from '../login/auth/auth.guard';

const routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'temp', component:TempComponent },
  { path: 'profile', component:ProfileComponent},
  { path: 'notification', component:NotificationComponent},
  { path: 'users', component:UserManageComponent},
  { path: '', redirectTo: 'temp', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
