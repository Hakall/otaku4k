import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from '../../../models/artist';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent implements OnInit {
  @Input() artist: Artist;

  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit();
  }

}
