import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, fromEvent, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Sow, SowStatus } from './sow';

export let sows: Sow[] = [
  { id: 1, elir: '1111', name: 'sow1', birthDate: new Date('2015-01-11'), sowStatus: SowStatus.Inseminated },
  { id: 2, elir: '2222', birthDate: new Date('2016-01-01'), sowStatus: SowStatus.Pregnant },
  { id: 3, elir: '3333', name: 'sow3', birthDate: new Date('2016-03-01'), sowStatus: SowStatus.Lactating },
  { id: 4, elir: '4444', name: 'sow4', birthDate: new Date('2017-04-22'), sowStatus: SowStatus.Normal }
];

@Injectable()
export class SowsService { 
  sowsUrl: string = '/api/sows';
  constructor(private http: HttpClient) {

  }
  getSows(): Observable<Sow[]> { 
      return this.http.get<Sow[]>(this.sowsUrl);
      // return of(sows);
    }

  getSow(id: number): Observable<Sow | undefined> {
        return of(sows.find(x => x.id === id));
    //this.http.get<Sow[]>(this.sowsUrl);
  }

  addSow(sow: Sow) {
    sow.id = Math.round(Math.random() * 10000);
    sows.push(sow);
  }
}
