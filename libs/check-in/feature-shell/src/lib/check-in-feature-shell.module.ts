import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CheckInDataAccessModule } from '@nrwl-airlines/check-in/data-access'

@NgModule({
  imports: [
    CommonModule,
    CheckInDataAccessModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CheckInFeatureShellModule {}
