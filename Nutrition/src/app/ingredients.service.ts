import { HttpClient } from '@angular/common/http';
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
}
