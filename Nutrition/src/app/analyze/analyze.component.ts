import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'the title';
     click() {
         this.title += "button was clicked";
     }

}
