import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Recipe','Recipe is an arrangement of instructions or an algorithm that shows how to make a dish.',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Ikan Bakar','Ikan bakar is an Indonesian or Malaysian dish of charcoal-grilled fish or other forms of seafood. Ikan bakar literally means "burned fish" in Malay and Indonesian. The barbecued fish is one of the classic Indonesian dish.','../src/app/img/ikan.jpg',[
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

constructor(private slsService:ShoppingListService) { }

}
