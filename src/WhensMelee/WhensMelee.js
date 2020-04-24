import React, {useState, useEffect} from 'react';
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
			  'authorization': 'Bearer 45a7257fc0ac8d48d52d70218b192599'
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
		<div>
			<h1>Who's Melee?</h1>
			{TournamentsToList(tournamentsList)}
		</div>
	);
}

export default WhensMelee;