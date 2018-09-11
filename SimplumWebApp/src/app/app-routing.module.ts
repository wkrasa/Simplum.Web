import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component/pagenotfound.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { state: 'dashboard' }  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { state: 'dashboard' } },
  { path: '**', component: PageNotFoundComponent, data: { state: 'notfound' } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
