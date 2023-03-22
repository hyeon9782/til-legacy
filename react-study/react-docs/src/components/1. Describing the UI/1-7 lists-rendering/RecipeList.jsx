import { recipes } from './data.js';
import Recipe from './Recipe.jsx';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (  
          <Recipe key={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
        )
        )}
      </ul>
    </div>
  );
}