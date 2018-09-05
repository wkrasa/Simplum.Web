import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `<h1>Pege not found {{text}}</h1>`,
})
export class PageNotFoundComponent  { text = '404'; }
