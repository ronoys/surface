import { Container, makeStyles, Typography } from '@material-ui/core';
import { Apple, Facebook, Google, Instagram, LinkedIn, Pinterest, Reddit, Twitter, WhatsApp, YouTube } from '@mui/icons-material';
import React from 'react';


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
        fontWeight: '500'
    }
}));

function Menu(props) {
    const classes = useStyles();

    return (
        <div>
            <Container className = {classes.container}>
                <div className = {classes.item}>
                    <Apple className = {classes.icon} />
                    <Typography className = {classes.text}>Apple</Typography>
                </div>

                <div className = {classes.item}>
                    <Google className = {classes.icon} />
                    <Typography className = {classes.text}>Google</Typography>
                </div>

                <div className = {classes.item}>
                    <Facebook className = {classes.icon} />
                    <Typography className = {classes.text}>Facebook</Typography>
                </div>

                <div className = {classes.item}>
                    <Twitter className = {classes.icon} />
                    <Typography className = {classes.text}>Twitter</Typography>
                </div>

                <div className = {classes.item}>
                    <LinkedIn className = {classes.icon} />
                    <Typography className = {classes.text}>LinkedIn</Typography>
                </div>

                <div className = {classes.item}>
                    <Pinterest className = {classes.icon} />
                    <Typography className = {classes.text}>Pinterest</Typography>
                </div>

                <div className = {classes.item}>
                    <Reddit className = {classes.icon} />
                    <Typography className = {classes.text}>Reddit</Typography>
                </div>

                <div className = {classes.item}>
                    <YouTube className = {classes.icon} />
                    <Typography className = {classes.text}>YouTube</Typography>
                </div>

                <div className = {classes.item}>
                    <WhatsApp className = {classes.icon} />
                    <Typography className = {classes.text}>WhatsApp</Typography>
                </div>

                <div className = {classes.item}>
                    <Instagram className = {classes.icon} />
                    <Typography className = {classes.text}>Instagram</Typography>
                </div>

            </Container>
        </div>
    );
}

export default Menu;