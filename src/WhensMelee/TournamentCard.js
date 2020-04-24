import React, {} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const TournamentCard = (props) => {
	const tournament = props.tournament;
	console.log(tournament)
	return(
		<ExpansionPanel>
			<ExpansionPanelSummary expandIcon={<ArrowDropDownCircleOutlinedIcon />}>
				<img src={tournament.images[0].url} alt={tournament.name} height="100px"/>
				<h3 style={{display: "flex", alignItems: "center", marginLeft: "20px"}}>{tournament.name}</h3>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display: "block"}}>
				<p>{tournament.numAttendees} attendees</p>
				<p>Starts at {(new Date(tournament.startAt*1000)).toString()}</p>
				<Button href={`https://smash.gg/${tournament.slug}`} variant="contained" color="secondary">View on Smash.gg</Button>
				<br />
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}



export default TournamentCard;