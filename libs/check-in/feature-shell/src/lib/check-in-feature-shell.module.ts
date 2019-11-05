import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CheckInDataAccessModule } from '@nrwl-airlines/check-in/data-access'
import { SharedSeatmapFeatureSeatmapModule } from '@nrwl-airlines/shared/seatmap/feature-seatmap'

@NgModule({
  imports: [
    CommonModule,
    CheckInDataAccessModule,
    SharedSeatmapFeatureSeatmapModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CheckInFeatureShellModule {}
