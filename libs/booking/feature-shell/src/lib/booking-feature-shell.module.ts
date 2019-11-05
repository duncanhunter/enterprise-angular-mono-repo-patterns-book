import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingDataAccessModule } from '@nrwl-airlines/booking/data-access';

@NgModule({
  imports: [
    CommonModule,
    BookingDataAccessModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class BookingFeatureShellModule {}
