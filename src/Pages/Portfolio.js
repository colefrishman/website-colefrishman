import React from 'react';
import NavBar from '../Components/NavBar';
import { Typography, Box, Grid, Paper, Divider, Link } from '@material-ui/core';
import { useTropicalStyles } from '../styles/theme';

const Portfolio = () => {
    const classes = useTropicalStyles();

    return(
        <Box className={classes.root}>
            <NavBar />
            <Typography variant="h2" component="h1" className={classes.title}>
                Portfolio
            </Typography>

            <Paper className={classes.section} id="sports">
                <Typography variant="h3" className={classes.title}>
                    Sports Pages
                </Typography>
                <Grid container spacing={3} className={classes.imageGrid}>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/sports/GoFor2.png" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            Should You Go For 2 on 4th Down when down by 8?
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/sports/SECBowlTieIns.png" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            SEC Bowl Tie-ins (2021)
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/sports/OffsetPitching.png" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            Should you put your best pitcher be first in the rotation?
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/sports/FourMsv2-page001.png" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            A good summer for Miami (2023)
                        </Link>
                    </Grid>
                </Grid>
            </Paper>

            <Divider className={classes.divider} />

            <Paper className={classes.section} id="design">
                <Typography variant="h3" className={classes.title}>
                    Other Posters, Flyers, and the like
                </Typography>
                <Grid container spacing={3} className={classes.imageGrid}>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/design/press-release.pdf" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            Proposed Better Streets Broward Press Release Design
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.imageItem}>
                        <Link href="/design/alphabet.pdf" target="_blank" rel="noopener noreferrer" className={classes.toolLink} style={{ textDecoration: 'underline' }}>
                            NEW NATO Phonetic Alphabet
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default Portfolio; 