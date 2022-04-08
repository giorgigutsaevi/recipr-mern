import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Recipe = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        backgroundColor: "#F0ECE3",
      }}
    >
      <CardMedia
        component="img"
        alt="recipe img"
        height="200"
        image={props.data.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            height: 50,
          }}
        >
          {props.data.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            height: 80,
            marginTop: 5,
          }}
        >
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          sx={{
            border: 1,
            color: "#ab003c",
          }}
          onClick={() => props.handleDelete(props.data._id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          size="medium"
          sx={{
            color: "##3f51b5",
            border: 1,
          }}
          onClick={() => props.handleEdit(props.data._id)}
          startIcon={<EditIcon />}
        >
          Edit Recipe
        </Button>
      </CardActions>
    </Card>
  );
};

export default Recipe;
