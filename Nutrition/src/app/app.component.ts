import { IngredientsService } from './ingredients.service';
import { Component } from '@angular/core';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  i: number = 0;
  listItems: string[] = [];


  constructor(private ingredientsService: IngredientsService) {}

  title = 'Nutrition';

  addI(newI: number) {
    this.i = newI;
    console.log(this.i);
  }
  addText(value: string) {
    this.ingredientsService.onSearchSaveText(value);
    this.listItems = this.ingredientsService.getList();
  }
}
