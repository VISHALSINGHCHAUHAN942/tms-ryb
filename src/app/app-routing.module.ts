/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth/auth.guard';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dash', loadChildren: () => import('./dashboard/dashboard.module' ).then(m => m.DashboardModule), canActivate: [AuthGuard, RoleGuard], data:{roles: ['Standard', 'Admin']} },
  { path: 'sa', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule), canActivate: [AuthGuard, RoleGuard], data:{roles: ['Super Admin']} },
  { path: '**', redirectTo: 'login'}
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth/auth.guard';
import { RoleGuard } from './services/role.guard';

import { LoginLayoutComponent } from './login/login-layout/login-layout.component';
import { DashLayoutComponent } from './dashboard/dash-layout/dash-layout.component';
import { SALayoutComponent } from './super-admin/sa-layout/sa-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    ]
  },
  {
    path: 'dash',
    component: DashLayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Standard', 'Admin'] },
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  },
  {
    path: 'sa',
    component: SALayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Super Admin'] },
    children: [
      { path: '', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
