import { Component, OnInit, Input, Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Router } from '@angular/router';

import { Sow } from '../sow';

import { SowsService, sows } from '../sows.service';

@Directive({
  selector: '[uniqueSowName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SowUniqueNameValidatorDirective, multi: true }]
})
export class SowUniqueNameValidatorDirective implements Validator {

  constructor(private sowsService: SowsService) {
  }
  validate(control: FormControl) {
    let name = control.value;
    const isInUse = sows.some(x => x.name === name);
    return isInUse ? { 'uniqueSowName': { name: name } } : null;
  }

  //validatorFn(c: FormControl) {
  //  return (control: FormControl): { [key: string]: any } | null => {      
  //    let name = control.value;
  //    const isInUse = sows.find(x => x.name === name) != null;
  //    console.log(`isInUse: ${isInUse}`);
  //    return isInUse ? { 'uniqueSowName': { value: name } } : null;
  //  };
  //}
}
