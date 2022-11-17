import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() newSearchTermEvent = new EventEmitter<string>();

  searchTerm: string = '';

  constructor() {}

  ngOnInit(): void {}

  sendText() {
    if (this.searchTerm !== '') {
      this.newSearchTermEvent.emit(this.searchTerm);
      this.searchTerm = '';
    }
  }
}
