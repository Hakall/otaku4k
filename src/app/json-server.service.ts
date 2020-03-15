import {Injectable} from '@angular/core';
import {Activity} from '../models/activity';
import {Artist} from '../models/artist';
import {Fan} from '../models/fan';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  constructor(private http: HttpClient) {
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>('/api/activites', {});
  }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>('/api/artistes', {});
  }

  getFans(queryParams: any): Observable<{ fans: Fan[], totalCount: number }> {
    return this.http
      .get<Fan[]>('/api/fans', {params: queryParams, observe: 'response'})
      .pipe(map(response => {
        const totalCount = Number(response.headers.get('X-Total-Count'));
        return {
          fans: response.body.map(fan => fan as Fan),
          totalCount
        };
      }));
  }

  addFan(fan: Fan): Observable<any> {
    return this.http.post<any>('/api/fans', fan, {});
  }
}
