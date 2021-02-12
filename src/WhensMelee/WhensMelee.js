import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import TournamentsList from './TournamentsList'
import { MELEE_ID } from './values';
import NavBar from '../Components/NavBar';

const WhensMelee = () => {
	const [tournamentsList, setTournamentsList] = useState([]);
	const [loading, setLoading] = useState(true);

	//graphQL query, check https://smashgg-developer-portal.netlify.app/
	let query = `query TournamentsByVideogame {
		tournaments(query: {
			perPage: 20
		  	page: 1
		  	sortBy: "startAt asc"
		  	filter: {
				past: false,
				videogameIds: [
					${MELEE_ID}
				],
			afterDate: ${Math.floor((new Date().getTime())/1000-3600*24*0)},
			beforeDate: ${Math.floor((new Date().getTime())/1000+3600*24*10)},
			published: true
		  }
		}) {
			nodes {
			  id
			  name
			  slug
			  startAt
			  venueAddress
			  hasOfflineEvents
			  hasOnlineEvents
			  streams{
				streamSource
				streamName
			  }
			  images{url}
			  participants(query: {
				perPage:10
			  }){
				nodes{
					gamerTag
					events{
						name
						videogame{
						  id
						}
					}
				}
			  }
			}
		  }
		}`;

	//gets the tournaments from the API by the query
	const fetchTournaments = () => {
		fetch('https://api.smash.gg/gql/alpha', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'Accept': 'application/json',
			  'authorization': `Bearer ${process.env.REACT_APP_SMASHGG_API_KEY}`
			},
			body: JSON.stringify({
			  query
			})
		})
		.then(r => r.json())
		.then(result => {if(result.data){setTournamentsList(result.data.tournaments.nodes)}});
	}

	//Css style whether or not to show the loading thingy 
	const loadingStyle = (ongoing) => {
		if(ongoing){
			return "block";
		}
		else{
			return "none"
		}
	}

	const unload = () => {
		setLoading(false)
	}
	
	//weird solution to get the remove the loading bar. Will not remove it if zoomed out enough to not need scroll.
	useEffect(()=>{
		fetchTournaments();
		window.addEventListener('scroll', unload);
	}, [])

	return(
		<Container maxWidth="lg" style={{backgroundColor: "FFDDCC", paddingBottom: "10px"}}>
			<NavBar />
			<br />
			<h1 style={{textAlign: "center"}}>When's Melee?</h1>
			<br />
			<TournamentsList tournaments={tournamentsList}/>
			<CircularProgress color="secondary" style={{display: loadingStyle(loading), marginLeft: "auto", marginRight: "auto"}}/>
		</Container>
	);
}

export default WhensMelee;