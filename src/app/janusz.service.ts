import { Injectable } from '@angular/core';
import { Janusz } from './janusz';
import { JANUSZE } from './mock-janusze';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JanuszService {

  constructor() { }

  getJanusze(): Observable<Janusz[]> {
    return of(JANUSZE);
  }
}