import {Observable} from 'rxjs/index';
import {JsonServerService} from '../json-server.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Fan} from '../../models/fan';

@Injectable({
  providedIn: 'root'
})
export class FansResolver implements Resolve<{ fans: Fan[], totalCount: number }> {
  constructor(private jsonServer: JsonServerService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<{ fans: Fan[], totalCount: number }> {
    // on va recup les params dans la suite
    const params = {...route.queryParams};
    if (!params._page) {
      params._page =  1
    }
    if (!params._limit) {
      params._limit =  10
    }
    return this.jsonServer.getFans(params);
  }
}
