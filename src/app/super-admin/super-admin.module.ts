import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SANavbarComponent } from './SA-component/sa-navbar/sa-navbar.component';
import { SAFooterComponent } from './SA-component/sa-footer/sa-footer.component';
import { SALayoutComponent } from './sa-layout/sa-layout.component';
import { UserComponent } from './SA-pages/user/user.component';
import { DeviceComponent } from './SA-pages/device/device.component';
import { CompanyComponent } from './SA-pages/company/company.component';
import { HomeComponent } from './SA-pages/home/home.component';

import { SuperAdminRoutingModule } from './super-admin-routing.module';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    SANavbarComponent,
    SAFooterComponent,
    UserComponent,
    DeviceComponent,
    CompanyComponent,
    SALayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SuperAdminModule { }
