import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiSpinnerModule } from '@nrwl-airlines/shared/ui/spinner';
import { SharedUiAlertModule } from '@nrwl-airlines/shared/ui/alert';
import { SharedUiButtonModule } from '@nrwl-airlines/shared/ui/button';
import { SharedDataAccessModule } from '@nrwl-airlines/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    SharedUiSpinnerModule,
    SharedUiAlertModule,
    SharedUiButtonModule
  ]
})
export class BookingDataAccessModule {}
