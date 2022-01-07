import { Grid, Paper} from '@material-ui/core';
import * as React from 'react';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';

export default function App() {

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Menu />
        </Grid>
        <Grid item xs={7}>
            
        </Grid>
        <Grid item xs={3}>
            
        </Grid>
      </Grid>
    </div>
      
    
  );
}