import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i : number = 0;
  searchTerms:string[] = [];

  
  
  title = 'Nutrition';

  addI(newI: number) {
    this.i = newI;
    console.log(this.i);
  }
  addText(value:string) {
    this.searchTerms.push(value);
    console.log(this.searchTerms);
    

  }
}
