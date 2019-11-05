import { async, TestBed } from '@angular/core/testing';
import { SharedUiSpinnerModule } from './shared-ui-spinner.module';

describe('SharedUiSpinnerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiSpinnerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiSpinnerModule).toBeDefined();
  });
});
