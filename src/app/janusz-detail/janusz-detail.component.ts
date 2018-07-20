import { Component, OnInit, Input } from '@angular/core';
import { Janusz } from '../janusz';

@Component({
  selector: 'app-janusz-detail',
  templateUrl: './janusz-detail.component.html',
  styleUrls: ['./janusz-detail.component.css']
})
export class JanuszDetailComponent implements OnInit {
  @Input() janusz: Janusz;

  constructor() { }

  ngOnInit() {
  }

}
