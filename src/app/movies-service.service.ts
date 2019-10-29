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
  baseUrl = 'https://shielded-cove-67444.herokuapp.com/movies/graph?';

  constructor(private http: HttpClient, private detailsService: CommonServiceService) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getMoviesDetails() {
    const queryParameter = this.getQueryParams();

    const endpoint = this.baseUrl + queryParameter;

    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData)
    );
  }

  private getQueryParams() {
    const firstMovie = this.detailsService.firstMovie;
    const secondMovie = this.detailsService.secondMovie;

    const parameters = {
      movie_1: firstMovie,
      movie_2: secondMovie,
    };

    return Object.keys(parameters).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]);
    }).join('&');
  }
}
