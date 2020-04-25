import React, {} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import { MELEE_ID } from './values'

const TournamentCard = (props) => {
	const tournament = props.tournament;
	let meleeAttendees = [];
	console.log("card updated")

	//Adds a particpant to meleeAttendees if the player is registered for melee
	if(tournament.participants.nodes){
		tournament.participants.nodes.forEach(participant => {
			let meleePlayer = false;
			if(participant.events){
				participant.events.forEach(event => {
					if(event.videogame.id === MELEE_ID){
						meleePlayer = true;
					}
				})
				if(meleePlayer){
					meleeAttendees.push(participant);
				}
			}
		});
	}
	
	const getAttendeeNames = (number) => {
		if(meleeAttendees.length<1){
			return '';
		}
		let top = "Featuring: ";
		let maxNumber = (number>meleeAttendees.length) ? meleeAttendees.length : number;
		
		for(let i=0; i<maxNumber; ++i){
			top += meleeAttendees[i].gamerTag + ", ";
		}

		if(meleeAttendees.length>number){
			top += "and more!"
		}
		else{
			top = top.slice(0, -2)
		}
		
		return top;
	}

	if(tournament){
		
		//returns the number of attendees registered for at least one melee event
		const getAttendeesCount = () => {
			if(meleeAttendees.length>1){
				return(<p>{meleeAttendees.length} attendees</p>);
			}
			else if(meleeAttendees.length === 1){
				return(<p>{meleeAttendees.length} attendee</p>);
			}
			else{
				return '';
			}
		}

		//Gets the first image for the torunament (if one exists)
		const getIconImage = () => {
			if(tournament.images[0]){
				return(<img src={tournament.images[0].url} alt={tournament.name} height="100px" width="100px"/>);
			}
			else{
				return <span style={{height:"100px", width:"100px"}}/>;
			}
		}

		return(
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ArrowDropDownCircleOutlinedIcon />} >
					{getIconImage()}
					<div style={{display: "block", marginLeft: "20px"}}>
						<h3 style={{display: "flex", alignItems: "center"}}>{tournament.name}</h3>
						<p>Starts: {(new Date(tournament.startAt*1000)).toString()}</p>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{display: "block"}}>
					{getAttendeesCount()}
					<Button href={`https://smash.gg/${tournament.slug}`} variant="contained" color="secondary">View on Smash.gg</Button>
					<p>{getAttendeeNames(10)}</p>
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