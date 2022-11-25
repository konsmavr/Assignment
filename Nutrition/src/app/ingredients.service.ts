import { Root, Fat } from './ingredient-analysis.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, tap } from 'rxjs';
import { Ingredient } from './Ingredients.interface';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  
//setting the request to the API endpoint 
  getIngredientList(values: string[]): Observable<Root>[] {
    let myRoots: Observable<Root>[] = [ ];
    values.forEach((value) => {
      let myParams = new HttpParams()
        .set('app_id', '405d17d3')
        .set('app_key', 'c62d9da152ddc32578901c758fe57d78')
        .set('nutrition-type', 'cooking')
        .set('ingr', value);
      myRoots.push(
        this.http.get<Root>('https://api.edamam.com/api/nutrition-data', {
          params: myParams,
        }).pipe( )
      );
    });
    return myRoots;
  }
}
