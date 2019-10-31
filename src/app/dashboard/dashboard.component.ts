import { Component, OnInit } from '@angular/core';
import { Janusz } from '../janusz';
import { JanuszService } from '../janusz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  janusze: Janusz[] = [];

  constructor(private januszService: JanuszService) { }

  ngOnInit() {
    this.getJanusze();
  }

  getJanusze(): void{
    this.januszService.getJanusze()
      .subscribe(janusze => this.janusze = janusze.slice(1,5));
  }
}
