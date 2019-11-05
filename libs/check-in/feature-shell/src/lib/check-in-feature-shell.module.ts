import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CheckInDataAccessModule } from '@nrwl-airlines/check-in/data-access';
import { SharedSeatmapFeatureSeatmapModule } from '@nrwl-airlines/shared/seatmap/feature-seatmap';
import { SharedUiSpinnerModule } from '@nrwl-airlines/shared/ui/spinner';
import { SharedUiAlertModule } from '@nrwl-airlines/shared/ui/alert';
import { SharedUiButtonModule } from '@nrwl-airlines/shared/ui/button';

@NgModule({
  imports: [
    CommonModule,
    CheckInDataAccessModule,
    SharedSeatmapFeatureSeatmapModule,
    SharedUiSpinnerModule,
    SharedUiAlertModule,
    SharedUiButtonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CheckInFeatureShellModule {}
