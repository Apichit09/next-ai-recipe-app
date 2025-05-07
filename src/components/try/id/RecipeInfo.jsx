import React from 'react';
import SearchButtons from './SearchButtons';

const RecipeInfo = ({ recipe, onSearchGoogle, onSearchYoutube }) => {
  return (
    <div className="md:w-3/5">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{recipe.name}</h1>
      <p className="text-gray-700 mb-8 leading-relaxed">{recipe.description}</p>
      
      <SearchButtons 
        recipeName={recipe.name}
        onSearchGoogle={onSearchGoogle}
        onSearchYoutube={onSearchYoutube}
      />
    </div>
  );
};

export default RecipeInfo;
