import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import ValueDisplay from './ValueDisplay'


export default function BasicCard(props) {

    const [value, changeValue] = React.useState(0);

    function increaseCount(num){
        changeValue(prev => prev + num);
    }
 
    function decreaseCount(num){
        changeValue(prev => prev - num);
    }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        marginBotton: '10%',
        display: 'inline-block',
        '& > *': {
          m: 1,
        },
      }}
    >

        <div>
            <ValueDisplay score={value}></ValueDisplay>


            <Button variant="contained" onClick = {() => increaseCount(props.score)}>Add</Button>
            <Button variant="contained" onClick = {() => decreaseCount(props.score)}>Subtract</Button>
        </div>
        
        
    </Box>
  );
}