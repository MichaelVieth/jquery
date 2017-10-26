import { TestBed, inject } from '@angular/core/testing';

import { GliphysearchService } from './gliphysearch.service';

describe('GliphysearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GliphysearchService]
    });
  });

  it('should ...', inject([GliphysearchService], (service: GliphysearchService) => {
    expect(service).toBeTruthy();
  }));
});
