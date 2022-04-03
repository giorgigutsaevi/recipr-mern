/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import "./RecipeList.css";
import axios from "axios";
import EditingContext from '../../Context/EditingContext'

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  
  const {isEditing, setIsEditing} = useContext(EditingContext);

  const url = "http://localhost:5001/api/v1/recipes";
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (recipeId) => {
    axios.delete(`http://localhost:5001/delete/${recipeId}`);

    // automatically refreshes the page as soon as the item is deleted
    window.location.reload(false);
  };

  const handleEdit = (recipeId) => {
    setIsEditing(recipeId)
    navigate(`/edit/${recipeId}`);
    console.log(`item with id: ${recipeId} was updated!`)
  };

  const receivedRecipes = recipes.map((recipe) => (
    <Recipe
      key={recipe._id}
      data={recipe}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  ));

  return <div className="recipes">{receivedRecipes}</div>;
};

export default RecipesList;
