import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sow } from './sow';

import { SowsService } from './sows.service';

@Component({
  selector: 'sow-details',
    template: `
        <button (click)="goBack()">go back</button>
        <div *ngIf="sow">              
            <h1>Sow details</h1>
            <label> name: <span>{{sow.name}}</span></label>
            <label>elir: <span>{{sow.elir}}</span></label>
        </div>
            `,
})
export class SowDetailsComponent implements OnInit
{
    sow: Sow;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private sowsService: SowsService) {
    }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.sowsService.getSow(id)
            .subscribe(sow => this.sow = sow);
    }

    goBack(): void {
        this.location.back();
    }
}
