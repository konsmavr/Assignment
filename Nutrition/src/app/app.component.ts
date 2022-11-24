import { Root } from './ingredient-analysis.interface';
import { IngredientsService } from './ingredients.service';
import { Component } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  i: number = 0;
  listItems: string[] = [];
  analyzedIngredient!: Observable<Root>;
  ingredientAnalysis: Root[] = [];
  temp!: Root;
  newTemp = new Subject<Root[]>();

  constructor(private ingredientsService: IngredientsService) {}

  title = 'Nutrition';

  // the add button and the function
  addText(value: string) {
    this.listItems.push(value);
  }
  //the analyze button and the function
  analyzeIngredients() {
    // console.log(this.listItems);
    this.ingredientsService
      .getIngredientList(this.listItems)
      .subscribe((value: Root[]) =>
        value.forEach((root) => this.ingredientAnalysis.push(root))
      );
    if (this.temp !== undefined) {
      console.log(this.temp);
      this.ingredientAnalysis.push(this.temp);
    }
  }
  //remove the deleted values from the list
  removeEmptyStrings(value: string) {
    let indexOf = this.listItems.indexOf(value);
    this.listItems.splice(indexOf);
  }
}
