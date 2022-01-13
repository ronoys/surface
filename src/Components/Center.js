import React from 'react';
import { Container, Fab, makeStyles } from '@material-ui/core';
import CardTemplate from './Card';
import { Add } from '@mui/icons-material';

const posts = [
  {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png", title: "React", description: "JavaScript Framework. Used to make this site."},
  {image: "https://miro.medium.com/max/1400/1*8ETcaw-gA1dYW4EFxqGK3w.png", title: "Express", description: "Description2"},
  {image: "https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256", title: "Vue", description: "Description3"},
  {image: "https://cdn.changelog.com/uploads/icons/topics/aQo/icon_large.png?v=63696255224", title: "Gatsby", description: "Description4"},
  {image: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg", title: "Angular", description: "Description5"},
  {image: "data:image/png;base64,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", title: "Webpack", description: "Description6"},

]

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    border: "1px solid #ece7e7",
    height: '100vh',
    backgroundColor: "white",
    color: "#555",
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: "start",
    paddingLeft: theme.spacing(2),
    flexWrap: "wrap",
  },
  button: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'space-between'
  }
}));
  
function Center(props) {
    const classes = useStyles();

    return (
      <Container className = {classes.container}>
          {posts.map(post => <CardTemplate image = {post.image} title = {post.title} description = {post.description} /> )}
          <div className = "button">
            <Fab color = "primary">
            <Add />
            </Fab>
          </div>
          
      </Container>
    );
  };
  
  export default Center;