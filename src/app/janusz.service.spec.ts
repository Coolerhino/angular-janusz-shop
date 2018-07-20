import { TestBed, inject } from '@angular/core/testing';

import { JanuszService } from './janusz.service';

describe('JanuszService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JanuszService]
    });
  });

  it('should be created', inject([JanuszService], (service: JanuszService) => {
    expect(service).toBeTruthy();
  }));
});
