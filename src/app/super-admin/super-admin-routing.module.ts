import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SALayoutComponent } from './sa-layout/sa-layout.component';
import { UserComponent } from './SA-pages/user/user.component';
import { DeviceComponent } from './SA-pages/device/device.component';
import { CompanyComponent } from './SA-pages/company/company.component';
import { HomeComponent } from './SA-pages/home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
	    { path: 'users', component: UserComponent },
	    { path: 'devices', component:DeviceComponent },
	    { path: 'companies', component:CompanyComponent},
	    { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
