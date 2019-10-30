import { Injectable } from '@angular/core';
import { Janusz } from './janusz';
import { JANUSZE } from './mock-janusze';
import { Observable, of } from 'rxjs';
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
}