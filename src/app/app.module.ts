import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { NavLabelComponent } from './components/nav-label/nav-label.component';
import { ProfessionalCardComponent } from './components/professional-card/professional-card.component';
import { ShiftsComponent } from './pages/shifts/shifts.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomBarComponent,
    NavLabelComponent,
    ProfessionalCardComponent,
    ShiftsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
