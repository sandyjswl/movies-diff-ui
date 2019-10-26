import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonServiceService} from './common-service.service';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'c31z'})
};

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  constructor(private http: HttpClient, private detailsService: CommonServiceService) {
  }

  const;

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getMoviesDetails() {
    console.log('called');
    let movie_1_name = this.detailsService.movie_1;
    let movie_2_name = this.detailsService.movie_2;
    const base_url = 'https://shielded-cove-67444.herokuapp.com/movies/graph?';
    var params = {
      movie_1: movie_1_name,
      movie_2: movie_2_name,
    };

    let queryString = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    console.log(base_url + queryString);

    const endpoint = base_url + queryString;

    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData)
    );
  }

  getStubbedResponse() {
    console.log('called');

    const endpoint = 'https://shielded-cove-67444.herokuapp.com/movies/stub'

    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData)
    );
  }
}
