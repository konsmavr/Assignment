import { Component, OnInit,Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private searchTerms = new Subject<string>();
  

  value: string = "clear me";

  constructor() { }


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  }
  createInputField(): void {
     


  }
}

