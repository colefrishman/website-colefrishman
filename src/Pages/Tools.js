import React from 'react';
import NavBar from '../Components/NavBar';
import { Typography, Box, Grid, Paper, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTropicalStyles } from '../styles/theme';

const Tools = () => {
    const classes = useTropicalStyles();
    const history = useHistory();

    const tools = [
        {"title":"When's Melee?", "src":"/whensmelee", "image":"/previews/whensmelee.png", "text":"Find upcoming tournaments for Super Smash Bros. Melee", "linktext":"Go to page"},
        {"title":"U.S. Map Maker", "src":"https://us-map-maker.vercel.app/", "image":"/previews/us-map-maker.png", "text":"Make maps quickly and painlessly!", "linktext":"Go to page"},
        {"title":"IMG #### Videos", "src":"/imgvids", "image":"/previews/imgvids.png", "text":"Looking for more great videos? Here's a neat trick for YouTube.", "linktext":"Go to page"},
        {"title":"DVD", "src":"/dvd.html", "image":"/previews/dvd.png", "text":"DVD Logo", "linktext":"Go to page"},
        {"title":"A Jew On Christmas", "src":"/jewonchristmas", "image":"/previews/jewonchristmas.png", "text":"Find chinese restaurants and movie theaters near you!", "linktext":"Go to page"}
    ];

    return(
        <Box className={classes.root}>
            <NavBar />
            <Typography variant="h2" component="h1" className={classes.title}>
                Tools and Toys
            </Typography>

            <Grid container spacing={4} className={classes.gridContainer}>
                {tools.map((tool, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper className={classes.toolCard} onClick={() => window.location.href = tool.src}>
                            <CardMedia
                                className={classes.toolImage}
                                image={tool.image}
                                title={tool.title}
                            />
                            <Box className={classes.toolContent}>
                                <Typography variant="h5" className={classes.toolTitle}>
                                    {tool.title}
                                </Typography>
                                <Typography variant="body1" className={classes.toolText}>
                                    {tool.text}
                                </Typography>
                                <Typography variant="button" className={classes.toolLink}>
                                    {tool.linktext}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Tools; 