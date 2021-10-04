import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  search: string = '';

  constructor(private router: Router) {}

  onSearch(e: Event) {
    e.preventDefault();
    this.router.navigate(['weather', this.search.trim()]);
  }
}
