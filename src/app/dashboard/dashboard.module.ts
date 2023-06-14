import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './dash-component/navbar/navbar.component';
import { FooterComponent } from './dash-component/footer/footer.component';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TempComponent } from './dash-pages/temp/temp.component';
import { DataComponent } from './dash-pages/data/data.component';
import { ProfileComponent } from './dash-pages/profile/profile.component';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card'
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashLayoutComponent,
    TempComponent,
    DataComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }
