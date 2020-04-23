import React, {useState} from 'react';

const TournamentCard = (props) => {

	return(
		<div>
			<h3>{props.tournament.name}</h3>
			<p>{props.tournament.venueName}</p>
			<p>{props.tournament.numAttendees} attendees</p>
			<p>Starts at {(new Date(props.tournament.startAt*1000)).toString()}</p>
			<a href={`https://smash.gg/${props.tournament.slug}`}>View on Smash.gg</a>
			<br />
		</div>
	)
}



export default TournamentCard;