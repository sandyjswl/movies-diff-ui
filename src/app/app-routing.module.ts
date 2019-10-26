import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieSelectionComponent} from './movie-selection/movie-selection.component';
import {MovieComparisonComponent} from './movie-comparison/movie-comparison.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: MovieSelectionComponent
  },
  {
    path: 'compare',
    component: MovieComparisonComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
