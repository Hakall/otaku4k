import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Activity} from '../../models/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { activities: Activity[] }) => {
        this.activities = data.activities;
      });
  }

}
