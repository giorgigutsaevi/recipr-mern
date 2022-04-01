import React from "react";
import "./Recipe.css";

const Recipe = (props) => {
  // props.data.title
  return (
    <div className="card">
      <img src={props.data.image} alt="" className="card__image card-img-top" />
			<div className="card-body">
				<h5  className="card-title">{props.data.title}</h5>
				<p className="card-text">{props.data.description}</p>
			</div>
    </div>
  );
};

export default Recipe;
