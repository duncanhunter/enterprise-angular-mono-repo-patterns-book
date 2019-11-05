import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedUtilAuthModule } from '@nrwl-airlines/shared/util/auth';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedUtilAuthModule,
    RouterModule.forRoot([
      {
        path: 'check-in',
        loadChildren: () =>
          import('@nrwl-airlines/check-in/feature-shell').then(
            m => m.CheckInFeatureShellModule
          )
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
