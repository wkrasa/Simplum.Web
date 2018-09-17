import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'tab',
  template: `
    <div class="tab" [hidden]="state=='closed'" [@state]="state">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab{
      width: 200px;
      height: 100px;
      border: solid 1px gray;
    }
  `],
  animations: [
    trigger('state', [
      state('active', style({ transform: 'translateX(0)', opacity: 1 })),
      state('closed', style({ transform: 'translateX(30%)', opacity: 0 })),
      transition('closed=>active',  animate('300ms ease-in')),
    ])
  ],
})
export class TabComponent implements OnInit {
  @Input()
  state: 'active' | 'closed' = 'closed';

  @Input()
  header: string = 'tab';

  constructor(private tabs: TabsComponent) {
    this.tabs.addTab(this);
  }

  ngOnInit(): void {
    console.log('state: ' + this.state);
    
  }

  activate() {
    this.state = 'active';
  }

  close() {
    this.state = 'closed';
  }
}
