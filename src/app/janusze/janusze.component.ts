import { Component, OnInit } from '@angular/core';
import { Janusz } from '../janusz';
import { JanuszService } from '../janusz.service';

@Component({
  selector: 'app-janusze',
  templateUrl: './janusze.component.html',
  styleUrls: ['./janusze.component.css']
})
export class JanuszeComponent implements OnInit {

  janusze: Janusz[];
  selectedJanusz: Janusz;

  constructor(private januszService: JanuszService) { }

  getJanusze(): void {
    this.januszService.getJanusze()
      .subscribe(janusze => this.janusze = janusze);
  }

  onSelect(janusz: Janusz): void{
    this.selectedJanusz = janusz;
  }

  ngOnInit() {
    this.getJanusze();
  }
}
