import { Component, OnInit } from '@angular/core';

import { Sow } from './sow';
import { SowsService } from './sows.service';

@Component({
  selector: 'sows-list',
    template: `<h1>selected sow: <span *ngIf="selectedSow">{{selectedSow.name || selectedSow.elir}}</span></h1>
                <ul>
                    <li *ngFor="let sow of sows" (click)="onSelectSow(sow)">
                        <span [class.active]="sow===selectedSow">{{sow.name || sow.elir}}</span> <a class="badge badge-secondary" routerLink="/sow-details/{{sow.id}}" >Details</a>
                    </li>
                </ul>
                <sow-edit [sow]="selectedSow"></sow-edit>
            `,
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
