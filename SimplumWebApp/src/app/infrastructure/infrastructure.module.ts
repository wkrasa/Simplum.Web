import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageBoxService } from './message-box.service';
import { ModalDialogComponent } from './modal-dialog.component';
import { BlinkDirective } from './blink.directive';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';

export { ModalDialogComponent }
export { MessageBoxService }
export { BlinkDirective }
export { PopupService, PopupComponent }

@NgModule({
    imports: [BrowserModule],
    declarations: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent
    ],
    providers: [
      MessageBoxService],
    exports: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent
    ]
})
export class InfrastructureModule { }
