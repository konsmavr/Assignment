import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  Ingredients: void | undefined; 

  private ingredientsUrl!: 'https:api.edamam.com/doc/open-api/nutrition-analysis-v1.json';


  // constructor(
  //   private http: HttpClient,
  // ) { }
  // getIngredients() : Observable<Ingredients[]> {
  //   return this.http.get<ingredients[]>(this.getIngredients)
  //   .pipe(
  //     tap(_ => this.log('fetched ingredients')),
  //     catchError(this.handleError<Hero[]>('getHeroes', []))
  //   );





  }
