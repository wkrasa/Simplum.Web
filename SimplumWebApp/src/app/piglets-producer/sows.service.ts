import { Injectable } from '@angular/core';

import { Observable, fromEvent, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Sow, SowStatus } from './sow';

export let sows: Sow[] = [
  { id: 1, elir: '1111', name: 'sow1', birtDate: new Date('2015-01-11'), SowStatus: SowStatus.Inseminated },
  { id: 2, elir: '2222', birtDate: new Date('2016-01-01'), SowStatus: SowStatus.Pregnant },
  { id: 3, elir: '3333', name: 'sow3', birtDate: new Date('2016-03-01'), SowStatus: SowStatus.Lactating },
  { id: 4, elir: '4444', name: 'sow4', birtDate: new Date('2017-04-22'), SowStatus: SowStatus.Normal }
];

@Injectable()
export class SowsService {
    getSows(): Observable<Sow[]> {
      return of(sows);
    }

  getSow(id: number): Observable<Sow | undefined> {
        return of(sows.find(x => x.id === id));
  }

  addSow(sow: Sow) {
    sow.id = Math.round(Math.random() * 10000);
    sows.push(sow);
  }
}
