import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JanuszeComponent } from './janusze/janusze.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JanuszDetailComponent } from './janusz-detail/janusz-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: JanuszDetailComponent },
  { path: 'janusze', component: JanuszeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
