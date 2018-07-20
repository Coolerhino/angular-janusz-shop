import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuszDetailComponent } from './janusz-detail.component';

describe('JanuszDetailComponent', () => {
  let component: JanuszDetailComponent;
  let fixture: ComponentFixture<JanuszDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanuszDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanuszDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
