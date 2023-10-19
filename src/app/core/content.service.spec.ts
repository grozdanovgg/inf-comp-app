import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
