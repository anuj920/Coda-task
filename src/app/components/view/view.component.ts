import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.services';
import { Recipe } from '../recipe.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor(private recipeService:RecipeService,private router: Router,) {
    this.recipes = new Array<Recipe>();
   }

  ngOnInit() {
    this.getAllRecipe();
  }


  getAllRecipe(){
    this.recipeService.getRecipe().subscribe(res=>{
      this.recipes = res;
      // console.log(this.recipes)
      localStorage.setItem("recipe",JSON.stringify(this.recipes))
    })
  }

  searchByName(filterValue){
    let Recipevalues = JSON.parse(localStorage.getItem("recipe"))
    filterValue = filterValue.toString().replace(/ +/g, '').toLowerCase();
    this.recipes = Recipevalues.filter(p => p.name.replace(/ +/g, '').toLowerCase().indexOf(filterValue) !== -1 );
  }

  toDetail(value){
    if(value){
      this.router.navigate(['detail/',value.id])
    }

  }

}
