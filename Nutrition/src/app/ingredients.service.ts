import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Ingredient } from './Ingredients.interface';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  listItems: string[] = [];

  constructor(private http: HttpClient) {}

  onSearchSaveText(value: string) {
    this.listItems.push(value);
  }
  getList() {
    return this.listItems;
  }
  getIngredientList() {
    
    let myParams = new HttpParams()
    .set('app_id', '405d17d3')
    .set('app_key', 'c62d9da152ddc32578901c758fe57d78')
    .set('nutrition-type', 'cooking');
    return this.http.get<any>(
      'https://api.edamam.com/api/nutrition-data', {params: myParams}
    );
  }
}
