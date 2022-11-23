import { Root } from './ingredient-analysis.interface';
import { IngredientsService } from './ingredients.service';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  i: number = 0;
  listItems: string[] = [];
  analyzedIngredient!: Observable<Root>;
  ingredientAnalysis!: Root;

  constructor(private ingredientsService: IngredientsService) {}

  title = 'Nutrition';

  // the add button and the function
  addText(value: string) {
    this.listItems.push(value);
  }
  //the analyze button and the function
  analyzeIngredients() {
    console.log(this.listItems)
    for (let i of this.listItems) {
      this.analyzedIngredient = this.ingredientsService.getIngredientList(i);
      this.analyzedIngredient.subscribe((value:Root) => this.ingredientAnalysis = value);
      if (this.ingredientAnalysis !== undefined) {
        console.log(this.ingredientAnalysis.ingredients);
      }
    }
  }
}
