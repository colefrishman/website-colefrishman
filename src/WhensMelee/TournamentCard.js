import React, {} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

const TournamentCard = (props) => {
	const tournament = props.tournament;
	
	if(tournament){
		const getAttendeesCount = () => {
			if(tournament.numAttendees>1){
				return(<p>{tournament.numAttendees} attendees</p>);
			}
			else if(tournament.numAttendees === 1){
				return(<p>{tournament.numAttendees} attendee</p>);
			}
			else{
				return '';
			}
		}

		return(
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ArrowDropDownCircleOutlinedIcon />}>
					<img src={tournament.images[0].url} alt={tournament.name} height="100px"/>
					<h3 style={{display: "flex", alignItems: "center", marginLeft: "20px"}}>{tournament.name}</h3>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{display: "block"}}>
					{getAttendeesCount()}
					<p>Starts at {(new Date(tournament.startAt*1000)).toString()}</p>
					<Button href={`https://smash.gg/${tournament.slug}`} variant="contained" color="secondary">View on Smash.gg</Button>
					<br />
				</ExpansionPanelDetails>
			</ExpansionPanel>
		)
	}
	else {
		return '';
	}
}



export default TournamentCard;