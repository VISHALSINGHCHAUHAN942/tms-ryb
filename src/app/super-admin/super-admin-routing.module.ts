import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SALayoutComponent } from './sa-layout/sa-layout.component';
import { UserComponent } from './SA-pages/user/user.component';
import { DeviceComponent } from './SA-pages/device/device.component';
import { CompanyComponent } from './SA-pages/company/company.component';
import { HomeComponent } from './SA-pages/home/home.component';
import { ApiUsageComponent } from './SA-pages/api-usage/api-usage.component';
import { NotificationsComponent } from './SA-pages/notifications/notifications.component';
import { AuditLogsComponent } from './SA-pages/audit-logs/audit-logs.component';
import { AlarmsComponent } from './SA-pages/alarms/alarms.component';
import { ApitrackerComponent } from './SA-pages/apitracker/apitracker.component';


const routes: Routes = [
	{ path: 'home', component:HomeComponent},
	{ path: 'users', component: UserComponent },
	{ path: 'devices', component:DeviceComponent },
	{ path: 'companies', component:CompanyComponent},
	{ path: 'Api-Usage', component:ApiUsageComponent},
	{ path: 'Api-Tracker', component:ApitrackerComponent},
	 {path:'Notification', component:NotificationsComponent},
	 {path:'Audit-Logs',component:AuditLogsComponent},
	 {path:'Alarms',component:AlarmsComponent},

	{ path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
