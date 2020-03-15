import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ActivitiesModule} from '../activities/activities.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ActivitiesModule
  ]
})
export class HomeModule { }
