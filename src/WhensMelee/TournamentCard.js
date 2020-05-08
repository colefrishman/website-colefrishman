import React, {} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';
import RoomIcon from '@material-ui/icons/Room';
import Avatar from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';

import { MELEE_ID } from './values'

const TournamentCard = (props) => {
	const tournament = props.tournament;
	let meleeAttendees = [];

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
				return(<Avatar variant="rounded" style={{height:"100px", width:"100px"}}><img src={tournament.images[0].url} alt={tournament.name} height="100px" width="100px"/></Avatar>);
			}
			else{
				return <span style={{height:"100px", width:"100px"}}/>;
			}
		}

		const getStreams = () => {
			if(!tournament.streams){
				return('')
			}
			const streams = (tournament.streams.map(stream => {
				return(<em>{" "}<a href={`https://twitch.tv/${stream.streamName}`} style={{color: "black"}}>{stream.streamName}</a></em>)
			}));
			return(
				<div>
					<SvgIcon htmlColor="DARKSLATEBLUE" fontSize="inherit">
						<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Twitch icon</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
					</SvgIcon>
					{streams}
				</div>
			);
		}

		const getLocation = () => {
			let address = [];
			if(tournament.hasOnlineEvents){
				address.push(<LanguageIcon fontSize="inherit" htmlColor="darkblue" />, " Online");
			}
			if(tournament.hasOfflineEvents){
				if(address.length>1){
					address.push(", ")
				}
				address.push(<RoomIcon fontSize="inherit" htmlColor="darkgreen"/>);
			}
			if(tournament.venueAddress){
				if(address.length === 2){
					address.push(", ")
				}
				address.push(` ${tournament.venueAddress}`);
			}
			return address;
		}

		return(
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ArrowDropDownCircleOutlinedIcon />} >
					{getIconImage()}
					<div style={{display: "block", marginLeft: "20px"}}>
						<h3 style={{alignItems: "center"}}>{tournament.name}</h3>
						<p>Starts: {(new Date(tournament.startAt*1000)).toString()}</p>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{display: "block"}}>
					{getLocation()}
					{getStreams()}
					{getAttendeesCount()}
					<p>{getAttendeeNames(10)}</p>
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