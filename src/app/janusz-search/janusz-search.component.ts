import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { JanuszService } from './../janusz.service';
import { Janusz } from '../janusz';

@Component({
  selector: 'app-janusz-search',
  templateUrl: './janusz-search.component.html',
  styleUrls: ['./janusz-search.component.css']
})
export class JanuszSearchComponent implements OnInit {
  janusze$: Observable<Janusz[]>;
  private searchTerms = new Subject<string>();

  constructor(private januszService: JanuszService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.janusze$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.januszService.searchJanusze(term)),
    );
  }
}
