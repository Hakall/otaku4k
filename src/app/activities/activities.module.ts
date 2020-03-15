import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [ActivitiesComponent, ActivityComponent],
  imports: [
    CommonModule,
  ],
  exports: [ActivitiesComponent],
})
export class ActivitiesModule { }
