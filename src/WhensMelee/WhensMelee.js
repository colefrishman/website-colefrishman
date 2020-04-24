import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import TournamentCard from './TournamentCard'

const WhensMelee = () => {
	const [tournamentsList, setTournamentsList] = useState([])
	let query = `query TournamentsByVideogame {
		tournaments(query: {
		  perPage: 3
		  page: 1
		  sortBy: "startAt asc"
		  filter: {
			past: false,
			videogameIds: [
			  1
			],
			afterDate: ${Math.floor((new Date().getTime())/1000)},
			published: true
		  }
		}) {
		  nodes {
			id
			name
			slug
			numAttendees
			startAt
			images{url}
		  }
		}
	  }`;

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
		.then(result => setTournamentsList(result.data.tournaments.nodes))
	}

	const TournamentsToList = (tournaments) => {

		let JSX = tournaments.map((tournament) => {
			return(<TournamentCard tournament={tournament} key={tournament.id}/>);
		});
		
		return JSX;
	}

	useEffect(()=>{
		fetchTournaments();
	}, [])

	return(
		<Container maxWidth="lg" style={{backgroundColor: "FFDDCC", paddingBottom: "10px"}}>
			<h1>Who's Melee?</h1>
			{TournamentsToList(tournamentsList)}
		</Container>
	);
}

export default WhensMelee;