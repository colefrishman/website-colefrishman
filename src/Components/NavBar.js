import { Button, Menu, MenuItem} from "@material-ui/core"
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = (props) => {
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const menuOpened = Boolean(menuAnchorEl);

	const handleClick = (event) => {
		setMenuAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setMenuAnchorEl(null);
	};

	return(
	<div>
		<Menu id="fade-menu"
			open={menuOpened} 
        	anchorEl={menuAnchorEl} 
			onClose={handleClose}
			keepMounted
			>

			<MenuItem onClick={()=>{window.location="/home"}}>Home</MenuItem>
			<MenuItem onClick={()=>{window.location="https://us-map-maker.vercel.app/"}}>U.S. map maker</MenuItem>
			<MenuItem onClick={()=>{window.location="/whensmelee"}}>When's Melee?</MenuItem>
			<MenuItem onClick={()=>{window.location="/imgvids"}}>IMG #### video finder</MenuItem>
			<MenuItem onClick={()=>{window.location="/portfolio"}}>Design</MenuItem>
			<MenuItem onClick={()=>{window.location="/contact"}}>Contact</MenuItem>
			<MenuItem onClick={()=>{window.location="/dvd.html"}}>DVD</MenuItem>
		</Menu>
		<Button onClick={handleClick}><MenuIcon/>Navigate</Button>
	</div>
	);
}

export default NavBar;