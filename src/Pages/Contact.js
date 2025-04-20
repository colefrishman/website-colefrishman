import React from 'react';
import { Typography, Box, Grid, Paper, Link } from '@material-ui/core';
import { useTropicalStyles } from '../styles/theme';
import NavBar from '../Components/NavBar';

const Contact = () => {
	const classes = useTropicalStyles();
	const contactItems = [
		{
			title: "Email",
			href: "mailto:info@colefrishman.com",
			image: "/logos/email.png",
			text: "Email me at info@colefrishman.com",
			linkText: "info@colefrishman.com"
		},
		{
			title: "LinkedIn",
			href: "https://www.linkedin.com/in/cole-frishman-229952180/",
			image: "/logos/linkedin.png",
			text: "Find me on LinkedIn",
			linkText: "Go to my profile"
		},
		{
			title: "GitHub",
			href: "https://github.com/colefrishman",
			image: "/logos/github.png",
			text: "Check out what I'm working on!",
			linkText: "Go to my page"
		},
		{
			title: "Google Play",
			href: "https://play.google.com/store/apps/developer?id=Cole+Frishman",
			image: "/logos/playstore.png",
			text: "I've published a few apps to the Google Play store.",
			linkText: "Go to my page"
		},
		{
			title: "Npm",
			href: "https://www.npmjs.com/~colefrishman",
			image: "/logos/npm.png",
			text: "Just a BraniF**k interpreter for now.",
			linkText: "Go to my page"
		}
	];

	return(
		<Box className={classes.root}>
            <NavBar />
			<Typography variant="h2" component="h1" className={classes.title}>
				Get in Touch
			</Typography>
			
			<Typography variant="h5" className={classes.subtitle}>
				Feel free to reach out!
			</Typography>

			<Grid container spacing={4} className={classes.gridContainer}>
				{contactItems.map((item, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Paper className={classes.section}>
							<Box display="flex" alignItems="center" mb={2}>
								<Box 
									display="flex" 
									alignItems="center" 
									justifyContent="center" 
									style={{ 
										width: '40px', 
										height: '40px',
										marginRight: '16px'
									}}
								>
									<img 
										src={item.image} 
										alt={item.title} 
										style={{ 
											maxWidth: '100%',
											maxHeight: '100%',
											objectFit: 'contain'
										}} 
									/>
								</Box>
								<Typography variant="h5" className={classes.toolTitle}>
									{item.title}
								</Typography>
							</Box>
							<Typography variant="body1" className={classes.toolText}>
								{item.text}
							</Typography>
							<Link 
								href={item.href} 
								target="_blank" 
								rel="noopener noreferrer" 
								className={classes.toolLink}
							>
								{item.linkText}
							</Link>
						</Paper>
					</Grid>
				))}
			</Grid>

			<Paper className={classes.section}>
				<Typography variant="body1" align="center">
					For the quickest response, please reach out via email at{' '}
					<Link 
						href="mailto:info@colefrishman.com" 
						className={classes.toolLink}
					>
						info@colefrishman.com
					</Link>
				</Typography>
			</Paper>
		</Box>
	);
}

export default Contact;