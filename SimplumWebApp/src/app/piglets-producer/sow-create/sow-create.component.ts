import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Sow } from '../sow';

import { SowsService } from '../sows.service';
import { PopupService } from '../../infrastructure/popup/popup.service';

/*
- bootstrap
- validation
- custom validation rule
- apply validation to the form (messeges, etc...)
*/
@Component({
  selector: 'sow-create',
  templateUrl: './sow-create.component.html',
  styleUrls: ['./sow-create.component.css']
})
export class SowCreateComponent implements OnInit {
  @Input() sow: Sow = new Sow();

  constructor(private sowsService: SowsService, private router: Router, private popupService: PopupService) {

  }

  ngOnInit() {

  }

  onSave() {
    if (this.validateSow(this.sow) === false) { return; }
    this.sowsService.addSow(this.sow);
    this.popupService.show(`Sow with name '${this.sow.name}' added.`);
    this.router.navigate(['sows']);
  }

  validateSow(sow: Sow): boolean {
    return true;
  }
}
