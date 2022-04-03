import React from "react";
import "./Recipe.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";

const Recipe = (props) => {
  return (
    <div className="card">
      <img src={props.data.image} alt="" className="card__image" />
      <div className="card-body">
        <h5 className="card-text">{props.data.title}</h5>
        <p className="card-body">{props.data.description}</p>
        {/* <ul></ul> */}
      </div>
      <div className="card--buttons__wrapper">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon sx={{ color: pink[500] }} />}
          onClick={() => props.handleDelete(props.data._id)}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => props.handleEdit(props.data._id)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Recipe;
