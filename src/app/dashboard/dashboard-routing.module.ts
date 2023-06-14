import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashLayoutComponent } from './dash-layout/dash-layout.component';
import { TempComponent } from './dash-pages/temp/temp.component';
import { DataComponent } from './dash-pages/data/data.component';
import { ProfileComponent } from './dash-pages/profile/profile.component';

const routes: Routes = [
	{
	  path: '', 
	  component: DashLayoutComponent,
	  children: [
	    { path: 'data', component: DataComponent },
	    { path: 'temp', component:TempComponent },
	    { path: 'profile', component:ProfileComponent},	   ]
	 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
