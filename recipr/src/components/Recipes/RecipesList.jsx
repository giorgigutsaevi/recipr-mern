/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios"
import Recipe from "./Recipe"

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  const url = "http://localhost:5001/api/v1/recipes";

  useEffect(() => {
    axios.get(url)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }, []);

  const receivedRecipes = recipes.map(recipe => (
    < Recipe 
      key={recipe._id}
      data={recipe}
    />
  ))
  
  return (
    <div>
      {receivedRecipes}
    </div>
  );
};

export default RecipesList;
