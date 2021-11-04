import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgtreegridModule } from 'ngtreegrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main/main-component/main-component.component';

@NgModule({
  declarations: [AppComponent, MainComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgtreegridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
