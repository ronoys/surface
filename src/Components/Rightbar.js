import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    border: "1px solid #ece7e7",
    height: '100vh',
    backgroundColor: "white",
    color: "#555"
  },
}));
  
function Rightbar(props) {
    const classes = useStyles();

    return (
      <Container className = {classes.container}>
          <p>Placeholder</p>
      </Container>
    );
  };
  
  export default Rightbar;