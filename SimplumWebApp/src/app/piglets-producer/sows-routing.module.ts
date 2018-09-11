import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SowsListComponent } from './sows-list.component';
import { SowDetailsComponent } from './sow-details.component';

const routes: Routes = [
    //{ path: 'crisis-center', component: CrisisListComponent },
  { path: 'sows', component: SowsListComponent, data: { state: 'sows' } },
  { path: 'sow-details/:id', component: SowDetailsComponent, data: { state: 'sow-details' } }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})
export class SowsRoutingModule { }
