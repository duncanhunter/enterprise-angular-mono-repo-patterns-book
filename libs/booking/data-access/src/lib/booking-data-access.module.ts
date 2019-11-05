import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedDataAccessModule } from '@nrwl-airlines/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule]
})
export class BookingDataAccessModule {}
