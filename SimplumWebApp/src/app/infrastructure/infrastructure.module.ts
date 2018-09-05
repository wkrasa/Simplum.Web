import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageBoxService } from './message-box.service';
import { ModalDialogComponent } from './modal-dialog.component';

export { MessageBoxService}

@NgModule({
    imports: [],
    declarations: [
        ModalDialogComponent
    ],
    providers: [
        MessageBoxService],
    exports: [
        ModalDialogComponent
    ]
})
export class InfrastructureModule { }
