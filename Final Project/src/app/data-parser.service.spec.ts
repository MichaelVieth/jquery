import { TestBed, inject } from '@angular/core/testing';

import { DataParserService } from './data-parser.service';

describe('DataParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataParserService]
    });
  });

  it('should ...', inject([DataParserService], (service: DataParserService) => {
    expect(service).toBeTruthy();
  }));
});
