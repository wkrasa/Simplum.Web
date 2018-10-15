import { Component, OnInit, Input, Directive, Injectable } from '@angular/core';
import { Validator, FormControl, NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, fromEvent, of } from 'rxjs';
import { catchError, map, debounce, debounceTime, filter, distinctUntilChanged, delay, switchMap } from 'rxjs/operators';

import { Sow } from '../sow';

import { SowsService } from '../sows.service';
// import { setTimeout } from 'timers';

@Directive({
  selector: '[uniqueSowElir]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: SowUniqueElirValidatorDirective, multi: true }]
})
export class SowUniqueElirValidatorDirective implements AsyncValidator {

  constructor(private sowsService: SowsService) {
    //const myObserver = {
    //  next: x => console.log('Observer got a next value: ' + x),
    //  error: err => console.error('Observer got an error: ' + err),
    //  complete: () => console.log('Observer got a complete notification'),
    //};

    //var timer1Sec = new Observable(observer => {
    //  var counter = 0;
    //  var timeoutId = setInterval(() => {
    //    observer.next(++counter);
    //  }, 100);
    //  return {
    //    unsubscribe() {
    //      clearTimeout(timeoutId);
    //    }
    //  };
    //});
    //var destroy = timer1Sec.pipe(
    //  filter(x => x % 2),
    //  delay(900),
    //  switchMap(x => of(11))
    //).subscribe(myObserver);
    ////destroy.unsubscribe();
    //setTimeout(() => destroy.unsubscribe(), 4000);
  }

  validate( control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.sowsService.getSows().pipe(      
      // filter(x => control.value && control.value.length > 5),
      distinctUntilChanged(),
      debounceTime(5000),
      map(sows => { 
        const elir = control.value;
        console.log(`====${elir}====`);
        const isInUse = sows.some(x => x.elir === elir);
        return isInUse ? { uniqueSowElir: { elir: elir }} : null;
      })
    );
  }
}
