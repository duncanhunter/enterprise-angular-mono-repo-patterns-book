import { async, TestBed } from '@angular/core/testing';
import { CheckInDataAccessModule } from './check-in-data-access.module';

describe('CheckInDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInDataAccessModule).toBeDefined();
  });
});
