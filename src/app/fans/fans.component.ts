import {Component, OnInit} from '@angular/core';
import {Fan} from '../../models/fan';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss']
})
export class FansComponent implements OnInit {

  fans: Fan[] = [];
  modal: boolean = false;
  sort: { _sort: string, _order: 'asc' | 'desc' } | null = null;
  query: string | null = null;

  totalFans: number = 0;
  _page: number = 1
  _limit: number = 10;

  constructor(private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { fansResolver: { fans: Fan[], totalCount: number } }) => {
        this.fans = data.fansResolver.fans;
        this.totalFans = data.fansResolver.totalCount;
      });
  }

  toggleModal(event: Fan | null) {
    if (event) {
      this.refresh();
    }
    this.modal = !this.modal;
  }

  sortBy(prop: string) {
    if (this.sort === null || this.sort._sort !== prop) {
      this.sort = {_sort: prop, _order: 'asc'};
    } else if (this.sort._order === 'asc') {
      this.sort._order = 'desc';
    } else {
      this.sort = null;
    }
    this.refresh();
  }

  isSort(prop: string): boolean {
    return !(this.sort === null || this.sort._sort !== prop)
  }

  sortIcon(prop: string): string {
    if (this.sort === null || this.sort._sort !== prop ) {
      return 'unfold_more'
    } else if (this.sort._order === 'asc') {
      return 'expand_less'
    } else {
      return 'expand_more'
    }
  }

  filter(query: string) {
    this.query = query;
    this.refresh();
  }

  onPageChange(event: PageEvent) {
    window.console.log(event);
  }

  refresh() {
    this.router.navigate(['/fans'], {
      queryParams: {
        ...this.sort, q: this.query, _page: this._page
      }
    });
  }

  lastPage(): number {
    return Math.ceil(this.totalFans / this._limit);
  }

  nextPage() {
    this._page = this._page + 1;
    this.refresh();
  }

  previousPage() {
    this._page = this._page - 1;
    this.refresh();
  }

}
