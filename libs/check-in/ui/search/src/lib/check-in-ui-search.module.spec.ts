import { async, TestBed } from '@angular/core/testing';
import { CheckInUiSearchModule } from './check-in-ui-search.module';

describe('CheckInUiSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInUiSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInUiSearchModule).toBeDefined();
  });
});
