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

  constructor(private januszService: JanuszService) { }

  ngOnInit() {
    this.getJanusze();
  }

  getJanusze(): void {
    this.januszService.getJanusze()
      .subscribe(janusze => this.janusze = janusze);
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.januszService.addJanusz({ name } as Janusz)
      .subscribe(janusz => {
        this.janusze.push(janusz);
      });
  }

  delete(janusz: Janusz) : void {
    this.janusze = this.janusze.filter(j => j !== janusz);
    this.januszService.deleteJanusz(janusz).subscribe();
  }
}
