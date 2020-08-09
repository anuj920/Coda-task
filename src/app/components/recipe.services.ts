import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
  })
  export class RecipeService {
    constructor(public http: HttpClient){}

    getRecipe():Observable<any>{
        return this.http.get(`http://starlord.hackerearth.com/recipe`)
    }


  }