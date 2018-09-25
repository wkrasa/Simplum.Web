import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageBoxService } from './message-box.service';
import { ModalDialogComponent } from './modal-dialog.component';
import { BlinkDirective } from './blink.directive';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipDirective } from './tootlip.directive';
import { ModalDialogService } from './modal-dialog-service/modal-dialog.service';

export { ModalDialogComponent }
export { MessageBoxService }
export { BlinkDirective }
export { PopupService, PopupComponent }
export { ModalDialogService }

@NgModule({
    imports: [BrowserModule],
    declarations: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent,
      TabComponent,
      TabsComponent,
      ToggleComponent,
      TooltipDirective
    ],
    providers: [
      MessageBoxService],
    exports: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent,
      TabComponent,
      TabsComponent,
      ToggleComponent,
      TooltipDirective
    ]
})
export class InfrastructureModule { }
