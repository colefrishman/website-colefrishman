import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import { lightBlue } from '@material-ui/core/colors';

const ContentCard = (props) => {
    const redir = (src) => {window.location=src}
	return(
		<Card className="preview-card" disableRipple style={{width: "300"}}>
			<a href={props.src} style={{textDecoration: "none"}}>
				<CardActionArea style={{width: "300", height: "200"}}>
					<CardMedia component="img"
						alt={props.title}
						height="100"
						image={props.image}
						title={props.title}
					/>
					<CardContent style={{height: "100"}}>
						<Typography variant="h5">
							{props.title}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{props.text}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions onClick={() => redir(props.src)}>
					<a href={props.src}>{props.linktext}</a>
				</CardActions>
			</a>
		</Card>
	);
}

const Home = () => {

	let sliderProps= {dots: true,
		slidesToShow: (window.innerWidth/400 > 5)? 5: window.innerWidth/400,
		slidesToScroll: 1}

	const linksToCarousel = (items) => {
		return (
		
			<Slider {...sliderProps} style={{marginBottom:"100px"}}>
				{items.map(item => {
					return <ContentCard title={item.title} src={item.src} image={item.image} text={item.text} linktext={item.linktext}/>
				})}
			</Slider>
		)
	}

	return(
		<div style={{marginRight: "10%", marginLeft: "10%", marginTop:"2%"}}>
			<h1 style={{marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>
				Cole Frishman
			</h1>

			<h3>Tools and Toys</h3>
			{
				linksToCarousel([
					{"title":"When's Melee?", "src":"/whensmelee", "image":"/previews/whensmelee.png", "text":"Find upcoming tournaments for Super Smash Bros. Melee", "linktext":"Go to page"},
					{"title":"U.S. Map Maker", "src":"https://us-map-maker.vercel.app/", "image":"/previews/us-map-maker.png", "text":"Make maps quickly and painlessly!", "linktext":"Go to page"},
					{"title":"IMG #### Videos", "src":"/imgvids", "image":"/previews/imgvids.png", "text":"Looking for more great videos? Here's a neat trick for YouTube.", "linktext":"Go to page"},
					{"title":"DVD", "src":"/dvd.html", "image":"/previews/dvd.png", "text":"DVD Logo", "linktext":"Go to page"},
					{"title":"A Jew On Christmas", "src":"/jewonchristmas", "image":"/previews/jewonchristmas.png", "text":"Find chinese restaurants and movie theaters near you!", "linktext":"Go to page"}
				])
			}

			<h3>Sports</h3>
			{
				linksToCarousel([
					{"title":"Go For 2!", "src":"/sports/GoFor2.png", "image":"/sports/GoFor2.png"			,"text":"Football teams should go for 2 when down by 8 in the forth quarter."	,"linktext":"View Full Image"},
					{"title":"SEC bowl tie-ins", "src":"/sports/SECBowlTieIns.png"	,"image":"/sports/SECBowlTieIns.png"	,"text":"Bowl tie-ins for the SEC."  			,"linktext":"View Full Image"},
					{"title":"Offset Pitching", "src":"/sports/OffsetPitching.png", "image":"/sports/OffsetPitching.png"	,"text":"A baseball team can get ahead by changing their starting rotation."	,"linktext":"View Full Image"},
					{"title":"Football", "src":"/sports#football", "image":"https://www.publicdomainpictures.net/pictures/80000/velka/football-ball.jpg"		,"text":"See all football content."  			,"linktext":"View Gallery"},
					{"title":"Baseball", "src":"/sports#baseball", "image":"https://www.publicdomainpictures.net/pictures/70000/velka/baseball-ball.jpg"		,"text":"See all baseball content." ,"linktext":"View Gallery"}
				])
			}

			<h3>Design</h3>
			{
				linksToCarousel([
					{"title":"Maps" 	,"src":"/gis3001#maps", "image":"/previews/gis3001.png"	,"text":"See all map design content."		,"linktext":"View Gallery"},
					{"title":"Design"	,"src":"/gis3001#design", "image":"/previews/gis3001.png"	,"text":"See all graphic design content."	,"linktext":"View Gallery"},
					{"title":"Sports"	,"src":"/sports", "image":"/previews/sports.png"	,"text":"See all sports design content."	,"linktext":"View Gallery"},
					{"title":"Favicon","src":"/favicon.ico", "image":"/favicon.ico"			,"text":"Favicon", "linktext":"View Image"},
					{"title":"NATO Alphabet","src":"/design/alphabet.pdf", "image":"/previews/alphabet.png"	,"text":"NATO Alphabet Redesign"			,"linktext":"View pdf"},
					{"title":"Twitter","src":"https://twitter.com/colefrishman", "image":"https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.2560.jpg" ,"text":"Twitter", "linktext":"View Twitter"}
				])
			}

			<h3>Find me!</h3>
			{
				linksToCarousel([
					{"title":"Contact"	,"src":"mailto:info@colefrishman.com", "image":"/logos/email.png", "text":"Email me at info@colefrishman.com", "linktext":"info@colefrishman.com"},
					{"title":"LinkedIn"	,"src":"https://www.linkedin.com/in/cole-frishman-229952180/", "image":"/logos/linkedin.png"	,"text":"Find me on LinkedIn", "linktext":"Go to my profile"},
					{"title":"GitHub"		,"src":"https://github.com/colefrishman" ,"image":"/logos/github.png", "text":"Check out what I'm working on!", "linktext":"Go to my page"},
					{"title":"Google Play","src":"https://play.google.com/store/apps/developer?id=Cole+Frishman", "image":"/logos/playstore.png", "text":"I've published a few apps to the Google Play store.", "linktext":"Go to my page"},
					{"title":"Npm"		,"src":"https://www.npmjs.com/~colefrishman", "image":"/logos/npm.png", "text":"Just a BraniF**k interpreter for now.", "linktext":"Go to my page"}
				])
			}
		</div>
	);
}

export default Home