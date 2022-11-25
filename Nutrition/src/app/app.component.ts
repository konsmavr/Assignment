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
  ingredientAnalysis!: Root;
  myStream$ = this.ingredientsService.getIngredientList();
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
    console.log(this.listItems);
    this.myStream$ = this.ingredientsService
      .getIngredientList(this.listItems)
      .subscribe();
    console.log(this.myStream$)  }
  //remove the deleted values from the list
  //
  removeEmptyStrings(value: string) {
    let tempArray = this.listItems.filter((item) => item !== value);
    this.listItems = tempArray;
  }

  private rem(element: string, index: number, array: string[]) {
    return;
  }

  async waitForLowResToLoad() {
    var start_time = new Date().getTime();
    while (true) {
      if (this.ingredientAnalysis !== undefined) {
        console.log(this.ingredientAnalysis);
        break; // or return
      }
      if (new Date().getTime() > start_time + 10000) {
        console.log('time out');
        break; // or throw
      }
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
}
