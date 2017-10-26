import { TestBed, inject } from '@angular/core/testing';

import { WikisearchService } from './wikisearch.service';

describe('WikisearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikisearchService]
    });
  });

  it('should ...', inject([WikisearchService], (service: WikisearchService) => {
    expect(service).toBeTruthy();
  }));
});
