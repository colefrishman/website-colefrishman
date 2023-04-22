import React, {useEffect, useState} from 'react';
import TournamentCard from './TournamentCard';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

const TournamentsList = (props) => {
	const [tournaments, setTournaments] = useState(props.tournaments);
	const [filters, setFilters] = useState({});
	const [JSX, setJSX] = useState([]);

	const handleOnlineFilterChange = () => {
		let tempFilters = {...filters}
		if(tempFilters['hasOnlineEvents'])
			delete tempFilters['hasOnlineEvents']
		else
			tempFilters['hasOnlineEvents'] = (tournament)=>{return tournament['hasOnlineEvents'] === true}
		setFilters(tempFilters)
	}
	
	const handleYetToStart = () => {
		let tempFilters = {...filters}
		if(tempFilters['yetToStart'])
			delete tempFilters['yetToStart']
		else
			tempFilters['yetToStart'] = (tournament)=>{return new Date(tournament['startAt']*1000) > new Date() }
		setFilters(tempFilters)
	}
	
	const handleRegistrationOpen = () => {
		let tempFilters = {...filters}
		if(tempFilters['registrationOpen'])
			delete tempFilters['registrationOpen']
		else
			tempFilters['registrationOpen'] = (tournament)=>{return tournament['isRegistrationOpen'] === true }
		setFilters(tempFilters)
	}

	const handleHappeningTodayChange = () => {
		let tempFilters = {...filters}
		if(tempFilters['happeningToday'])
			delete tempFilters['happeningToday']
		else
			tempFilters['happeningToday'] = (tournament)=>{return new Date(tournament['startAt']*1000).getDate() === new Date().getDate() }
		setFilters(tempFilters)
	}
	
	const handleHasStream = () => {
		let tempFilters = {...filters}
		if(tempFilters['hasStream'])
			delete tempFilters['hasStream']
		else
			tempFilters['hasStream'] = (tournament)=>{return tournament['streams'] != null }
		setFilters(tempFilters)
	}

	useEffect( () => {
		setTournaments(
			props.tournaments.filter( tournament => {
				let match = true
				Object.keys(filters).forEach(key => {
					if(!filters[key](tournament)){
						match = false
					}
				})
				return match
			})
		)
	}, [filters, props.tournaments])

	useEffect ( () => {
			setJSX(tournaments.map((tournament) => {
				return(<TournamentCard tournament={tournament} key={tournament.id}/>);
			}))
		}, [tournaments]
	)

	return(
		<>
			<FormControlLabel control={<Checkbox onChange={handleOnlineFilterChange} value={filters.hasOnlineEvents} />}  label="Online?" />
			<FormControlLabel control={<Checkbox onChange={handleHappeningTodayChange} value={filters.happeningToday} />}  label="Starts today?" />
			<FormControlLabel control={<Checkbox onChange={handleYetToStart} value={filters.yetToStart} />}  label="Yet to start?" />
			<FormControlLabel control={<Checkbox onChange={handleRegistrationOpen} value={filters.registrationOpen} />}  label="Registration open?" />
			<FormControlLabel control={<Checkbox onChange={handleHasStream} value={filters.hasStream} />}  label="Has stream?" />
			<div>
			{JSX}
			</div>
		</>
	)
}

export default TournamentsList;