import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuszeComponent } from './janusze.component';

describe('JanuszeComponent', () => {
  let component: JanuszeComponent;
  let fixture: ComponentFixture<JanuszeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanuszeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanuszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
