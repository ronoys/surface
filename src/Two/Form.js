import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NumHolder from './NumHolder';

function Form(props) {

    const elements = [];

    const [input, setInput] = React.useState('');

    function addNumber(inputNum){
        elements.push(inputNum);
        setInput("");
        displayValue();
    }

    function displayValue(){
        {elements.map(elem => <NumHolder value={elem}/>)}
    }

    return (
        <div>
            <Box
            sx={{
                width: '20%',
                height: 250,
                backgroundColor: 'yellow',
            }}>
                <div>
                    <p>Form:</p>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="Enter number:" variant="outlined" 
                        onInput={e => setInput(e.target.value)}/>
                        <p>{input}</p>
                        <p>{elements.toLocaleString()}</p>
                    </Box>

                    <Button variant="contained" onClick = {addNumber}>Add</Button>

                </div>

            </Box>

            
        </div>
    );
}

export default Form;