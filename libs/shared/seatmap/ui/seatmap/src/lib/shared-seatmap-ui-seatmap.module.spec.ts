import { async, TestBed } from '@angular/core/testing';
import { SharedSeatmapUiSeatmapModule } from './shared-seatmap-ui-seatmap.module';

describe('SharedSeatmapUiSeatmapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSeatmapUiSeatmapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSeatmapUiSeatmapModule).toBeDefined();
  });
});
