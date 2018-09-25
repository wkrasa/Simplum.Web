import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `<h1 (click)="closeMe()">Page not found {{text}}</h1>`,
})
export class PageNotFoundComponent  {
  @Input() text = '404';
  @Output() clicked = new EventEmitter();

  closeMe() {
    console.log('clicked request');
    this.clicked.emit();
  }
}
