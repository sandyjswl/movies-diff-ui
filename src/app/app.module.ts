import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { MovieComparisonComponent } from './movie-comparison/movie-comparison.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MoviesServiceService} from './movies-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule, MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import { MovieNotFoundComponent } from './movie-not-found/movie-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectionComponent,
    MovieComparisonComponent,
    MovieNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FlexModule
  ],
  providers: [MoviesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
