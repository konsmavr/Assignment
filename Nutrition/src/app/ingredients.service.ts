import { Root, Fat } from './ingredient-analysis.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, tap } from 'rxjs';
import { Ingredient } from './Ingredients.interface';
@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  myIngredients: string[] = [];

  constructor(private http: HttpClient) {}

  addIngredient(value: string) {
    this.myIngredients.push(value);
  }

  deleteIngerdient(value: string) {
    let tempArray = this.myIngredients.filter((item) => item !== value);
    this.myIngredients = tempArray;
  }

  getIngredientsList(): string[] {
    return this.myIngredients;
  }

  getIngredientAnalysis(value:string): Observable<Root> {
    let myParams = new HttpParams()
      .set('app_id', '25e8b2df')
      .set('app_key', 'fec1c2b9090ba181e67cbf2ec8500060')
      .set('nutrition-type', 'logging')
      .set('ingr', value);
    return this.http.get<Root>('https://api.edamam.com/api/nutrition-data', {
      params: myParams,
    });
  }
}
