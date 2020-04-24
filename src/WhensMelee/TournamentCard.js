import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

const TournamentCard = (props) => {
	const tournament = props.tournament;
	console.log(tournament)
	return(
		<ExpansionPanel>
			<ExpansionPanelSummary>
				<img src={tournament.images[0].url} alt={tournament.name} height="100px"/>
				<h3>{tournament.name}</h3>
			</ExpansionPanelSummary>
			<p>{tournament.venueName}</p>
			<p>{tournament.numAttendees} attendees</p>
			<p>Starts at {(new Date(tournament.startAt*1000)).toString()}</p>
			<Button href={`https://smash.gg/${tournament.slug}`} variant="contained" color="secondary">View on Smash.gg</Button>
			<br />
		</ExpansionPanel>
	)
}



export default TournamentCard;