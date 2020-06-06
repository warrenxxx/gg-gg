import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Oauth2Module} from './@innovar/oauth2/oauth2.module';
import {AUTH_BASE_URL, Oauth2Service} from './@innovar/oauth2.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Oauth2Module
  ],
  providers: [
    Oauth2Service,
    {
      provide: AUTH_BASE_URL,
      useValue: 'https://localhost:5001'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
