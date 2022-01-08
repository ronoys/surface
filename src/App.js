import { Grid } from '@material-ui/core';
import * as React from 'react';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Center from './Components/Center';
import Rightbar from './Components/Rightbar';

export default function App() {

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Menu />
        </Grid>
        <Grid item sm={8}>
          <Center />    
        </Grid>
        <Grid item sm={2}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
      
    
  );
}