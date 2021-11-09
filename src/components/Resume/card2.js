import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";


import image from "../../assests/Home/gui.jpeg";

const Card2 = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={image}
            alt={props.alttitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <span className="card__link"><a href="https://github.com/nilabhanand/Trading-platform" target="_blank" rel="noopener norefferer">View Githib</a></span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Card2;