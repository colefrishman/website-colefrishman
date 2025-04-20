import React from 'react';
import { Typography, Box, Button, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { useTropicalStyles } from '../styles/theme';

const PageNotFound = () => {
    const classes = useTropicalStyles();
    const history = useHistory();

    return (
        <Box className={classes.root}>
            <NavBar />
            <Paper className={classes.section} style={{ textAlign: 'center', padding: '2rem' }}>
                <Typography variant="h1" className={classes.title} style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                    404
                </Typography>
                <Typography variant="h4" className={classes.subtitle} style={{ marginBottom: '2rem' }}>
                    Oops! The page you're looking for doesn't exist.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => history.push('/')}
                    className={classes.button}
                >
                    Return to Home
                </Button>
            </Paper>
        </Box>
    );
};

export default PageNotFound;