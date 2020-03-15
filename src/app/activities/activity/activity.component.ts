import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../models/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

  @Input() activity: Activity;

  constructor() {
  }

  ngOnInit(): void {
  }

  getUrl() {
    return `url('assets/${this.activity.image || 'logo.png'}')`;
  }
}
