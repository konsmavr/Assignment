import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Ingredient } from './Ingredients.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http:HttpClient) { }

  

  

  private ingredientsUrl!: 'https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json';

  postIngredients(data:Ingredient[]){
    return this.http.post<Ingredient[]>("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json", data)
  }



  getIngredients(){
    return this.http.get<Ingredient[]>("https://api.edamam.com/doc/open-api/nutrition-analysis-v1.json")
  }





















  // getIngredients() : Observable<Ingredients[]> {
  //   return this.http.get<ingredients[]>(this.getIngredients)
  //   .pipe(
  //     tap(_ => this.log('fetched ingredients')),
  //     catchError(this.handleError<Hero[]>('getHeroes', []))
  //   );





  }
