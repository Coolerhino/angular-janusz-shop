import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Janusz } from './janusz';
import { JANUSZE } from './mock-janusze';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JanuszService {

  constructor(private messageService: MessageService) { }

  getJanusze(): Observable<Janusz[]> {
    this.messageService.add('JanuszService: fetched janusze');
    return of(JANUSZE);
  }

  getJanusz(id: number): Observable<Janusz> {
    this.messageService.add(`JanuszService: fetched janusz id=${id}`);
    return of(JANUSZE.find(janusz => janusz.id === id));
  }
}