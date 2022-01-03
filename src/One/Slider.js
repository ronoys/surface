import * as React from 'react';
import Box from '@mui/material/Box';

import Slider from '@mui/material/Slider';

import Card from './Card'

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
        <Card score = {value}></Card>
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        
    </Box>
  );
}