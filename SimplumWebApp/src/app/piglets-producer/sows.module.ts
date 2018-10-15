import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { SowsRoutingModule } from './sows-routing.module';
import { SowsService } from './sows.service';
import { SowsListComponent } from './sows-list.component';
import { SowEditComponent } from './sow-edit.component';
import { SowDetailsComponent } from './sow-details.component';
import { SowCreateComponent } from './sow-create/sow-create.component';
import { SowUniqueNameValidatorDirective } from './sow-create/sow-unique-name.direcive';
import { SowUniqueElirValidatorDirective } from './sow-create/sow-unique-elir.directive';
import { InfrastructureModule} from '../infrastructure/infrastructure.module';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SowsRoutingModule,
      FormsModule,
      InfrastructureModule,
      NgbModule],
    declarations: [
      SowsListComponent,
      SowEditComponent,
      SowDetailsComponent,
      SowCreateComponent,
      SowUniqueNameValidatorDirective,
      SowUniqueElirValidatorDirective,
      SowUniqueElirValidatorDirective],
    providers: [
      SowsService]
})
export class SowsModule { }
