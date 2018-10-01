import { Component } from '@angular/core';

import { routerTransition } from './router-animations';
import { ModalDialogComponent } from '../infrastructure/infrastructure.module';
import { PopupService, ModalDialogService } from '../infrastructure/infrastructure.module';
import { PageNotFoundComponent } from '../page-not-found.component/pagenotfound.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = { left: false, middle: false, right: false };
  name = 'test';
  title = 'SimplumWebApp';
  dialogVisible: boolean = true;
  btState = 'off';

  constructor(
    private popupService: PopupService,
    private modalDialogService: ModalDialogService) { }

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

  onToggleStateChanged(state: boolean) {
    console.log('toogle state: ' + state);
    this.btState = state ? 'on' : 'off';
  }

  onShowModalViaService() {
    if (this.modalDialogService.isShown()) {
      this.modalDialogService.close();
    }
    else {
      this.modalDialogService.show(PageNotFoundComponent, { inputs: { text: '123123' } });
      this.modalDialogService.getComponentRef<PageNotFoundComponent>();
      this.modalDialogService.getComponentRef<PageNotFoundComponent>().text = '3333333333';
      this.modalDialogService.getComponentRef<PageNotFoundComponent>().clicked.subscribe(() => {
        console.log('works!!!!!!!!!!!');
        this.modalDialogService.close();
      });
    }
  }
}
