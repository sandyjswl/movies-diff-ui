import {Component, OnInit} from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
import {CommonServiceService} from '../common-service.service';

@Component({
  selector: 'app-movie-comparison',
  templateUrl: './movie-comparison.component.html',
  styleUrls: ['./movie-comparison.component.css']
})
export class MovieComparisonComponent implements OnInit {
  moviesData: any;
  movie_1_array;
  movie_2_array;
  private movie_1: string;
  private movie_2: string;

  constructor(private api: MoviesServiceService, private common: CommonServiceService) {
  }

  ngOnInit() {
    this.api
      .getStubbedResponse()
      .subscribe(
        data => {
          this.moviesData = data;
          this.extractData()
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );

  }

  private extractData() {
    console.log("extract")
    this.movie_1 = this.common.movie_1;
    this.movie_2 = this.common.movie_2;
    this.movie_1_array = this.moviesData[this.movie_1];
    this.movie_2_array = this.moviesData[this.movie_2];
    console.log(this.movie_1_array);
    console.log(this.movie_2_array);
  }
}
