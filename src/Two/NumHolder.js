import React from 'react';
import Box from '@mui/material/Box';

function NumHolder(props) {
    return (
        <div>
            <Box
            sx={{
                width: '20%',
                height: 250,
                backgroundColor: 'yellow',
            }}>
                <div>
                    <p>{props.value}</p>

                </div>

            </Box>
        </div>
    );
}

export default NumHolder;