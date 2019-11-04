import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuszSearchComponent } from './janusz-search.component';

describe('JanuszSearchComponent', () => {
  let component: JanuszSearchComponent;
  let fixture: ComponentFixture<JanuszSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanuszSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanuszSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
