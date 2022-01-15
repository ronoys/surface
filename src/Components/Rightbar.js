import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Code, Css, FlutterDash, GitHub, Html, Javascript, Php } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    height: '100vh',
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #ece7e7",
  },
  item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4)
  },
  icon: {
      marginRight: theme.spacing(1),
      fontSize: '20px'
  },
  text: {
      fontWeight: '500',
  }


}));
  
function Rightbar(props) {
    const classes = useStyles();

    return (
      <Container className = {classes.container}>
          <div className = {classes.item}>
            <Html className = {classes.icon} />
            <p className = {classes.text}>HTML</p>
          </div>

          <div className = {classes.item}>
            <Css className = {classes.icon} />
            <p className = {classes.text}>CSS</p>
          </div>

          <div className = {classes.item}>
            <Javascript className = {classes.icon} />
            <p className = {classes.text}>JavaScript</p>
          </div>

          <div className = {classes.item}>
            <GitHub className = {classes.icon} />
            <p className = {classes.text}>GitHub</p>
          </div>

          <div className = {classes.item}>
            <Php className = {classes.icon} />
            <p className = {classes.text}>PHP</p>
          </div>

          <div className = {classes.item}>
            <Code className = {classes.icon} />
            <p className = {classes.text}>Code</p>
          </div>

          <div className = {classes.item}>
            <FlutterDash className = {classes.icon} />
            <p className = {classes.text}>Dart</p>
          </div>


      </Container>
    );
  };
  
  export default Rightbar;