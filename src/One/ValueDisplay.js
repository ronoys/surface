import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function ValueDisplay(props) {

    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      
      <Paper elevation={3}>{props.score}</Paper> 
    </Box>
    );
}

export default ValueDisplay;