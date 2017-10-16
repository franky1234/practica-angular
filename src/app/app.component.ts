import { Component } from '@angular/core';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice Angular';
  statusSearch: boolean;
  constructor() {
    this.statusSearch = false;
  }
  onSearchOption(): void {
    this.statusSearch = !this.statusSearch;
  }
}
