import React, {} from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import RoomIcon from '@material-ui/icons/Room';
import Avatar from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';
import { Icon, InlineIcon } from '@iconify/react';
import twitchIcon from '@iconify/icons-mdi/twitch';
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
				return(<>{" "}<a href={`https://twitch.tv/${stream.streamName}`} >{stream.streamName}</a></>)
			}));
			return(
				<div>
					<Icon icon={twitchIcon} />
					{streams}
				</div>
			);
		}

		const getLocation = () => {
			let address = [];
			if(tournament.hasOnlineEvents){
				address.push(<LanguageIcon />, " Online");
			}
			if(tournament.hasOfflineEvents){
				if(address.length>1){
					address.push(", ")
				}
				address.push(<RoomIcon />);
			}
			if(tournament.venueAddress){
				if(address.length === 2){
					address.push(", ")
				}
				address.push(` ${tournament.venueAddress}`);
			}
			console.log(tournament)
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