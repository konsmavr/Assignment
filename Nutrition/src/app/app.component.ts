import { Root } from './ingredient-analysis.interface';
import { IngredientsService } from './ingredients.service';
import { Component } from '@angular/core';
import { map, Observable, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listItems: string[] = [];
  ingredientAnalysis: Root[] = [];

  constructor(private ingredientsService: IngredientsService) {}

  title = 'Nutrition';

  // the add button and the function
  addItem(value: string) {
    this.ingredientsService.addIngredient(value);
    this.listItems = this.ingredientsService.getIngredientsList();
  }

  //the analyze button and the function

  analyzeIngredients() {
    if (this.listItems.length === 0) return;
    this.ingredientAnalysis = [];

    let temp: Root;
    this.listItems.forEach((value: string) =>
      this.ingredientsService.getIngredientAnalysis(value).subscribe(
        pipe((data: Root) => {
          temp = data;
          this.ingredientAnalysis.push(temp);
        })
      )
    );
  }

  //remove the deleted values from the list
  //and checks if the list is empty to print the right results
  removeItem(value: string) {
    this.ingredientsService.deleteIngerdient(value);
    this.listItems = this.ingredientsService.getIngredientsList();
    if (this.ingredientAnalysis.length > 0) {
      this.ingredientAnalysis = [];
      this.analyzeIngredients();
    }
  }
}
