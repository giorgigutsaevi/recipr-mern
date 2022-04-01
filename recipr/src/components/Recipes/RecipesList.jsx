import React, { useState, useEffect } from "react";
import axios from "axios"

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  const url = "http://localhost:5001/api/v1/recipes";

  useEffect(() => {
    axios.get(url)
      .then(res => setRecipes(res.data))
      .catch(err => console.log(err))
  }, []);

  
  return (
    <div>
      
    </div>
  );
};

export default RecipesList;
