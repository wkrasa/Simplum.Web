import { Component, OnInit, Input } from '@angular/core';

import { Sow } from './sow';

import { SowsService } from './sows.service';

@Component({
  selector: 'sow-edit',
    template: `
                <div *ngIf="sow">
                    <h1>Sow edit</h1>
                    <label>name:
                        <input [(ngModel)]="sow.name" placeholder="name">
                    </label>
                    <label>elir:
                        <input [(ngModel)]="sow.elir" placeholder="elir">
                    </label>
                  {{sow|json}}
                </div>
            `,
})
export class SowEditComponent implements OnInit
{
    @Input() sow: Sow;

    constructor(private sowsService: SowsService) {
    }

    ngOnInit() {
    }
}
