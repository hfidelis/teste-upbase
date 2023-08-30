import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { NavLabelComponent } from './components/nav-label/nav-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomBarComponent,
    NavLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
