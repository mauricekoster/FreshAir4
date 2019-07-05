import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardAppComponent} from './dashboard-app.component';

const routes: Routes = [
  {path: '', component: DashboardAppComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
