import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../../models/artist';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input() artist: Artist;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    return `url('assets/${this.artist.image|| 'logo.png'}')`;
  }

}
