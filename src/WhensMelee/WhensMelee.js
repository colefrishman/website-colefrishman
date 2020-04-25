import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import TournamentCard from './TournamentCard';
import TournamentsList from './TorunamentsList'
import { MELEE_ID } from './values';

const WhensMelee = () => {
	const [tournamentsList, setTournamentsList] = useState([]);
	const [loading, setLoading] = useState(true);

	//graphQL query, check https://smashgg-developer-portal.netlify.app/
	let query = `query TournamentsByVideogame {
		tournaments(query: {
		  page: 1
		  sortBy: "startAt asc"
		  filter: {
			past: false,
			videogameIds: [
			  ${MELEE_ID}
			],
			afterDate: ${Math.floor((new Date().getTime())/1000)},
			beforeDate: ${Math.floor((new Date().getTime())/1000)+3600*24*10},
			published: true
		  }
		}) {
			nodes {
			  id
			  name
			  slug
			  numAttendees
			  startAt
			  endAt
			  images{url}
			  participants(query: {
				
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
	
	//ghetto solution to get the remove the loading bar. Will not remove it if zoomed out enough to not need scroll.
	useEffect(()=>{
		fetchTournaments();
		window.addEventListener('scroll', unload);
	}, [])

	return(
		<Container maxWidth="lg" style={{backgroundColor: "FFDDCC", paddingBottom: "10px"}}>
			<h1>When's Melee?</h1>
			<TournamentsList tournaments={tournamentsList}/>
			<CircularProgress color="secondary" style={{display: loadingStyle(loading)}}/>
		</Container>
	);
}

export default WhensMelee;