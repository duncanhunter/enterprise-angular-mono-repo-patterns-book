import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedSeatmapDataAccessModule } from '@nrwl-airlines/shared/seatmap/data-access';
import { SharedSeatmapUiSeatmapModule } from '@nrwl-airlines/shared/seatmap/ui/seatmap';

@NgModule({
  imports: [
    CommonModule,
    SharedSeatmapDataAccessModule,
    SharedSeatmapUiSeatmapModule
  ]
})
export class SharedSeatmapFeatureSeatmapModule {}
