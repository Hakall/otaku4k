import {Observable} from 'rxjs/index';
import {JsonServerService} from '../json-server.service';
import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {Artist} from '../../models/artist';

@Injectable({
  providedIn: 'root'
})
export class BandResolver implements Resolve<Artist[]> {
  constructor(private jsonServer: JsonServerService) {}
  resolve(): Observable<Artist[]> {
    return this.jsonServer.getArtists();
  }
}
