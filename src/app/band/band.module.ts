import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandComponent } from './band.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistModalComponent } from './artist-modal/artist-modal.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [BandComponent, ArtistComponent, ArtistModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ]
})
export class BandModule { }
