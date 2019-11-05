import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedUtilAuthModule } from '@nrwl-airlines/shared/util/auth';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUtilAuthModule,
    RouterModule.forRoot([
      {
        path: 'check-in',
        loadChildren: () =>
          import('@nrwl-airlines/booking/feature-shell').then(
            m => m.BookingFeatureShellModule
          )
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
