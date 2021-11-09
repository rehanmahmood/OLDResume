import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import image from "../../assests/Home/marketsentiment.png";



const CardItem = (props) => {
    return (
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
            <span className="card__link"> <a href="https://github.com/rehanmahmood/Stock-Predictor" target="_blank" rel="noopener norefferer"> View Githib </a>
            </span>
        </Button>
      </CardActions>
    </Card>
    )
}
export default CardItem
