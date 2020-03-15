import {Activity} from '../../models/activity';
import {Observable} from 'rxjs/index';
import {JsonServerService} from '../json-server.service';
import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesResolver implements Resolve<Activity[]> {
  constructor(private jsonServer: JsonServerService) {}
  resolve(): Observable<Activity[]> {
    return this.jsonServer.getActivities();
  }
}
