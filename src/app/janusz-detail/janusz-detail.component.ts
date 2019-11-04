import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JanuszService }  from '../janusz.service';
import { Janusz } from '../janusz';

@Component({
  selector: 'app-janusz-detail',
  templateUrl: './janusz-detail.component.html',
  styleUrls: ['./janusz-detail.component.css']
})
export class JanuszDetailComponent implements OnInit {
  @Input() janusz: Janusz;

  constructor(
    private route: ActivatedRoute,
    private januszService: JanuszService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getJanusz();
  }

  getJanusz(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.januszService.getJanusz(id)
      .subscribe(janusz => this.janusz = janusz);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.januszService.updateJanusz(this.janusz)
      .subscribe(() => this.goBack());
  }
}
