import { Button, Menu, MenuItem, Link } from "@material-ui/core"
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

			<MenuItem ><Link href="/home">Home</Link></MenuItem>
			<MenuItem ><Link href="/whensmelee">When's Melee?</Link></MenuItem>
			<MenuItem ><Link href="/imgvids">IMG #### video finder</Link></MenuItem>
			<MenuItem ><Link href="/dvd">DVD</Link></MenuItem>
		</Menu>
		<Button onClick={handleClick}><MenuIcon/>Navigate</Button>
	</div>
	);
}

export default NavBar;