import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
import {CommonServiceService} from '../common-service.service';
import {MatButtonToggleChange} from '@angular/material';

@Component({
  selector: 'app-movie-comparison',
  templateUrl: './movie-comparison.component.html',
  styleUrls: ['./movie-comparison.component.css']
})
export class MovieComparisonComponent implements OnInit, OnChanges {
  moviesData: any;
  movie_1_array;
  movie_2_array;
  private movie_1: string;
  private movie_2: string;
  displayedColumns: string[] = ['Day', 'Date', 'Daily Gross',];
  isEnabled: boolean = true;
  link = 'https://i.imgur.com/FS2zB4l.png';
  isLoading: boolean = true;

  constructor(private api: MoviesServiceService, private common: CommonServiceService) {
  }

  ngOnInit() {
    this.api
      .getStubbedResponse()
      .subscribe(
        data => {
          this.moviesData = data;
          this.extractData();
          console.log(data);
          this.isLoading = false;
        },
        err => {
          console.log(err);
        }
      );

  }

  private extractData() {
    console.log('extract');
    this.movie_1 = this.common.movie_1;
    this.movie_2 = this.common.movie_2;
    this.movie_1_array = this.moviesData[this.movie_1];
    this.movie_2_array = this.moviesData[this.movie_2];
    console.log(this.movie_1_array);
    console.log(this.movie_2_array);
  }

  toggleView(change: MatButtonToggleChange) {
    this.isEnabled = change.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isEnabled);
  }
}
