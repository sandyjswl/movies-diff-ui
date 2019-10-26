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
export class MovieSelectionComponent implements OnInit {

  constructor(private common: CommonServiceService, private fb: FormBuilder, private movieService: MoviesServiceService, private router: Router) {
  }

  movieForm: any;
  movie1: string;
  movie2: string;

  ngOnInit() {
    this.movieForm = this.fb.group({});
  }


  submitName() {
    this.common.movie_1 = this.movie1;
    this.common.movie_2 = this.movie2;
    // this.movieService.getMoviesDetails();
    this.router.navigate(['compare']);
  }

  onKey(value: string) {
  }
}
