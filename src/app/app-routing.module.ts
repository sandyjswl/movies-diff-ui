import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieSelectionComponent} from './movie-selection/movie-selection.component';
import {MovieComparisonComponent} from './movie-comparison/movie-comparison.component';
import {RouterModule, Routes} from '@angular/router';
import {MovieNotFoundComponent} from './movie-not-found/movie-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MovieSelectionComponent
  },
  {
    path: 'compare',
    component: MovieComparisonComponent
  },
  {
    path: 'notFound',
    component: MovieNotFoundComponent
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
export class AppRoutingModule {
}
