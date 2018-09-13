import { Component } from '@angular/core';

import { routerTransition } from './router-animations';
import { ModalDialogComponent } from '../infrastructure/infrastructure.module';
import { PopupService } from '../infrastructure/infrastructure.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = { left: false, middle: false, right: false};
  name = 'test';
  title = 'SimplumWebApp';
  dialogVisible: boolean = true;

  constructor(private popupService: PopupService) { }

  getState(outlet) {
    console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }

  onCloseModal(dialog: ModalDialogComponent): void {
    //this.dialogVisible = false;
    console.dir(dialog);
    dialog.close();
  }

  onModalToggle(dialog: ModalDialogComponent): void {
    //this.dialogVisible = !this.dialogVisible;
    console.dir(dialog);
    dialog.toggle();
  }

  onShowMessagePopup(message: string): void {
    this.popupService.show(message);
  }
}
