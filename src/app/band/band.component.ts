import { Component, OnInit } from '@angular/core';
import {Artist} from '../../models/artist';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  artists: Artist[] = [];
  artist: Artist;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { artists: Artist[] }) => {
        this.artists= data.artists;
      });
  }

  setArtist(artist: Artist): void {
    this.artist = artist;
  }
}
