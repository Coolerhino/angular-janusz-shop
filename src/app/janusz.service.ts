import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Janusz } from './janusz';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JanuszService {

  // TODO this need to be more configurable
  private mockApiId = '';
  private januszeUrl = `https://${this.mockApiId}.mockapi.io/janusze`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getJanusze(): Observable<Janusz[]> {
    return this.http.get<Janusz[]>(this.januszeUrl)
      .pipe(
        tap(_ => this.log('fetched janusze')),
        catchError(this.handleError<Janusz[]>('getJanusze', []))
      );
  }

  getJanusz(id: number): Observable<Janusz> {
    const url = `${this.januszeUrl}/${id}`;
    return this.http.get<Janusz>(url)
      .pipe(
        tap(_ => this.log(`fetched janusz id=${id}`)),
        catchError(this.handleError<Janusz>('getJanusze'))
      );
  }

  updateJanusz(janusz: Janusz): Observable<Janusz> {
    const url = `${this.januszeUrl}/${janusz.id}`;
    return this.http.put(url, janusz, this.httpOptions).pipe(
      tap(_ => this.log(`updated janusz id=${janusz.id}`)),
      catchError(this.handleError<any>(`updateJanusz`))
    );
  }

  addJanusz(janusz: Janusz): Observable<Janusz> {
    return this.http.post(this.januszeUrl, janusz, this.httpOptions).pipe(
      tap((newJanusz: Janusz) => this.log(`added janusz id=${newJanusz.id}`)),
      catchError(this.handleError<Janusz>(`addJanusz`))
    )
  }

  private log(message: string) {
    this.messageService.add(`JanuszService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed:${error.message}`);

      return of(result as T);
    };
  }
}