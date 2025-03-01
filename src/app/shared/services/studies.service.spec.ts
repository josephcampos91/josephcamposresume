import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudiesService } from './studies.service';

describe('StudiesService', () => {
  let service: StudiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudiesService]
    });
    service = TestBed.inject(StudiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
