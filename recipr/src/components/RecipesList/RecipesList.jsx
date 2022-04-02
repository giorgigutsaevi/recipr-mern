/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";
import axios from "axios";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const url = "http://localhost:5001/api/v1/recipes";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (recipeId) => {
    axios.delete(`http://localhost:5001/delete/${recipeId}`);
    console.log(`deleted item with id ${recipeId}`)
    // automatically refreshes the page as soon as the item is deleted
    window.location.reload(false)
  }; 


  const receivedRecipes = recipes.map((recipe) => (
    <Recipe key={recipe._id} data={recipe} handleDelete={handleDelete} />
  ));

  return <div className="recipes">{receivedRecipes}</div>;
};

export default RecipesList;
