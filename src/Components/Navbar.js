import { AppBar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { Toolbar } from '@mui/material';
import React from 'react';
import './Components.css'
import { Menu } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      backgroundColor: theme.palette.info.light,
    },
}));

function Navbar(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar class = {classes.toolbar}>
                    <IconButton color="inherit">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">Navigation Bar</Typography>
                    <IconButton color="inherit">
                        <Person />
                    </IconButton>

                </Toolbar>

            </AppBar>
        </div>
    );
}

export default Navbar;