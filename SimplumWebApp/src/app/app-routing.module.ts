import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component/pagenotfound.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }