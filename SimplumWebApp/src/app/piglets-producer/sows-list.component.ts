import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, state, group, animateChild, query, stagger, transition } from '@angular/animations';

import { Sow } from './sow';
import { SowsService } from './sows.service';

@Component({
  selector: 'sows-list',
    template: `<h1>selected sow9: <span *ngIf="selectedSow">{{selectedSow.name || selectedSow.elir}}</span></h1>
                <ul>
                    <li *ngFor="let sow of sows" (click)="onSelectSow(sow)" [@sowState]="">
                        <span [class.active]="sow===selectedSow">{{sow.name || sow.elir}}</span> <a class="badge badge-secondary" routerLink="/sow-details/{{sow.id}}" >Details</a>
                    </li>
                </ul>
                <sow-edit [sow]="selectedSow"></sow-edit>
                 <a  routerLink="/sow-create" routerLinkActive="active">Create new sow</a>
            `,
  animations: [trigger('sowState', [
    state('void', style({
      //transform: 'translateX(-20%)',
    })),
    transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('3100ms ease-in', style({ color: 'red', transform: 'translateX(0)' }))]),
    //transition(':enter', [animate('5200ms ease-in'), style({ transform: 'translateX(0%)' })]),

  ])]
})
export class SowsListComponent implements OnInit
{
    sows: Sow[];
    selectedSow: Sow;

    constructor(private sowsService: SowsService) {
    }

    ngOnInit() {
        this.getSows();
    }

    onSelectSow(sow: Sow) {
        this.selectedSow = sow;
    }

    private getSows(): void {
        this.sowsService.getSows()
            .subscribe(sows => {
                this.sows = sows;
                if (this.sows.length > 0) {
                    this.selectedSow = this.sows[0];
                }
            });
    }
}
