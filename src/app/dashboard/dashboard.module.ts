import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardAppComponent} from './dashboard-app.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DashboardAppComponent],
  imports: [
    FormsModule,
    DashboardRoutingModule,
    CommonModule
  ]
})
export class DashboardModule {
}
