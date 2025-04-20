import React from 'react';
import ImageLink from '../Components/ImageLink';
import NavBar from '../Components/NavBar';
import { Typography, Box, Paper, Divider } from '@material-ui/core';
import { useTropicalStyles } from '../styles/theme';

const Sports = () => {
    const classes = useTropicalStyles();

    return(
        <Box className={classes.root}>
            <NavBar />
            
            <Paper className={classes.section} id="football">
                <Typography variant="h3" className={classes.title}>
                    Football
                </Typography>
                <Box className={classes.imageContainer}>
                    <ImageLink src="/sports/GoFor2.png" alt="Go for 2" height="100%" />
                </Box>
                <Box className={classes.imageContainer}>
                    <ImageLink src="/sports/SECBowlTieIns.png" alt="SEC Bowl Tie-ins" height="100%" />
                </Box>
            </Paper>

            <Divider className={classes.divider} />

            <Paper className={classes.section} id="baseball">
                <Typography variant="h3" className={classes.title}>
                    Baseball
                </Typography>
                <Box className={classes.imageContainer}>
                    <ImageLink src="/sports/OffsetPitching.png" alt="Offset Pitching" height="100%" />
                </Box>
            </Paper>
        </Box>
    );
}

export default Sports;