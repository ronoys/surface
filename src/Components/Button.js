import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Person } from '@material-ui/icons';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

export default function CustomizedButton() {

    return (
      <div>
  
        <ColorButton 
        variant="contained"
        startIcon = {<Person />}
        >
          Material UI
        </ColorButton>

        
      </div>
        
      
    );
  }