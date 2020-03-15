import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Fan} from '../../../models/fan';
import {JsonServerService} from '../../json-server.service';
import {catchError} from 'rxjs/internal/operators';
import {throwError} from 'rxjs/index';

@Component({
  selector: 'app-fan-modal',
  templateUrl: './fan-modal.component.html',
  styleUrls: ['./fan-modal.component.scss']
})
export class FanModalComponent implements OnInit {

  fan: Fan;
  @Output() close = new EventEmitter<Fan | null>();

  constructor(private jsonServer: JsonServerService) {
  }

  ngOnInit(): void {
    this.fan = new Fan();
  }

  closeModal(fan: Fan | null) {
    this.close.emit(fan);
  }

  addFan() {
    this.jsonServer.addFan(this.fan).pipe(
      catchError((e) => {
        return throwError(
          'Something bad happened; please try again later.');
      })
    ).subscribe(data => {
      this.closeModal(data);
    })
  }

}
