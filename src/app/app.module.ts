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
import {MatCardModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MovieSelectionComponent,
    MovieComparisonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [MoviesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
