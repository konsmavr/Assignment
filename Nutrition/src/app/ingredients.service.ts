import { Root, Fat } from './ingredient-analysis.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, tap } from 'rxjs';
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
  getIngredientList():Observable<Root> {
    
    let myParams = new HttpParams()
    .set('app_id', '405d17d3')
    .set('app_key', 'c62d9da152ddc32578901c758fe57d78')
    .set('nutrition-type', 'cooking')
    .set('ingr','1%20orange%20');
    return this.http.get<Root>(
      'https://api.edamam.com/api/nutrition-data?app_id=405d17d3&app_key=c62d9da152ddc32578901c758fe57d78&nutrition-type=cooking&ingr=1%20orange%20'
       //{params: myParams}
    ).pipe(filter(data => for(let k in data){
      
    }))
  }
}
