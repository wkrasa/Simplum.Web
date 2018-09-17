import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <ul class="header">
      <li *ngFor="let tab of tabs"  [class.selected]="isSelected(tab)" (click)="selectTab(tab)" [@selected]="isSelected(tab)">| {{tab.header}}</li>
    </ul>
    <ng-content></ng-content>    
  `,
  styles: [`
    .header{
      height: 30px;
      clear: both;
    }
    .header li{
       float: left;
       list-style-type: none;
    }
    .selected{
      background: gray;     
    }
  `],
  animations: [
    trigger('selected', [
      state('true', style({ background: 'gray' })),
      state('false', style({ background: 'white' })),
      //transition('active=>closed', [animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(30%)' }))]),
      transition('*=>*', animate('300ms ease-in')),
      //transition('*=>*', [style({ opacity: 0, transform: 'translateX(-30%)' }), animate('100ms ease-in')])
    ])
  ]
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];

  ngOnInit(): void {
      
  }

  addTab(tab: TabComponent): void {
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach(x => x.close());
    tab.activate();
  }

  isSelected(tab: TabComponent): boolean {
    return tab.state === 'active';
  }

}
