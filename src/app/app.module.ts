
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { FormsModule } from '@angular/forms';
import { CommerceComponent } from './commerce/commerce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatSliderModule} from '@angular/material'

const appRoutes: Routes = [
  {
    path: 'station-details',
    component: StationDetailComponent,
    data: { title: 'Station Details' }
  },
  {
    path: 'commerces',
    component: CommerceComponent,
    data: { title: 'Commerce List' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StationDetailComponent,
    CommerceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
  ],
  providers: [  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
