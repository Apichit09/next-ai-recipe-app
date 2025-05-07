import React from 'react';
import RecipeImage from './RecipeImage';
import RecipeInfo from './RecipeInfo';
import IngredientsList from './IngredientsList';

const RecipeDetail = ({ recipe, onSearchGoogle, onSearchYoutube }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8" data-aos="fade-up">
      {/* Recipe header section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <RecipeImage imageUrl={recipe.image_url} recipeName={recipe.name} />
        <RecipeInfo 
          recipe={recipe} 
          onSearchGoogle={onSearchGoogle}
          onSearchYoutube={onSearchYoutube}
        />
      </div>
      
      <IngredientsList ingredients={recipe.ingredients} />
    </div>
  );
};

export default RecipeDetail;
