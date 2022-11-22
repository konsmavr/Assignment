import { Root } from './ingredient-analysis.interface';
import { IngredientsService } from './ingredients.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  i: number = 0;
  listItems: string[] = [];
  inAna!: Observable<Root>;

  constructor(private ingredientsService: IngredientsService) {}

  title = 'Nutrition';

  addI(newI: number) {
    this.i = newI;
    console.log(this.i);
  }
  // the add button and the function
  addText(value: string) {
    this.ingredientsService.onSearchSaveText(value);
    this.listItems = this.ingredientsService.getList();
  }
  //the analyze button and the function
  analyzeIngredients() {
    this.inAna = this.ingredientsService.getIngredientList();
    this.inAna.subscribe((data: Root)=> console.log(data))
   
  }
}
