import React from 'react';
import { CardActionArea, makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(3),
    height: 250,
    width: 300,
    marginTop: theme.spacing(3),
    objectFit: "contain",

  },
  cardmedia: {
      height: "150",
      width: '80'
  }
}));
  
function CardTemplate(props) {
    const classes = useStyles();

    return (
      <div>
          <Card className = {classes.container}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="150"
                image={props.image}
                alt="Not displayed"
                className = {classes.cardmedia}
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
          </Card>
          
      </div>
    );
  };
  
  export default CardTemplate;