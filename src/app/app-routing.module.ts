import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BandComponent} from './band/band.component';
import {FansComponent} from './fans/fans.component';
import {ActivitiesResolver} from './activities/activities-resolver';
import {FansResolver} from './fans/fans-resolver';
import {BandResolver} from './band/band-resolver';


const routes: Routes = [
  {
    path: 'band', component: BandComponent,
    resolve: {
      artists: BandResolver
    },
  },
  {
    path: 'fans', component: FansComponent,
    resolve: {
      fansResolver: FansResolver
    },
    runGuardsAndResolvers: 'always',
  },
  {
    path: '**', redirectTo: 'home',
  },
  {
    path: 'home', component: HomeComponent,
    resolve: {
      activities: ActivitiesResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
