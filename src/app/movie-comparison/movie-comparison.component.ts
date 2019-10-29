import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
import {CommonServiceService} from '../common-service.service';
import {MatButtonToggleChange} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-comparison',
  templateUrl: './movie-comparison.component.html',
  styleUrls: ['./movie-comparison.component.css']
})
export class MovieComparisonComponent implements OnInit {
  moviesDataResponse: any;
  firstMovieDataArray;
  secondMovieDataArray;
  firstMovie: string;
  secondMovie: string;
  displayedColumns: string[] = ['Day', 'Date', 'Daily Gross'];
  isEnabled = true;
  graphLink: string;
  isLoading = true;
  errorOccured = false;

  constructor(private api: MoviesServiceService, private common: CommonServiceService, private router: Router) {
  }

  ngOnInit() {
    this.api
      .getMoviesDetails()
      .subscribe(
        data => {
          this.moviesDataResponse = data;
          this.extractData();
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
          this.errorOccured = true;
          this.navigateToNotFound();
        }
      );
  }

  private extractData() {
    this.firstMovie = this.common.firstMovie;
    this.secondMovie = this.common.secondMovie;
    this.firstMovieDataArray = this.moviesDataResponse[this.firstMovie];
    this.secondMovieDataArray = this.moviesDataResponse[this.secondMovie];
    this.graphLink = this.moviesDataResponse['Link'];
  }

  toggleView(change: MatButtonToggleChange) {
    this.isEnabled = change.value;
  }

  private navigateToNotFound() {
    // console.log("routing")
    this.router.navigate(['notFound']);
  }
}
