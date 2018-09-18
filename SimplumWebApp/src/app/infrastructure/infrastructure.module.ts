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

export { ModalDialogComponent }
export { MessageBoxService }
export { BlinkDirective }
export { PopupService, PopupComponent }
//export { TabComponent, TabsComponent }

@NgModule({
    imports: [BrowserModule],
    declarations: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent,
      TabComponent,
      TabsComponent,
      ToggleComponent
    ],
    providers: [
      MessageBoxService],
    exports: [
      ModalDialogComponent,
      BlinkDirective,
      PopupComponent,
      TabComponent,
      TabsComponent,
      ToggleComponent
    ]
})
export class InfrastructureModule { }
