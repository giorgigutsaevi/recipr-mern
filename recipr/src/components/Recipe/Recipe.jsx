import React from "react";
import "./Recipe.css";

const Recipe = (props) => {
  // props.data.title
	// console.log(props.data.ingredients)


	

  return (
    <div className="card">
      <img src={props.data.image} alt="" className="card__image" />
      <div className="card-body">
        <h5 className="card-text">{props.data.title}</h5>
        <p className="card-body">{props.data.description}</p>
				<ul>
					
				</ul>
      </div>
      <div className="card--buttons__wrapper">
        <button className="card--buttons__delete" onClick={()=> props.handleDelete(props.data._id)}>
          <i className="bi bi-trash-fill"></i>
        </button>
        <button className="card--buttons__edit">
          <i className="bi bi-pencil"></i>
        </button>
        <button className="card--buttons__favorite">
          <i className="bi bi-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default Recipe;
