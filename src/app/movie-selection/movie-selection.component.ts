import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from '../common-service.service';
import {FormBuilder} from '@angular/forms';
import {MoviesServiceService} from '../movies-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.css']
})
export class MovieSelectionComponent {

  constructor(private common: CommonServiceService, private movieService: MoviesServiceService, private router: Router) {
  }

  movie1 = '';
  movie2 = '';

  submitMovies() {
    this.common.firstMovie = this.movie1;
    this.common.secondMovie = this.movie2;
    this.router.navigate(['compare']);
  }

  areBothMoviesEntered(): boolean {
    return this.movie1 === '' || this.movie2 === '';
  }
}
