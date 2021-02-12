import React, {} from 'react';
import TournamentCard from './TournamentCard';

const TournamentsList = (props) => {
	const tournaments = props.tournaments;

	let JSX = tournaments.map((tournament) => {
		return(<TournamentCard tournament={tournament} key={tournament.id}/>);
	});
	return <div>{JSX}</div>;
}

export default TournamentsList;