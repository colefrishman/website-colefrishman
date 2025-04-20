import React from 'react';
import ImageLinkPreview from '../Components/ImageLinkPreview';
import NavBar from '../Components/NavBar';
import { Typography, Box, Grid, Paper } from '@material-ui/core';
import { useTropicalStyles } from '../styles/theme';

const GIS3001 = () => {
    const classes = useTropicalStyles();

    return(
        <Box className={classes.root}>
            <NavBar />
            <Typography variant="h2" component="h1" className={classes.title}>
                GIS 3001C - Spatial Maps and Graphs
            </Typography>

            <Paper className={classes.sectionTitle} id="design">
                <Typography variant="h4">
                    Design
                </Typography>
            </Paper>
            <Grid container spacing={3} className={classes.imageGrid}>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/TwitterBannerGraphic.png" linktext="Twitter Banner Graphic" height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/GatorsTypingMask.png" linktext="Gators Typing Mask" height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/Monogram.png" linktext="Monogram" height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/PortfolioCover.png" linktext="Portfolio Cover" height="200px" />
                </Grid>
            </Grid>

            <Paper className={classes.sectionTitle} id="maps">
                <Typography variant="h4">
                    Maps
                </Typography>
            </Paper>
            <Grid container spacing={3} className={classes.imageGrid}>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/ContinentsWaterColorMap.png" linktext="Water color Map of the world" height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/DisasterTrends.png" linktext="Historical disaster trends in the U.S." height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/Massachusetts.png" linktext="Map of Massachusetts" height="200px" />
                </Grid>
                <Grid item xs={12} sm={6} md={3} className={classes.imageItem}>
                    <ImageLinkPreview src="/gis3001/ReligionChoropleth.png" linktext="Choropleth map of religion in the U.S." height="200px" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default GIS3001;