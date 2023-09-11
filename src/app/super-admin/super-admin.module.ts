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
import { MatChipsModule } from '@angular/material/chips'; 
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ContainerComponent } from './sa-layout/container/container.component';
import { SidenavComponent } from './SA-component/sidenav/sidenav.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { EditCompanyComponent } from './SA-pages/company/edit-company/edit-company.component';
import { DeleteCompanyComponent } from './SA-pages/company/delete-company/delete-company.component';
import { AddUsersComponent } from './SA-pages/company/add-users/add-users.component';

import { AddusersComponent } from './SA-pages/user/addusers/addusers.component';
import { AddMultiusersComponent } from './SA-pages/user/add-multiusers/add-multiusers.component';
import { EdituserComponent } from './SA-pages/user/edituser/edituser.component';
import { DeleteuserComponent } from './SA-pages/user/deleteuser/deleteuser.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { UserMobileComponent } from './SA-pages/user/user-mobile/user-mobile.component';
import { UserDesktopComponent } from './SA-pages/user/user-desktop/user-desktop.component';
import { CompanyDesktopComponent } from './SA-pages/company/company-desktop/company-desktop.component';
import { CompanyMobileComponent } from './SA-pages/company/company-mobile/company-mobile.component';

import { ApiUsageComponent } from './SA-pages/api-usage/api-usage.component';
import { NotificationsComponent } from './SA-pages/notifications/notifications.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { AuditLogsComponent } from './SA-pages/audit-logs/audit-logs.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddDeviceComponent } from './SA-pages/device/add-device/add-device.component';
import {MatSelectModule} from '@angular/material/select';
import { AlarmsComponent } from './SA-pages/alarms/alarms.component';
import { ApitrackerComponent } from './SA-pages/apitracker/apitracker.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';













@NgModule({
  declarations: [
    SANavbarComponent,
    SAFooterComponent,
   
    CompanyComponent,
    SALayoutComponent,
    HomeComponent,
    ContainerComponent,
    SidenavComponent,

    EditCompanyComponent,
    DeleteCompanyComponent,
    AddUsersComponent,
  
    AddusersComponent,
    AddMultiusersComponent,
    EdituserComponent,
    DeleteuserComponent,
    UserMobileComponent,
    UserDesktopComponent,
    CompanyDesktopComponent,
    CompanyMobileComponent,

    ApiUsageComponent,
    NotificationsComponent,
    AuditLogsComponent,
    DeviceComponent,
    UserComponent,
    AddDeviceComponent,
    AlarmsComponent,
    ApitrackerComponent,
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
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule ,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class SuperAdminModule { }
