import React from 'react';
import "../App.css"
import { Typography, Box, Grid, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTropicalStyles } from '../styles/theme';

const Home = () => {
	const classes = useTropicalStyles();
	const history = useHistory();

	const exploreSections = [
		{
			title: "Tools and Toys",
			description: "Check out my collection of useful tools and fun projects",
			path: "/tools",
			icon: "🛠️"
		},
		{
			title: "Design Portfolio",
			description: "Explore my design work and sports graphics",
			path: "/portfolio",
			icon: "🎨"
		},
		{
			title: "Contact",
			description: "Connect with me",
			path: "/contact",
			icon: "📱"
		}
	];

	return(
		<Box className={classes.root}>
			<Typography variant="h2" component="h1" className={classes.title}>
				Welcome to the best site on the internet!
			</Typography>

			<Box className={classes.exploreSection}>
				<Typography variant="h2" className={classes.exploreTitle}>
					Explore my projects or connect with me
				</Typography>
				<Typography variant="h5" className={classes.exploreSubtitle}>
					Or don't, but it would make me sad
				</Typography>
				<Grid container spacing={4} className={classes.buttonContainer}>
					{exploreSections.map((section, index) => (
						<Grid item xs={12} sm={6} md={4} key={index}>
							<Paper 
								className={classes.exploreCard}
								onClick={() => history.push(section.path)}
							>
								<Typography variant="h1" style={{ marginBottom: '16px' }}>
									{section.icon}
								</Typography>
								<Typography variant="h5" style={{ marginBottom: '8px', color: '#2d3748' }}>
									{section.title}
								</Typography>
								<Typography variant="body1" style={{ color: '#4a5568' }}>
									{section.description}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}

export default Home