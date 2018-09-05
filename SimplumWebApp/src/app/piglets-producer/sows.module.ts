import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SowsRoutingModule } from './sows-routing.module';
import { SowsService } from './sows.service';
import { SowsListComponent } from './sows-list.component';
import { SowEditComponent } from './sow-edit.component';
import { SowDetailsComponent } from './sow-details.component';

@NgModule({
    imports: [
        BrowserModule,
        SowsRoutingModule,
        FormsModule],
    declarations: [
        SowsListComponent,
        SowEditComponent,
        SowDetailsComponent],
    providers: [
        SowsService]
})
export class SowsModule { }
